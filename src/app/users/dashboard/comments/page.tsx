import DeleteComment from "@/components/CommentBox/DeleteComment";
import Header from "@/components/Header";
import { authUserSession } from "@/libs/authLibs";
import prisma from "@/libs/prisma";
import { Card, CardBody } from "@nextui-org/react";
import React from "react";

const page = async () => {
  const user = await authUserSession();
  const commentUser = await prisma.comment.findMany({
    where: {
      user_email: user?.email,
    },
  });

  console.log(commentUser);
  return (
    <div className="mx-4 sm:mx-8 md:mx12 lg:mx-24 mb-40">
      <Header>My Comments</Header>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {commentUser.map((list: any, index: number) => (
          <Card key={index} className="pb-2">
            <CardBody>
              {/* <h3 className="text-sm">{list.username}</h3> */}
              <div className="flex justify-between items-center">
                <h1 className="bg-slate-800 text-white rounded-md w-fit h-fit py-1 px-5 text-sm mb-2">
                  {list.anime_title}
                </h1>
                <DeleteComment
                  comment={list.comment}
                  mal_id={list.mal_id}
                  user_email={list.user_email}
                />
              </div>
              <p className="text-sm px-2">{list.comment}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
