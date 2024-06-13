import React from "react";

const PtkForm = () => {
  return (
    <div className="relative z-10 w-full">
      <div className="flex justify-center items-center p-2 bg-gray-base lg:bg-transparent">
        <div className=" bg-white w-full px-6 lg:px-12 py-4 lg:py-10 lg:w-[84%] rounded-lg border-white lg:shadow-lg">
          <h2 className="block font-medium lg:text-[18px] mb-5 text-blue-base mt-1">
            Form Pencarian PTK
          </h2>
          <div className="grid grid-cols-2 lg:gap-12 gap-4 mb-3">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Masukkan Nama atau NIM Guru"
              className="lg:w-[107%] h-10 border border-gray-300 rounded-lg p-2"
            />

            <input
              type="text"
              id="to-date"
              name="to-date"
              placeholder="Masukkan NUPTK"
              className="lg:w-[107%] h-10 border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="lg:flex w-full justify-center py-3 gap-3 relative lg:-right-2">
            <button className="bg-yellow-light w-full text-blue-base py-2 px-4 rounded-lg text-[16px] font-medium lg:w-1/3">
              Cari
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PtkForm;
