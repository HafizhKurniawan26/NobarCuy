import CardsList from "@/components/Cards/CardsList";
import Header from "@/components/Header";
import RekomendedStatic from "@/components/RecommendedAnime/RekomendedStatic";
import Rekomended from "@/components/RecommendedAnime/RekomendedStatic";
import RekomendedSwiper from "@/components/RecommendedAnime/RekomendedSwiper";
import { useFetchAnime } from "@/libs/useFetchAnime";
import { Navbar } from "@nextui-org/react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default async function Home() {
  const data = await useFetchAnime("/top/anime?limit=10");
  console.log(data.data);

  return (
    <main className="mx-4 sm:mx-8 md:mx12 lg:mx-24 mb-40">
      <section>
        <Header>Recommended</Header>
        <RekomendedStatic totalCard={5} />
      </section>

      <section className="flex justify-between items-center mt-12">
        <Header>Top Anime</Header>
        <Link
          href={"/populer"}
          className="flex items-center gap-1 text-sm mr-2 border-b-1 text-white hover:text-blue-600 hover:border-blue-600"
        >
          <p>View All</p>
          <FaArrowRightLong />
        </Link>
      </section>

      <CardsList api={data} />
    </main>
  );
}
