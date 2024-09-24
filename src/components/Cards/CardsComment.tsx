import { authUserSession } from "@/libs/authLibs";
import prisma from "@/libs/prisma";
import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import Header from "../Header";
import { FaTrash, FaTrashAlt } from "react-icons/fa";
import DeleteComment from "../CommentBox/DeleteComment";

const CardsComment = async ({ commentUser }: { commentUser: any }) => {
  const user = await authUserSession();
  const userEmail = user?.email;

  //   const commentList = await prisma.comment.findMany();

  console.log(commentUser);

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {commentUser.map((list: any, index: number) => (
        <Card key={index} className="pb-2">
          <CardBody>
            {/* <h3 className="text-sm">{list.username}</h3> */}
            <div className="flex justify-between items-center">
              <Header>{list.username}</Header>
              {userEmail && (
                <DeleteComment
                  mal_id={list.mal_id}
                  comment={list.comment}
                  user_email={list.user_email}
                />
              )}
            </div>
            <p className="text-sm px-2">{list.comment}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default CardsComment;
