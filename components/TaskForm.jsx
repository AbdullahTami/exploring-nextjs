import { createTask } from "@/utils/actions";

function TaskForm() {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          placeholder="type here"
          name="content"
          className="input-bordered input w-full join-item"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          create task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
