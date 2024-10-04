"use client";

import { Suspense } from "react";
import InfoLayout from "@/layouts/info-layout";
import { ClientOnly } from "@/utils/isClient";
import ArticleContainer from "@/components/info/article/article-container";

export default function Article() {
  return (
    <ClientOnly>
      <InfoLayout
        title="Artikel-Artikel SMK"
        subtitle="Update artikel terbaru karya siswa-siswi SMK Negeri 1 Purwosari"
      >
        <div className="w-full max-w-[290px] xs:max-w-[330px] sm:max-w-[380px] md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-full rounded-lg">
          <Suspense fallback={<div>Loading...</div>}>
            <ArticleContainer />
          </Suspense>
        </div>
      </InfoLayout>
    </ClientOnly>
  );
}
