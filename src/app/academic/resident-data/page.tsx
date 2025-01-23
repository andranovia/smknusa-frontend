"use client";

import React, { useState } from "react";
import TeachersForm from "@/components/academic/resident-data/teachers/teachers-form";
import TeachersTable from "@/components/academic/resident-data/teachers/teachers-table";
import StudentsForm from "@/components/academic/resident-data/students/students-form";
import StudentsTable from "@/components/academic/resident-data/students/students-table";
import { useResidents } from "@/services/api/useQueries/useResidents";
import { ClientOnly } from "@/utils/isClient";
import InfoLayout from "@/layouts/info-layout";

const ResidentData = () => {
  const [currentTable, setCurrentTable] = useState<string>("students");
  const [teacherFilter, setTeacherFilter] = useState({
    search_nama: "",
    search_nuptk: "",
  });
  const [studentsFilter, setStudentsFilter] = useState({
    search_nama: "",
    search_kelas: "",
  });

  const { teachers, students } = useResidents({
    filterTeachers: teacherFilter,
    filterStudents: studentsFilter,
  });

  const handleChangeTable = (current: string) => {
    setCurrentTable(current);
  };

  return (
    <ClientOnly>
      <InfoLayout
        title="Data Warga Sekolah"
        subtitle="Informasi mengenai data seluruh warga sekolah, baik siswa, guru dan staff."
      >
        <div className="pb-20  flex flex-col items-center w-full justify-center gap-10  md:max-w-md-content lg:max-w-lg-content xl:max-w-[932px] 2xl:max-w-[1216px] ">
          {currentTable === "teachers" ? (
            <>
              <TeachersForm
                setTeacherFilter={setTeacherFilter}
                teacherFilter={teacherFilter}
              />
              <div className="px-4 md:px-0 w-full">
              <TeachersTable
                teachersData={teachers}
                handleChangeTable={handleChangeTable}
              />
              </div>
            </>
          ) : (
            <>
              <StudentsForm
                setStudentsFilter={setStudentsFilter}
                studentsFilter={studentsFilter}
              />
              <div className="px-4 md:px-0 w-full">
              <StudentsTable
                studentsData={students}
                handleChangeTable={handleChangeTable}
              />
              </div>
            </>
          )}
        </div>
      </InfoLayout>
    </ClientOnly>
  );
};

export default ResidentData;
