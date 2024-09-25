"use client";

import { useState } from "react";
import NewsCard from "@/components/info/news/news-card";
import NewsForm from "@/components/info/news/news-form";
import InfoLayout from "@/layouts/info-layout";
import { ClientOnly } from "@/utils/isClient";

export default function News() {
  const [newsFilter, setNewsFilter] = useState({
    search: "",
    start_date: "",
    end_date: "",
  });

  return (
    <ClientOnly>
      <InfoLayout
        title="Berita-Berita SMK"
        subtitle="Update informasi terbaru seputar kegiatan-kegiatan yang berlangsung pada SMK Negeri 1 Purwosari"
      >
        <div className="w-full max-w-[290px] xs:max-w-[330px] sm:max-w-[380px] md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-full ">
          <NewsForm newsFilter={newsFilter} setNewsFilter={setNewsFilter} />
          <NewsCard newsFilter={newsFilter} />
        </div>
      </InfoLayout>
    </ClientOnly>
  );
}
