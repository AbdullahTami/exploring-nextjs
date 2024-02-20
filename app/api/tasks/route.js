import db from "@/utils/db";

export async function GET(req) {
  const tasks = await db.task.findMany();
  return Response.json({ data: tasks });
}

export async function POST(req) {
  const data = await req.json();
  const task = await db.task.create({
    data: {
      content: data.content,
    },
  });

  return Response.json({ msg: "Task created!", task });
}
