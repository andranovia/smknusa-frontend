"use client";

import React, { useState } from "react";
import PartnershipCard from "@/components/bkk/partnership/partnership-card";
import PartnershipForm from "@/components/bkk/partnership/partnership-form";
import InfoLayout from "@/layouts/info-layout";
import { ClientOnly } from "@/utils/isClient";

const Partnership = () => {
  const [partnershipFilter, setPartnershipFilter] = useState({
    search: "",
  });

  return (
    <ClientOnly>
      <InfoLayout
        title="Kemitraan"
        subtitle="Daftar kemitraan SMK Negeri 1 Purwosari"
      >
        <div className="pb-20  flex flex-col items-center w-full  gap-10  md:max-w-md-content lg:max-w-lg-content xl:max-w-[932px] 2xl:max-w-max-container ">
          <PartnershipForm
            partnershipFilter={partnershipFilter}
            setPartnershipFilter={setPartnershipFilter}
          />
          <PartnershipCard search={partnershipFilter.search} />
        </div>
      </InfoLayout>
    </ClientOnly>
  );
};

export default Partnership;
