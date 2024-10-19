import { useQuery } from "@tanstack/react-query";
import { getArticleDetails, getArticles } from "../methods/fetch-articles";

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

export const useArticles = (
  id?: string,
  filter?: {
    search: string;
    start_date: string;
    end_date: string;
  }
) => {
  const {
    data: articles,
    isLoading: isArticlesLoading,
    refetch,
  } = useQuery<Article[] | null>({
    queryKey: ["Articles", filter],
    queryFn: () => getArticles(filter),
  });

  const { data: articleDetails, isLoading: isArticleDetailsLoading } =
    useQuery<Article | null>({
      queryKey: ["ArticleDetails"],
      queryFn: () => getArticleDetails(id),
      enabled: !!id,
    });

  return {
    articles,
    articleDetails,
    isArticleDetailsLoading,
    isArticlesLoading,
    refetch,
  };
};
