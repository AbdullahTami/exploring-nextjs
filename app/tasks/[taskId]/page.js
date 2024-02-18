import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/actions";
import Link from "next/link";

async function SingleTaskPage({ params }) {
  const task = await getTask(params.taskId);

  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          back to tasks
        </Link>
      </div>
      <EditForm taskToEdit={task} />
    </>
  );
}

export default SingleTaskPage;
