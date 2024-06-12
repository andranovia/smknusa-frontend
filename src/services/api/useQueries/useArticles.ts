import { useQuery } from "@tanstack/react-query";
import {
  getArticleById,
  getArticleCategories,
  getArticles,
} from "../methods/fetch-articles";

type Article = {
  id_pemberitahuan: string;
  nama: string;
  thumnail: string;
  date: string;
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
    queryKey: ["articles"],
    queryFn: () => getArticles()
  });

  const { data: articleById } = useQuery({
    queryKey: ["articleById"],
    queryFn: () => {
      return getArticleById(id);
    },
  });

  const { data: articleCategories } = useQuery({
    queryKey: ["articleCategories"],
    queryFn: () => {
      return getArticleCategories();
    },
  });

  return { articles, articleById, articleCategories };
};
