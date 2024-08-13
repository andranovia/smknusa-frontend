"use client";


import TeachersForm from "@/components/academic/teachers/teachers-form";
import TeachersTable from "@/components/academic/teachers/teachers-table";
import StudentsForm from "@/components/academic/students/students-form";
import StudentsTable from "@/components/academic/students/students-table";
import { useResidents } from "@/services/api/useQueries/useResidents";
import React, { useState } from "react";
import { Heading } from "@/components/ui/typography";
import { ClientOnly } from "@/utils/isClient";



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

    <div className="px-2 xl:px-2.5">
    <div className="w-full pt-20 xl:pt-24 px-3 flex flex-col justify-center items-center rounded-[10px] text-blue-base bg-white">
      <div className="relative   flex flex-col items-center  pt-10 w-full  md:max-w-md-content lg:max-w-lg-content xl:max-w-[1002px] 2xl:max-w-[1216px]  ">
        <div className="flex flex-col xl:items-center gap-4 w-full text-center">
          <Heading type="h1" className="font-[700] xl:text-[46px] text-[24px] ">
            Data Warga Sekolah
          </Heading>
          <Heading type="h5" className=" text-gray">
            Informasi mengenai data seluruh warga sekolah, baik siswa, guru dan
            staff.
          </Heading>
          <hr className="w-full border mt-8" />
        </div>
      </div>
      <div className="pb-20 pt-10 flex flex-col items-center w-full justify-center gap-10  md:max-w-md-content lg:max-w-lg-content xl:max-w-[1002px] 2xl:max-w-[1216px] ">
        {currentTable === "teachers" ? (
          <ClientOnly>
            <TeachersForm />
            <TeachersTable teachersData={teachers} handleChangeTable={handleChangeTable} />
          </ClientOnly>
        ) : (
          <ClientOnly>
            <StudentsForm />
            <StudentsTable
              studentsData={students}
              handleChangeTable={handleChangeTable}
            />
          </ClientOnly>
        )}
      </div>
    </div>
    </div>
  );
};

export default ResidentData;
