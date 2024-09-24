"use client";
import { Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoSend } from "react-icons/io5";

type TCommentBox = {
  mal_id: string | null;
  user_email: string | null | undefined;
  username: string | null | undefined;
  anime_title: string | null | undefined;
};

const CommentBox: React.FC<TCommentBox> = ({
  mal_id,
  user_email,
  username,
  anime_title,
}) => {
  const [comment, setComment] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = { mal_id, user_email, username, comment, anime_title };

    // Jika belum aktif, tambahkan ke koleksi
    const response = await fetch("/api/v1/comments", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    setComment("");

    router.refresh();

    console.log(result);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <Textarea
          size="lg"
          placeholder="Enter your comment about this anime"
          className="w-full"
          value={comment}
          onChange={(e: any) => setComment(e.target.value)}
        />
        <button
          type="submit"
          className=" p-2 text-xl text-blue-500 bg-gray-950 rounded-xl absolute bottom-3 right-3 z-[100]"
        >
          <IoSend />
        </button>
      </form>
    </div>
  );
};

export default CommentBox;
