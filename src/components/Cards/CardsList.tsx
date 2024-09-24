import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import Cards from "./Cards";

function CardsList({ api }: any) {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      {api?.data?.map((content: any) => (
        <Cards
          key={content.mal_id}
          id={content.mal_id}
          img={content.images.webp.image_url}
          title={content.title}
        />
      ))}
    </div>
  );
}

export default CardsList;
