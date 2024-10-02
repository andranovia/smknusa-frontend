import { useQuery } from "@tanstack/react-query";
import { getNews, getNewsCategories } from "../methods/fetch-news";

export type News = {
  id_pemberitahuan: string;
  nama: string;
  icon_type: string;
  thumbnail: string;
  created_at: string;
  text: string;
  level: number;
  category: {
    id: number;
    nama: string;
    color: string;
  };
  viewer: string;
};

export const useNews = (filter?: {
  search: string;
  start_date: string;
  end_date: string;
}) => {
  const {
    data: news,
    isLoading: isNewsLoading,
    refetch,
  } = useQuery<News[] | null>({
    queryKey: ["News", filter],
    queryFn: () => getNews(filter),
  });

  const { data: newsCategories } = useQuery({
    queryKey: ["NewsCategories"],
    queryFn: () => {
      return getNewsCategories();
    },
  });

  return { news, newsCategories, isNewsLoading, refetch };
};
