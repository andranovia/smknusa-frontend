import { useQuery } from "@tanstack/react-query";
import { getNews, getNewsById, getNewsCategories } from "../methods/fetch-news";

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


  const { data: news } = useQuery<News[] | null>({
    queryKey: ["News"],
    queryFn: () => getNews()
  });

  const { data: newsById } = useQuery({
    queryKey: ["NewsById"],
    queryFn: () => {
      return getNewsById(id);
    },
  });

  const { data: newsCategories } = useQuery({
    queryKey: ["NewsCategories"],
    queryFn: () => {
      return getNewsCategories();
    },
  });

  return { news, newsById, newsCategories };
};
