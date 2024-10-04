"use client";

import { Suspense } from "react";
import InfoLayout from "@/layouts/info-layout";
import { ClientOnly } from "@/utils/isClient";
import NewsContainer from "@/components/info/news/news-container";

export default function News() {
  return (
    <ClientOnly>
      <InfoLayout
        title="Berita-Berita SMK"
        subtitle="Update informasi terbaru seputar kegiatan-kegiatan yang berlangsung pada SMK Negeri 1 Purwosari"
      >
        <div className="w-full max-w-[290px] xs:max-w-[330px] sm:max-w-[380px] md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-full ">
          <Suspense fallback={<div>Loading...</div>}>
            <NewsContainer />
          </Suspense>
        </div>
      </InfoLayout>
    </ClientOnly>
  );
}
