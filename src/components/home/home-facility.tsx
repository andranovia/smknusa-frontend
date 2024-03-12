import React from "react";

const HomeFacility = () => {
  return (
    <>
      <div className="w-full h-[62rem] bg-white rounded-[10px]">
        <div className="flex flex-col items-center justify-center bg-primary  rounded-md text-white pt-10 pb-48">
          <h1 className="font-[700] text-[36px]">
            Kenapa Harus SMK Negeri 1 Purwosari
          </h1>

          <p className="font-[500] text-[18px] mt-[12px]">
            Di SMK Negeri 1 Purwosari, kami akan memberikan pengalaman terbaik
            dalam kegiatan belajar mengajar <br />
            <span className="block text-center">
              yang menyongsong kurikulum merdeka belajar. Dengan dilengkapi
              fasilitas yang berqualitas,
            </span>
            <span className="block text-center">
              mampu menyongsong kebutuhan siswa untuk belajar
            </span>
          </p>

          <hr className="bg-white w-[95%] mt-[58px]" />

          <div className="flex justify-start items-start w-full left-8 ">
            <div className=" flex justify-between items-center px-4 gap-8 mt-12 mx-10">
              <h1
                className="font-[600] text-[16px] p-1 rounded-md relative transition-all w-min-content
                        before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-[#F5C451] before:transition-all before:duration-500
                        before:w-full hover:before:left-0 hover:before:bg-primary cursor-pointer"
              >
                Informatika dan Elektronika
              </h1>
              <h1 className="font-[600] text-[16px] text-[#9DA5B1]">
                Agribisnis dan Agroteknologi
              </h1>
              <h1 className="font-[600] text-[16px] text-[#9DA5B1]">
                Teknologi dan Rekayasa
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFacility;
