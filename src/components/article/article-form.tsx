import React from "react";

const ArticleForm = () => {
  return (
    <>
      <div className="relative z-10 xl:-top-24 flex justify-center bg-transparent">
        <div className="flex justify-center items-center p-2 xl:px-0 bg-transparent">
          <div className=" bg-white w-full px-6 xl:px-12 py-4 1xl:py-10  rounded-lg     border-white 1xl:shadow-lg">
            <div className="grid grid-cols-2 xl:grid-cols-4 1xl:gap-12 gap-4 mb-3">
              <div className="col-span-1 flex flex-col">
                <label
                  htmlFor="title"
                  className="block font-medium 1xl:text-[18px] mb-5 text-blue-base mt-1"
                >
                  Judul Artikel
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="1xl:w-[107%] h-10 border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="col-span-1 flex flex-col">
                <label
                  htmlFor="category"
                  className="block font-medium 1xl:text-[18px] mb-5 text-blue-base mt-1"
                >
                  Kategori Artikel
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  className="1xl:w-[107%] h-10 border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="col-span-1 flex flex-col">
                <label
                  htmlFor="from"
                  className="block font-medium 1xl:text-[18px] mb-5 text-blue-base mt-1"
                >
                  Dari Tanggal
                </label>
                <input
                  type="text"
                  id="from"
                  name="from"
                  className="1xl:w-[107%] h-10 border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="col-span-1 flex flex-col">
                <label
                  htmlFor="to-date"
                  className="block font-medium 1xl:text-[18px] mb-5 text-blue-base mt-1"
                >
                  Sampai Tanggal
                </label>
                <input
                  type="text"
                  id="to-date"
                  name="to-date"
                  className="1xl:w-[107%] h-10 border border-gray-300 rounded-lg p-2"
                />
              </div>
            </div>
            <div className="1xl:flex grid grid-cols-2 w-full justify-end py-3 gap-3 relative 1xl:-right-2">
              <button className="bg-gray-base w-full text-gray py-2 px-4 rounded-[4px] text-[16px] font-medium 1xl:w-28  h-10">
                Reset
              </button>
              <button className="bg-yellow-light w-full text-blue-base py-2 px-4 rounded-lg text-[16px] font-medium 1xl:w-28 h-10">
                Cari
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleForm;
