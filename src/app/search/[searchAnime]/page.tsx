import CardsList from "@/components/Cards/CardsList";
import { useFetchAnime } from "@/libs/useFetchAnime";

const Page = async ({ params }: { params: { searchAnime: string } }) => {
  const searchParams = params.searchAnime;

  // Ambil data di sini
  const data = await useFetchAnime(`/anime?q=${searchParams}`);

  console.log(data);

  return (
    <div className="mx-4 sm:mx-8 md:mx12 lg:mx-24 mb-40">
      <CardsList api={data} />
    </div>
  );
};

export default Page;
