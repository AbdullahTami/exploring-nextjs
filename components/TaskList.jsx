import prisma from "@/utils/db";
import Link from "next/link";
import DeleteForm from "./DeleteForm";

async function TaskList() {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  if (!tasks.length) {
    return <h2 className="font-medium mt-8 text-lg">No tasks to show...</h2>;
  }
  return (
    <ul className="mt-8">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
        >
          <h2
            className={`text-lg capitalize ${task.completed && "line-through"}`}
          >
            {task.content}
          </h2>
          <div className="flex gap-6 items-center">
            <Link href={`tasks/${task.id}`} className="btn btn-accent btn-xs">
              edit
            </Link>
            <DeleteForm id={task.id} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
