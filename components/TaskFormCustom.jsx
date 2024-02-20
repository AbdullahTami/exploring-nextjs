"use client";

import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "please wait..." : "create task"}
    </button>
  );
}

const initialState = {
  message: null,
};

function TaskForm() {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if (state.message === "error") toast.error("There was an error");
    if (state.message === "success") toast.success("Task created");
  }, [state]);
  return (
    <form action={formAction}>
      {state.message && <p className="mb-2">{state.message}</p>}
      <div className="join w-full">
        <input
          type="text"
          placeholder="type here"
          name="content"
          className="input-bordered input w-full join-item"
          required
        />
        <SubmitBtn />
        {/* <button type="submit" className="btn btn-primary join-item">
          create task
        </button> */}
      </div>
    </form>
  );
}

export default TaskForm;
