import React from "react";
import HomeEntrepreneurSlider from "./home-entrepreneur-slider";

import HomeEntrepreneurVideo from "./home-entrepreneur-video";
import { ClientOnly } from "@/utils/isClient";
import { Heading, Paragraph } from "../ui/typography";

const HomeEntrepreneur = () => {
  return (
    <section className="w-full h-full xl:h-[54rem] 2xl:h-[70rem]  flex flex-col items-center justify-center bg-white rounded-[10px] ">
      <div className="relative flex w-full h-full flex-col items-center bg-primary  rounded-md text-white pt-6 sm:pt-10 pb-32">
        <Heading type="h1" className="  xl:text-[36px] text-[22px] lg:text-[30px] sm:text-[24px] lg:text-center w-full max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 2xl:max-w-max-content">
          SMKN 1 Purwosari <br className="hidden xl:block" />  Bekerjasama  <br className="hidden lg:block xl:hidden" /> Dengan
          Beberapa Perusahaan
        </Heading>

        <Paragraph  className="text-sm xl:text-[18px] lg:text-[14px] lg:text-center w-full max-w-xs-content sm:max-w-sm-content  mt-[12px] md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 2xl:max-w-max-content xl:text-center">
          Kami telah melakukan kerja sama dengan beberapa perusahaan besar yang
          membina SMK Negeri 1 Purwosari.
        </Paragraph>

        <hr className="bg-white mt-8 xl:mt-[52px]  w-full max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 2xl:max-w-max-content" />
        <HomeEntrepreneurSlider />
      </div>
      <div className="relative xl:-top-[12%] 2xl:-top-[12%] -mt-32 xl:-mt-0 mb-10 xl:mb-0 w-full flex justify-center">
        <ClientOnly>
          <HomeEntrepreneurVideo />
        </ClientOnly>
      </div>
    </section>
  );
};

export default HomeEntrepreneur;
