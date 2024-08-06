"use client";

import FacilityCard from "@/components/profile/facility/facility-card";
import FacilityFilter from "@/components/profile/facility/facility-filter";
import InfoLayout from "@/layouts/info-layout";
import { ClientOnly } from "@/utils/isClient";
import React from "react";

const ProfileSchoolFacility = () => {
  return (
    <ClientOnly>
      <InfoLayout
        title="Fasilitas Sekolah"
        subtitle="Daftar fasilitas yang ada di SMK Negeri 1 Purwosari"
      >
        <FacilityFilter />
        <FacilityCard />
      </InfoLayout>
    </ClientOnly>
  );
};

export default ProfileSchoolFacility;
