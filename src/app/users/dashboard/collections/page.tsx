import Cards from "@/components/Cards/Cards";
import Header from "@/components/Header";
import { authUserSession } from "@/libs/authLibs";
import prisma from "@/libs/prisma";
import { useFetchAnime } from "@/libs/useFetchAnime";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const user = await authUserSession();

  const myCollections = await prisma.collections.findMany({
    where: {
      user_email: user.email,
    },
  });
  // myCollections.map((col) => {
  //   console.log(col.user_email);
  // });

  console.log(myCollections);
  return (
    <div className="mx-4 sm:mx-8 md:mx12 lg:mx-24 mb-40">
      <Header>My Collections</Header>
      <div className="grid grid-cols-5 gap-4 mt-4">
        {myCollections.map((col: any, index) => (
          <Cards key={index} id={col.mal_id} title={col.title} img={col.img} />
        ))}
      </div>
    </div>
  );
};

export default page;
