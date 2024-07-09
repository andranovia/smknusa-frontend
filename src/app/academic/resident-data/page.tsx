"use client";


import TeachersForm from "@/components/academic/teachers/teachers-form";
import TeachersTable from "@/components/academic/teachers/teachers-table";
import StudentsForm from "@/components/academic/students/students-form";
import StudentsTable from "@/components/academic/students/students-table";
import { useResidents } from "@/services/api/useQueries/useResidents";
import React, { useState } from "react";
import { Heading } from "@/components/ui/typography";



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
    <div className="w-full pt-20 lg:pt-24 px-3 rounded-[10px] text-blue-base bg-white">
      <div className="relative   flex flex-col items-center  pt-10 ">
        <div className="flex flex-col lg:items-center gap-4 w-[80%]  lg:w-2/3 lg:text-center">
          <Heading type="h1" className="font-[700] lg:text-[46px] text-[24px] ">
            Data Warga Sekolah
          </Heading>
          <Heading type="h5" className=" text-gray">
            Informasi mengenai data seluruh warga sekolah, baik siswa, guru dan
            staff.
          </Heading>
          <hr className="w-full border mt-8" />
        </div>
      </div>
      <div className="pb-20 pt-10 flex flex-col items-center justify-center gap-10">
        {currentTable === "teachers" ? (
          <>
            <TeachersForm />
            <TeachersTable teachersData={teachers} handleChangeTable={handleChangeTable} />
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
    </div>
  );
};

export default ResidentData;
