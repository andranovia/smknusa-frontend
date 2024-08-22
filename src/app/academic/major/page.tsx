import MajorCard from "@/components/academic/major/major-card";
import MajorHeader from "@/components/academic/major/major-header";
import InfoLayout from "@/layouts/info-layout";
import { ClientOnly } from "@/utils/isClient";
import React from "react";

const page = () => {
  return (
    <ClientOnly>
      <InfoLayout
        title="Kejuruan"
        subtitle="Daftar jurusan yang ada di SMK Negeri 1 Purwosari"
      >
        <div className="flex flex-col w-full max-w-full md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-[1472.8px] bg-white">
          <MajorHeader />
          <MajorCard/>
        </div>

      </InfoLayout>
    </ClientOnly>
  );
};

export default page;
