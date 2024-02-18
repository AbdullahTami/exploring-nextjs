import prisma from "@/utils/db";

async function prismaHandlers() {
  await prisma.task.create({
    data: {
      content: "Just woke up learning Next.js",
    },
  });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return allTasks;
}

async function PrismaExample() {
  const tasks = await prismaHandlers();
  return (
    <div>
      <h1 className="text-7xl">Prisma page</h1>
      {tasks.map((task) => (
        <h2 key={task.id} className="text-xl py-2">
          😀 {task.content}
        </h2>
      ))}
    </div>
  );
}

export default PrismaExample;
