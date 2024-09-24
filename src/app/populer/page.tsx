"use client";
import CardsList from "@/components/Cards/CardsList";
import { scrollTop } from "@/libs/scrollTop";
import { FetchAnime } from "@/libs/FetchAnime";
import { Pagination } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PopulerPage() {
  const [dataAnime, setDataAnime] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await FetchAnime(`/top/anime?page=${currentPage}`);
      setDataAnime(data);
    };

    fetchApi();
  }, [currentPage]); // tambahkan `fetchApi` sebagai dependency jika dipindahkan

  return (
    <div className="mx-4 sm:mx-8 md:mx12 lg:mx-24 mb-40">
      <div className="flex justify-between items-center">
        <h1 className="bg-slate-800 text-white rounded-full w-fit py-1 px-4 text-sm mb-2">
          Populer Anime
        </h1>
      </div>

      <CardsList api={dataAnime} />
      <div className="flex justify-center mt-8">
        {dataAnime.pagination && (
          <Pagination
            showControls
            total={dataAnime?.pagination?.last_visible_page}
            initialPage={currentPage}
            variant="flat"
            showShadow
            boundaries={2}
            onChange={(newPage) => {
              setCurrentPage(newPage);
              scrollTop();
            }}
          />
        )}
      </div>
    </div>
  );
}
