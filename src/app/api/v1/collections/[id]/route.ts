import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request: any) {
  const url = new URL(request.url);
  const mal_id = url.pathname.split("/").pop(); // Ambil mal_id dari URL
  const user_email = request.headers.get("user_email"); // Ambil user_email dari header (atau kirim via params)

  try {
    const deleteCollection = await prisma.collections.delete({
      where: {
        user_email_mal_id: {
          user_email, // Pastikan email juga disertakan
          mal_id,
        },
      },
    });
    return NextResponse.json({ status: 200, msg: "Collection deleted" });
  } catch (error) {
    console.error("Error deleting collection:", error.message);
    return NextResponse.json({
      status: 500,
      message: "Failed to delete collection",
      error: error.message,
    });
  }
}
