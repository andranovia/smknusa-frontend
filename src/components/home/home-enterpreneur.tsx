import React from "react";
import HomeEnterpreneurSlider from "./home-enterpreneur-slider";

const HomeEnterpreneur = () => {
  return (
    <>
      <div className="w-full h-[62rem] bg-white rounded-[10px]">
        <div className="flex  flex-col items-center justify-center bg-primary  rounded-md text-white pt-10 pb-48">
          <h1 className="font-[700]  text-[36px] text-center">
            SMK Negeri 1 Purwosari
            <br />
            <span className="block text-center">
              Bekerjasama Dengan Beberapa Perusahaan
            </span>
          </h1>

          <p className="font-[500] text-[18px] mt-[12px]">
            Kami telah melakukan kerja sama dengan beberapa perusahaan besar
            yang membina SMK Negeri 1 Purwosari.
          </p>

          <hr className="bg-white w-[95%] mt-[58px]" />
          <HomeEnterpreneurSlider />
        </div>
      </div>
    </>
  );
};

export default HomeEnterpreneur;
