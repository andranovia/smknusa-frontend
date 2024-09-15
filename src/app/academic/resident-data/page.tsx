"use client";

import React, { useState } from "react";
import TeachersForm from "@/components/academic/teachers/teachers-form";
import TeachersTable from "@/components/academic/teachers/teachers-table";
import StudentsForm from "@/components/academic/students/students-form";
import StudentsTable from "@/components/academic/students/students-table";
import { useResidents } from "@/services/api/useQueries/useResidents";
import { ClientOnly } from "@/utils/isClient";
import InfoLayout from "@/layouts/info-layout";

export const metadata = {
  title: "School Residents",
  description: "SMKN 1 Purwosari Residents",
};

const ResidentData = () => {
  const [currentTable, setcurrentTable] = useState<string>("students");
  const { teachers, students } = useResidents();

  const handleChangeTable = () => {
    if (currentTable === "students") {
      setcurrentTable("teachers");
    } else {
      setcurrentTable("students");
    }
  };

  return (
    <ClientOnly>
      <InfoLayout
        title="Data Warga Sekolah"
        subtitle="Informasi mengenai data seluruh warga sekolah, baik siswa, guru dan staff."
      >
        <div className="pb-20  flex flex-col items-center w-full justify-center gap-10  md:max-w-md-content lg:max-w-lg-content xl:max-w-[1002px] 2xl:max-w-[1216px] ">
          {currentTable === "teachers" ? (
            <>
              <TeachersForm />
              <TeachersTable
                teachersData={teachers}
                handleChangeTable={handleChangeTable}
              />
            </>
          ) : (
            <>
              <StudentsForm />
              <StudentsTable
                studentsData={students}
                handleChangeTable={handleChangeTable}
              />
            </>
          )}
        </div>
      </InfoLayout>
    </ClientOnly>
  );
};

export default ResidentData;
