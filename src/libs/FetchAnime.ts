export const FetchAnime = async (url: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`);
  const data = await response.json();

  return data;
};

export const FetchNested = async (url: string) => {
  const response = await FetchAnime(url);
  return response.data.flatMap((item: any) => item.entry);
};
