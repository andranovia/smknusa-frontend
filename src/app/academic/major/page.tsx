"use client";

import React, { useState } from "react";
import MajorCard from "@/components/academic/major/major-card";
import MajorFilter from "@/components/academic/major/major-filter";
import InfoLayout from "@/layouts/info-layout";
import { ClientOnly } from "@/utils/isClient";
import { useMajors } from "@/services/api/useQueries/useMajors";

const Page = () => {
  const { majors } = useMajors();
  const [majorFilter, setMajorFilter] = useState<string | null>(null);

  const majorCategories = Array.from(
    new Set(majors?.map((major) => major.prodi.nama_prodi))
  ).map((category) => {
    return { id: category, name: category };
  });

  const filteredMajors = majors?.filter((major) =>
    majorFilter ? major.prodi.nama_prodi === majorFilter : true
  );

  return (
    <ClientOnly>
      <InfoLayout
        title="Kejuruan"
        subtitle="Daftar jurusan yang ada di SMK Negeri 1 Purwosari"
      >
        <div className="flex flex-col w-full max-w-full md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-[1472.8px] bg-white">
          <MajorFilter
            filterData={majorCategories}
            setSelectedFilter={setMajorFilter}
          />
          <MajorCard majors={filteredMajors} />
        </div>
      </InfoLayout>
    </ClientOnly>
  );
};

export default Page;
