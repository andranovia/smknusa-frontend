import PtkForm from "@/components/ptk/ptk-form";
import PtkTable from "@/components/ptk/ptk-table";
import React from "react";

const PTK = () => {
  return (
    <div className="w-full lg:pt-24 px-3 rounded-[10px] text-blue-base bg-white">
      <div className="relative   flex flex-col items-center  pt-10 ">
        <div className="flex flex-col lg:items-center gap-4 w-[80%]  lg:w-2/3 lg:text-center">
          <h1 className="font-[700] lg:text-[46px] text-[24px] ">
            Data Warga Sekolah
          </h1>
          <p className="font-[500] text-[18px] text-gray">
            Informasi mengenai data seluruh warga sekolah, baik siswa, guru dan
            staff.
          </p>
          <hr className="w-full border mt-8" />
        </div>
      </div>
      <div className="pb-20 pt-10 flex flex-col items-center justify-center gap-10">
        <PtkForm /> 
        <PtkTable />
      </div>
    </div>
  );
};

export default PTK;
