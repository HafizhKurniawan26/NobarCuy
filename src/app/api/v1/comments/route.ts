import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { mal_id, user_email, comment, username, anime_title } =
    await request.json();
  const data = { mal_id, user_email, comment, username, anime_title };

  try {
    const createComment = await prisma.comment.create({ data });
    return NextResponse.json({ status: 200, data: createComment });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Failed to create comment",
    });
  }
}
