import React, { Dispatch, SetStateAction } from "react";
import { Heading } from "@/components/ui/typography";

const TeachersForm = ({
  teacherFilter,
  setTeacherFilter,
}: {
  teacherFilter: {
    search_nama: string;
    search_nuptk: string;
  };
  setTeacherFilter: Dispatch<
    SetStateAction<{ search_nama: string; search_nuptk: string }>
  >;
}) => {
  return (
    <div className="relative z-10 w-full  -mt-20  1xl:-mt-32">
      <div className="flex justify-center items-center p-2  xl:bg-transparent w-full">
        <div className=" bg-white w-full px-6 xl:px-12 py-4 xl:py-12 rounded-lg border-white xl:shadow-md">
          <Heading type="h5" className="block mb-5 text-blue-base mt-1">
            Form Pencarian PTK
          </Heading>
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-12 gap-4 mb-3">
            <input
              type="text"
              id="teacher-name"
              name="teacher-name"
              value={teacherFilter.search_nama}
              onChange={(e) =>
                setTeacherFilter({
                  ...teacherFilter,
                  search_nama: e.target.value,
                })
              }
              placeholder="Masukkan Nama atau NIM Guru"
              className="xl:w-[107%] h-10 border border-gray-300 rounded-lg p-2"
            />

            <input
              type="text"
              id="teacher-nuptk"
              name="teacher-nuptk"
              value={teacherFilter.search_nuptk}
              onChange={(e) =>
                setTeacherFilter({
                  ...teacherFilter,
                  search_nuptk: e.target.value,
                })
              }
              placeholder="Masukkan NUPTK"
              className="xl:w-[107%] h-10 border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col md:flex-row w-full justify-center py-3 gap-3 relative xl:-right-2">
            <button
              onClick={() =>
                setTeacherFilter({ search_nuptk: "", search_nama: "" })
              }
              className="bg-gray-200 w-full text-blue-base py-2 px-4 rounded-lg text-[16px] font-medium 1xl:w-28 h-10"
            >
              Reset
            </button>
            <button className="bg-yellow-light w-full text-blue-base py-2 px-4 rounded-lg text-[16px] font-medium 1xl:w-28 h-10">
              Cari
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersForm;
