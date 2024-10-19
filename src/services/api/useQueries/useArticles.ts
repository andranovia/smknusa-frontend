import { useQuery } from "@tanstack/react-query";
import { getArticleCategories, getArticles } from "../methods/fetch-articles";

export type Article = {
  id_pemberitahuan: string;
  nama: string;
  icon_type: string;
  thumbnail: string;
  created_at: string;
  text: string;
  level: string;
  category: {
    id: number;
    nama: string;
    color: string;
  };
  viewer: string;
};

export const useArticles = (filter?: {
  search: string;
  start_date: string;
  end_date: string;
}) => {
  const {
    data: articles,
    isLoading: isArticlesLoading,
    refetch,
  } = useQuery<Article[] | null>({
    queryKey: ["Articles", filter],
    queryFn: () => getArticles(filter),
  });

  const { data: articleCategories } = useQuery({
    queryKey: ["ArticleCategories"],
    queryFn: () => {
      return getArticleCategories();
    },
  });

  return {
    articles,
    articleCategories,
    isArticlesLoading,
    refetch,
  };
};
