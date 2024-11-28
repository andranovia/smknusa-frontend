import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import ArticleForm from "./article-form";
import ArticleCard from "./article-card";

const ArticleContainer = () => {
  const params = useSearchParams();

  const search = params.get("search");
  const category = params.get("category");
  const start_date = params.get("start_date");
  const end_date = params.get("end_date");

  const [articleFilter, setArticleFilter] = useState({
    search: search || "",
    category: category || "",
    start_date: start_date || "",
    end_date: end_date || "",
  });

  return (
    <>
      <ArticleForm
        articleFilter={articleFilter}
        setArticleFilter={setArticleFilter}
      />
      <ArticleCard articleFilter={articleFilter} />
    </>
  );
};

export default ArticleContainer;
