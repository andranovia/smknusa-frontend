
import { useQuery } from "@tanstack/react-query";
import { getNews, getNewsCategories } from "../methods/fetch-news";

export type News = {
  id_pemberitahuan: string;
  nama: string;
  thumbnail: string;
  created_at: string;
  text: string;
  level: number;
  category: {
    id: number;
    nama: string;
  };
  viewer: string;
};

export const useNews = (id?: string) => {


  const { data: news, isLoading: isNewsLoading } = useQuery<News[] | null>({
    queryKey: ["News"],
    queryFn: () => getNews()
  });


  const { data: newsCategories } = useQuery({
    queryKey: ["NewsCategories"],
    queryFn: () => {
      return getNewsCategories();
    },
  });

  return { news, newsCategories, isNewsLoading };
};
