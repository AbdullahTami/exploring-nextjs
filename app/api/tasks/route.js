import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const tasks = await db.task.findMany();
  return NextResponse.json({ data: tasks });
}

export async function POST(req) {
  const data = await req.json();
  const task = await db.task.create({
    data: {
      content: data.content,
    },
  });

  return NextResponse.json({ msg: "Task created!", task });
}
