"use client";

import React from "react";
import FacilityCard from "@/components/profile/facility/facility-card";
import FacilityFilter from "@/components/profile/facility/facility-filter";
import InfoLayout from "@/layouts/info-layout";
import { ClientOnly } from "@/utils/isClient";

const ProfileSchoolFacility = () => {
  return (
    <ClientOnly>
      <InfoLayout
        title="Fasilitas Sekolah"
        subtitle="Daftar fasilitas yang ada di SMK Negeri 1 Purwosari"
      >
        <div className="flex flex-col w-full max-w-full md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-[1472.8px] bg-white">
          <FacilityFilter />
          <FacilityCard />
        </div>
      </InfoLayout>
    </ClientOnly>
  );
};

export default ProfileSchoolFacility;
