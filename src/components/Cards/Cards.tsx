"use client";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

type TCards = {
  id: string | number;
  title: string;
  img: string;
  className?: string;
};

const Cards = ({ id, title, img }: TCards) => {
  const router = useRouter();
  return (
    <Card
      shadow="sm"
      key={id}
      isPressable
      className={`bg-slate-800 hover:scale-105 hover:shadow-2xl transition-all`}
      onClick={() => router.push(`/anime/${id}`)}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          height={250}
          alt={title}
          className="w-full object-cover h-[140px]"
          src={img}
        />
      </CardBody>
      <CardFooter className="text-sm flex justify-center items-center">
        <p className="text-white">
          {title.length > 40 ? title.substring(0, 40) + "..." : title}
        </p>
      </CardFooter>
    </Card>
  );
};

export default Cards;
