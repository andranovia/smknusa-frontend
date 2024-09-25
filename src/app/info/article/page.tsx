"use client";

import { useState } from "react";
import ArticleCard from "@/components/info/article/article-card";
import ArticleForm from "@/components/info/article/article-form";
import InfoLayout from "@/layouts/info-layout";
import { ClientOnly } from "@/utils/isClient";

export default function Article() {
  const [articleFilter, setArticleFilter] = useState({
    search: "",
    start_date: "",
    end_date: "",
  });

  return (
    <ClientOnly>
      <InfoLayout
        title="Artikel-Artikel SMK"
        subtitle="Update artikel terbaru karya siswa-siswi SMK Negeri 1 Purwosari"
      >
        <div className="w-full max-w-[290px] xs:max-w-[330px] sm:max-w-[380px] md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-full rounded-lg">
          <ArticleForm
            articleFilter={articleFilter}
            setArticleFilter={setArticleFilter}
          />
          <ArticleCard articleFilter={articleFilter} />
        </div>
      </InfoLayout>
    </ClientOnly>
  );
}
