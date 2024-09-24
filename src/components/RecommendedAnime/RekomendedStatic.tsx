"use client";

import { useFetchAnime, useFetchNested } from "@/libs/useFetchAnime";
import { useEffect, useState } from "react";
import { divider } from "@nextui-org/react";
import Image from "next/image";
import CardsList from "@/components/Cards/CardsList";
import { generateRandomNumber } from "@/libs/generateRandomNumber";

const RekomendedStatic = ({ totalCard }: { totalCard: number }) => {
  const [dataAnime, setDataAnime] = useState([]);

  const fetchData = async () => {
    let resData = await useFetchNested(`/recommendations/anime`);
    setDataAnime(resData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [start, end] = generateRandomNumber(dataAnime.length, totalCard);

  let resultData = dataAnime.slice(start, end);
  resultData = { data: resultData };

  console.log(dataAnime);
  console.log(resultData);
  return <CardsList api={resultData} />;
};

export default RekomendedStatic;
