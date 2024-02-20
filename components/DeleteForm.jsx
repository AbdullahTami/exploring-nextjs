"use client";

import { deleteTask } from "@/utils/actions";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-error btn-xs" disabled={pending}>
      {pending ? "deleting..." : "delete"}
    </button>
  );
}

function DeleteForm({ id }) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton />
    </form>
  );
}

export default DeleteForm;
