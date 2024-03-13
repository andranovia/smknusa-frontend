import React from "react";

const HomeNews = () => {
  return (
    <>
      <div className="w-full h-[62rem] bg-white rounded-[10px]">
        <div className="flex flex-col items-center justify-center bg-primary  rounded-md text-white pt-10 pb-48">
          <h1 className="font-[700] text-[36px]">
            Papan Pengumuman Informasi <br />
            <span className="block text-center">SMK Negeri 1 Purwosari</span>
          </h1>

          <p className="font-[500] text-[18px] mt-[12px]">
            Papan Pengumuman ini berisi segala informasi mengenai pembaruan
            agenda, berita, artikel atau yang lainnya
          </p>

          <hr className="bg-white w-[95%] mt-[58px]" />

          <div className="flex justify-between items-start w-full left-8 mt-12 px-10">
            <div className=" flex justify-between items-center px-4 gap-8 ">
              <h1 className="font-[600] text-[16px] text-[#9DA5B1]">
                Pengumuman
              </h1>
              <h1 className="font-[600] text-[16px] text-[#9DA5B1]">Agenda</h1>
              <h1
                className="font-[600] text-[16px] p-1 rounded-md relative transition-all w-min-content
                        before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-[#F5C451] before:transition-all before:duration-500
                        before:w-full hover:before:left-0 hover:before:bg-primary cursor-pointer"
              >
                Berita
              </h1>
              <h1 className="font-[600] text-[16px] text-[#9DA5B1]">Artikel</h1>
            </div>

            <div className="flex justify-center items-center ">
              <div className="btn bg-[#F5C451] hover:bg-[#F5C451] text-[#081B34] font-[500] py-2.5 px-5 rounded">
                <button>Selengkapnya </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative  px-8  -top-36  ">
          <div className="flex justify-start items-end relative bg-[#F2F3F4] rounded-[10px] ">
            p
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNews;
