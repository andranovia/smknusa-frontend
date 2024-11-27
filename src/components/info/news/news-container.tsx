import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import NewsForm from "./news-form";
import NewsCard from "./news-card";

const NewsContainer = () => {
  const params = useSearchParams();

  const search = params.get("search");
  const start_date = params.get("start_date");
  const category = params.get("category");
  const end_date = params.get("end_date");

  const [newsFilter, setNewsFilter] = useState({
    search: search || "",
    category: category || "",
    start_date: start_date || "",
    end_date: end_date || "",
  });

  return (
    <>
      <NewsForm newsFilter={newsFilter} setNewsFilter={setNewsFilter} />
      <NewsCard newsFilter={newsFilter} />
    </>
  );
};

export default NewsContainer;
