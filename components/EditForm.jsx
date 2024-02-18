import { editTask } from "@/utils/actions";

function EditForm({ taskToEdit }) {
  const { id, completed, content } = taskToEdit;
  return (
    <form
      action={editTask}
      className="max-w-sm p-12 border border-base-300 rounded-lg"
    >
      <input type="hidden" name="id" value={id} />

      {/* content */}
      <input
        type="text"
        required
        name="content"
        defaultValue={content}
        className="input input-bordered w-full"
      />

      {/* is completed */}
      <div className="form-control my-4">
        <label htmlFor="completed" className="cursor-pointer label">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            name="completed"
            className="checkbox-primary checkbox checkbox-sm"
            defaultChecked={completed}
            id="completed"
          />
        </label>
      </div>
      <button className="btn-primary btn-block bnt-sm btn" type="submit">
        edit
      </button>
    </form>
  );
}

export default EditForm;
