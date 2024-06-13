import { useQuery } from "@tanstack/react-query";
import {
  getArticleById,
  getArticleCategories,
  getArticles,
} from "../methods/fetch-articles";

type Article = {
  id_pemberitahuan: string;
  nama: string;
  thumbnail: string;
  created_at: string;
  text: HTMLElement;
  level: string;
  category: {
    id: number;
    nama: string;
  };
  viewer: string;
};

export const useArticles = (id?: string) => {


  const { data: articles } = useQuery<Article[] | null>({
    queryKey: ["Articles"],
    queryFn: () => getArticles()
  });

  const { data: articleById } = useQuery({
    queryKey: ["ArticleById"],
    queryFn: () => {
      return getArticleById(id);
    },
  });

  const { data: articleCategories } = useQuery({
    queryKey: ["ArticleCategories"],
    queryFn: () => {
      return getArticleCategories();
    },
  });

  return { articles, articleById, articleCategories };
};
