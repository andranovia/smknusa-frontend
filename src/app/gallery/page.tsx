import React from "react";
import InfoLayout from "@/layouts/info-layout";
import { ClientOnly } from "@/utils/isClient";
import GalleryCard from "@/components/gallery/gallery-card";

export const metadata = {
  title: "School Gallery",
  description: "SMKN 1 Purwosari School Gallery",
};

const page = () => {
  return (
    <ClientOnly>
      <InfoLayout
        title="Gallery"
        subtitle="Berisi kegiatan kegiatan yang ada di SMK Negeri 1 Purwosari"
      >
        <div className="flex flex-col w-full max-w-full md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-[1472.8px] bg-white">
          <GalleryCard />
        </div>
      </InfoLayout>
    </ClientOnly>
  );
};

export default page;
