import { useQuery } from "@tanstack/react-query";
import { getNews, getNewsDetails } from "../methods/fetch-news";

export type News = {
  id_pemberitahuan: string;
  nama: string;
  icon_type: string;
  thumbnail: string;
  created_at: string;
  text: string;
  level: number;
  published_by: {
    name: string;
    img: string;
  };
  jurnal_by: string;
  location: string;
  category: {
    id: number;
    nama: string;
    color: string;
  };
  viewer: string;
};

export type NewsData = {
  data: News[];
  pagination: { total: number; per_page: number; current_page: number };
}

export const useNews = (
  id?: string,
  page?: number,
  filter?: {
    search: string;
    category: string;
    start_date: string;
    end_date: string;
  }
) => {
  const {
    data: news,
    isLoading: isNewsLoading,
    refetch,
  } = useQuery<NewsData | null>({
    queryKey: ["News", filter],
    queryFn: () => getNews(filter, page),
  });

  const { data: newsDetails, isLoading: isNewsDetailsLoading } =
    useQuery<News | null>({
      queryKey: ["NewsDetails"],
      queryFn: () => getNewsDetails(id),
      enabled: !!id,
    });

  const filteredNews = news?.data.filter((item) =>
    filter?.category ? item.category.nama.toLowerCase().includes(filter.category.toLowerCase()) : true
  );

  const categoriesNews = Array.from(new Set(news?.data.map((item) => item.category.nama)));

  return { news: { ...news, data: filteredNews }, newsDetails, isNewsDetailsLoading, isNewsLoading, refetch, categoriesNews };
};
