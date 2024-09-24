export const useFetchAnime = async (url: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`);
  const data = await response.json();

  return data;
};

export const useFetchNested = async (url: string) => {
  const response = await useFetchAnime(url);
  return response.data.flatMap((item: any) => item.entry);
};
