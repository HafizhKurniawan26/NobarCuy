import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { mal_id, user_email, comment } = await request.json();

  try {
    const createComment = await prisma.comment.deleteMany({
      where: {
        mal_id,
        user_email,
        comment,
      },
    });
    return NextResponse.json({ status: 200, data: "Comment Deleted" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Failed to Delete Comment",
    });
  }
}
