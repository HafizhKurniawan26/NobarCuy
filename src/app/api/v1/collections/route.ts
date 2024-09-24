import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { mal_id, user_email, img, title } = await request.json();
  const data = { mal_id, user_email, img, title };

  try {
    const createCollection = await prisma.collections.create({ data });
    return NextResponse.json({ status: 200, data: createCollection });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Failed to create collection",
    });
  }
}
