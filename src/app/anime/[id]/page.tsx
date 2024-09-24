import ButtonCollections from "@/components/Buttons/ButtonCollections";
import CardsComment from "@/components/Cards/CardsComment";
import CommentBox from "@/components/CommentBox/CommentBox";
import RekomendedStatic from "@/components/RecommendedAnime/RekomendedStatic";
import { authUserSession } from "@/libs/authLibs";
import prisma from "@/libs/prisma";
import { useFetchAnime } from "@/libs/useFetchAnime";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbMovie } from "react-icons/tb";

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const { data } = await useFetchAnime(`/anime/${id}/full`);
  const user = await authUserSession();

  const commentUser = await prisma.comment.findMany({
    where: {
      mal_id: id,
    },
  });

  console.log(commentUser);

  const userData = await prisma.collections.findMany({
    where: {
      user_email: user?.email,
    },
  });

  // console.log(userData);
  console.log(data);

  // Cek apakah mal_id dari data ada di userData
  const isCollected = userData.some((col: any) => col.mal_id === id);
  console.log(isCollected);

  const Duration = data.duration
    .replace(/min|per|ep/g, "")
    .replace(/\s\s+/g, "");

  const BgBanner = data.trailer.images.maximum_image_url;

  const genre = data.genres;
  const producer = data.producers.map((item: any) => item.name);
  const opening = data.theme.openings;

  return (
    <main className="mx-4 sm:mx-8 md:mx12 lg:mx-24 mt-4">
      <div>
        <section
          className="w-full h-[280px] md:h-[500px] relative rounded-lg"
          style={{
            backgroundImage: `url(${
              BgBanner ? BgBanner : data.images.jpg.large_image_url
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute -bottom-24 md:-bottom-36 right-10 shadow-2xl shadow-black">
            <Image
              src={data.images.jpg.image_url}
              width={200}
              height={200}
              alt={data.title}
              className="rounded-lg shadow-inner shadow-black w-40 sm:w-52 md:w-56 lg:w-64"
            />
          </div>
        </section>

        <section>
          <div className="flex gap-2 m-4 w-1/2 flex-wrap">
            {genre.map((item: any, index: number) => (
              <div key={index}>
                <p className="text-white text-sm bg-slate-800 rounded-full px-4">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl m-4 md:mt-4 mt-20 w-3/4 ">
            {data.title}
          </h1>
          <div className="flex gap-12 m-4">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-600 text-xl" />
              <p className="text-white">{data.score}</p>
            </div>
            <div className="flex items-center gap-1">
              <FaRankingStar className="text-white text-xl" />
              <p className="text-white">{data.rank}</p>
            </div>
            <div className="flex items-center gap-1">
              <MdOutlineWatchLater className="text-white text-xl" />
              <p className="text-white">{Duration} Minutes</p>
            </div>
            <div className="flex items-center gap-1">
              <TbMovie className="text-white text-xl" />
              <p className="text-white">{data.episodes} Eps</p>
            </div>

            {/* Jika user ada, render ButtonCollections */}
            {user && (
              <div className="flex items-center">
                <ButtonCollections
                  mal_id={id}
                  user_email={user?.email}
                  img={data.images.jpg.image_url}
                  title={data.title}
                  aktif={isCollected} // Kirim true jika mal_id ada di koleksi user
                />
              </div>
            )}
          </div>
        </section>

        <section className="mt-20 m-4">
          <h1 className="text-white text-xl underline underline-offset-2 mb-1 ">
            Sinopsis
          </h1>
          <p className="text-white">{data.synopsis}</p>
        </section>

        {data.trailer.embed_url && (
          <section className="m-4 mt-12">
            <h1 className="text-white text-xl underline underline-offset-2 mb-2 ">
              Trailer
            </h1>

            <iframe
              src={`${data.trailer.embed_url}?autoplay=0`}
              className="w-full h-[250px] md:h-[480px] lg:h-[520px]  rounded"
            ></iframe>
          </section>
        )}

        <section className="text-white m-4 mt-12">
          <h1 className="text-white text-xl underline underline-offset-2 mb-2 ">
            About More
          </h1>
          <p>Rating : {data.rating}</p>
          <p>Popularity : {data.popularity}</p>
          <p>Producers : {producer.join(", ")}</p>
        </section>

        {opening.length > 0 && (
          <section className="text-white m-4 mt-12">
            <h1 className="text-white text-xl underline underline-offset-2 mb-2 ">
              Openings
            </h1>
            {opening.map((item: any, index: number) => (
              <div key={index}>
                <p>{item}</p>
              </div>
            ))}
          </section>
        )}

        <section className="text-white m-4 mt-12">
          <h1 className="text-white text-xl underline underline-offset-2 mb-2 ">
            Recommended
          </h1>
          <RekomendedStatic totalCard={5} />
        </section>

        <section className="text-white m-4 mt-12">
          <h1 className="text-white text-xl underline underline-offset-2 mb-2 ">
            Comments
          </h1>
          {/* <CardsComment commentUser={commentUser} /> */}
          {commentUser.length > 0 ? (
            <CardsComment commentUser={commentUser} />
          ) : (
            <p className="text-white mb-4">No Comments Yet</p>
          )}
          <CommentBox
            mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={data.title}
          />
        </section>
      </div>
    </main>
  );
};

export default DetailPage;
