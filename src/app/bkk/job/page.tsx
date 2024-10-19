"use client";

import React, { useState } from "react";
import JobVacanciesCard from "@/components/bkk/job/job-card";
import JobVacanciesForm from "@/components/bkk/job/job-form";
import InfoLayout from "@/layouts/info-layout";
import { ClientOnly } from "@/utils/isClient";

const JobVacancies = () => {
  const [jobVacanciesFilter, setJobVacanciesFilter] = useState({
    search: "",
    search_requirement: "",
  });

  return (
    <ClientOnly>
      <InfoLayout
        title="Lowongan Pekerjaan"
        subtitle="Kami menyediakan lowongan pekerjaan untuk alumni SMKN 1 Purwosari"
      >
        <div className="pb-20  flex flex-col items-center w-full justify-center gap-10  md:max-w-md-content lg:max-w-lg-content xl:max-w-[1002px] 2xl:max-w-max-container ">
          <JobVacanciesForm
            jobVacanciesFilter={jobVacanciesFilter}
            setJobVacanciesFilter={setJobVacanciesFilter}
          />
          <JobVacanciesCard jobVacanciesFilter={jobVacanciesFilter} />
        </div>
      </InfoLayout>
    </ClientOnly>
  );
};

export default JobVacancies;
