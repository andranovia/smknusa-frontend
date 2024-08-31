import { useQuery } from "@tanstack/react-query";
import {
  getArticleCategories,
  getArticles,
} from "../methods/fetch-articles";

export type Article = {
  id_pemberitahuan: string;
  nama: string;
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

export const useArticles = ( ) => {


  const { data: articles, isLoading: isArticlesLoading } = useQuery<Article[] | null>({
    queryKey: ["Articles"],
    queryFn: () => getArticles()
  });


  const { data: articleCategories } = useQuery({
    queryKey: ["ArticleCategories"],
    queryFn: () => {
      return getArticleCategories();
    },
  });

  return { articles, articleCategories, isArticlesLoading };
};
