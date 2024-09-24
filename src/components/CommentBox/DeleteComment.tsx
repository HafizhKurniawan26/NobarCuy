"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

type TDelComment = {
  mal_id: string | undefined | null;
  user_email: string | undefined | null;
  comment: string | undefined | null;
};
const DeleteComment: React.FC<TDelComment> = ({
  mal_id,
  user_email,
  comment,
}) => {
  const router = useRouter();

  const handleDelete = async (e: any) => {
    e.preventDefault();

    const DelFetch = await fetch("/api/v1/comments/delete", {
      method: "POST",
      body: JSON.stringify({
        mal_id,
        user_email,
        comment,
      }),
    });

    router.refresh();
  };
  return (
    <div>
      <button onClick={handleDelete}>
        <FaTrashAlt className="text-sm text-red-600" />
      </button>
    </div>
  );
};

export default DeleteComment;
