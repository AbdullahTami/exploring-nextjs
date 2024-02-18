import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

async function createTask(formData) {
  "use server";
  const content = formData.get("content");
  //   console.log(content);
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
}

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
          create submit
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
