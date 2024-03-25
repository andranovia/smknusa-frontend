import React from "react";
import HomeEnterpreneurSlider from "./home-enterpreneur-slider";

const HomeEnterpreneur = () => {
  return (
    <>
      <div className="w-full h-[62rem] bg-white rounded-[10px]">
        <div className="flex  flex-col items-center justify-center gap-8 bg-primary  rounded-md text-white pt-10 pb-48">
          <h1 className="font-[700]  lg:text-[36px] lg:text-center w-4/5">
            SMK Negeri 1 Purwosari
            <br />
            Bekerjasama Dengan Beberapa Perusahaan
          </h1>

          <p className="font-[500] text-[18px] w-4/5">
            Kami telah melakukan kerja sama dengan beberapa perusahaan besar
            yang membina SMK Negeri 1 Purwosari.
          </p>

          <hr className="bg-white lg:w-[95%] lg:mt-[58px] w-4/5" />
          <HomeEnterpreneurSlider />
        </div>
      </div>
    </>
  );
};

export default HomeEnterpreneur;
