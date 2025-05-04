import { useQuery } from "@tanstack/react-query";
import { getArticleDetails, getArticles } from "../methods/fetch-articles";

export type Article = {
  id_pemberitahuan: string;
  nama: string;
  icon_type: string;
  thumbnail: string;
  created_at: string;
  text: string;
  iframe: string[];
  level: string;
  published_by: {
    name: string;
    img: string;
  };
  jurnal_by: string;
  category: {
    id: number;
    nama: string;
    color: string;
  };
  viewer: string;
};

export type ArticlesData = {
  data: Article[];
  pagination: { total: number; per_page: number; current_page: number };
}

export const useArticles = (
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
    data: articles,
    isLoading: isArticlesLoading,
    refetch,
  } = useQuery<ArticlesData| null>({
    queryKey: ["Articles", filter],
    queryFn: () => getArticles(filter),
  });

  const { data: articleDetails, isLoading: isArticleDetailsLoading } =
    useQuery<Article | null>({
      queryKey: ["ArticleDetails"],
      queryFn: () => getArticleDetails(id),
      enabled: !!id,
    });

  const filteredArticles = articles?.data.filter((item) =>
    filter?.category ? item.category.nama.toLowerCase().includes(filter.category.toLowerCase()) : true
  );

  const categoriesArticles = Array.from(new Set(articles?.data.map((item) => item.category.nama)));

  return {
    articles: {...articles, data: filteredArticles},
    articleDetails,
    isArticleDetailsLoading,
    isArticlesLoading,
    refetch,
    categoriesArticles
  };
};
