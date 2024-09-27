"use client";

import React, { useState } from "react";
import FacilityCard from "@/components/profile/facility/facility-card";
import FacilityFilter from "@/components/profile/facility/facility-filter";
import InfoLayout from "@/layouts/info-layout";
import { ClientOnly } from "@/utils/isClient";
import { useFacilities } from "@/services/api/useQueries/useFacilities";

const ProfileSchoolFacility = () => {
  const { facilities } = useFacilities();
  const [facilityFilter, setFacilityFilter] = useState<string | null>(null);

  const facilityCategories = Array.from(
    new Set(facilities?.map((facility) => facility.prodi.nama_prodi))
  ).map((category) => {
    return { id: category, name: category };
  });

  const filteredFacilities = facilities?.filter((facility) =>
    facilityFilter ? facility.prodi.nama_prodi === facilityFilter : true
  );

  return (
    <ClientOnly>
      <InfoLayout
        title="Fasilitas Sekolah"
        subtitle="Daftar fasilitas yang ada di SMK Negeri 1 Purwosari"
      >
        <div className="flex flex-col w-full max-w-full md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-[1472.8px] bg-white">
          <FacilityFilter
            setSelectedFilter={setFacilityFilter}
            filterData={facilityCategories}
          />
          <FacilityCard facilities={filteredFacilities} />
        </div>
      </InfoLayout>
    </ClientOnly>
  );
};

export default ProfileSchoolFacility;
