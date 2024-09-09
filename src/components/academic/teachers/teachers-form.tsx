import React from "react";
import { Heading } from "@/components/ui/typography";

const TeachersForm = () => {
  return (
    <div className="relative z-10 w-full  -mt-20  1xl:-mt-32">
      <div className="flex justify-center items-center p-2  xl:bg-transparent w-full">
        <div className=" bg-white w-full px-6 xl:px-12 py-4 xl:py-10 rounded-lg border-white xl:shadow-lg">
          <Heading type="h5" className="block mb-5 text-blue-base mt-1">
            Form Pencarian PTK
          </Heading>
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-12 gap-4 mb-3">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Masukkan Nama atau NIM Guru"
              className="xl:w-[107%] h-10 border border-gray-300 rounded-lg p-2"
            />

            <input
              type="text"
              id="to-date"
              name="to-date"
              placeholder="Masukkan NUPTK"
              className="xl:w-[107%] h-10 border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="xl:flex w-full justify-center py-3 gap-3 relative xl:-right-2">
            <button className="bg-yellow-light w-full text-blue-base py-2 px-4 rounded-lg text-[16px] font-medium xl:w-1/3">
              Cari
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersForm;
