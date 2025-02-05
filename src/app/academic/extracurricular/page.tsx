import React from "react";
import ExtracurricularCard from "@/components/academic/extracurricular/extracurricular-card";
import ExtracurricularHeader from "@/components/academic/extracurricular/extracurricular-header";
import InfoLayout from "@/layouts/info-layout";
import { ClientOnly } from "@/utils/isClient";

export const metadata = {
  title: "School Extracurricular",
  description: "SMKN 1 Purwosari School Extracurricular",
};

const Page = () => {
  return (
    <ClientOnly>
      <InfoLayout
        title="Ekstrakurikuler"
        subtitle="Daftar ekstrakurikuler yang ada di SMK Negeri 1 Purwosari"
      >
        <div className="flex flex-col w-full max-w-full md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-[1472.8px] bg-white">
          <ExtracurricularHeader />
          <ExtracurricularCard />
        </div>
      </InfoLayout>
    </ClientOnly>
  );
};

export default Page;
