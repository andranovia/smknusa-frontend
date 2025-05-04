import React from "react";
import { ClientOnly } from "@/utils/isClient";
import HomeEntrepreneurSlider from "./home-entrepreneur-slider";

import HomeEntrepreneurVideo from "./home-entrepreneur-video";
import { Heading, Paragraph } from "../ui/typography";

const HomeEntrepreneur = () => {
  return (
    <section className="w-full h-full xl:h-[64rem] 1xl:h-[68rem] 2xl:h-[74rem]  flex flex-col items-center justify-center bg-white rounded-[10px] ">
      <div className="relative flex w-full h-full flex-col items-center bg-primary  text-white pt-6 sm:pt-10 pb-32 2xl:pb-40">
        <Heading
          type="h1"
          className="  xl:text-[36px] text-[22px] lg:text-[30px] sm:text-[24px] lg:text-center w-full px-4 lg:px-0 md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-1xl-content 2xl:max-w-max-container"
        >
          SMKN 1 Purwosari <br className="hidden xl:block" /> Bekerjasama{" "}
          <br className="hidden lg:block xl:hidden" /> Dengan Beberapa
          Perusahaan
        </Heading>

        <Paragraph className="text-sm xl:text-lg lg:text-[14px] lg:text-center w-full px-4 lg:px-0  mt-[12px] md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-1xl-content 2xl:max-w-max-container xl:text-center">
          Kami telah melakukan kerja sama dengan beberapa perusahaan besar yang
          membina SMK Negeri 1 Purwosari.
        </Paragraph>

        <hr className="bg-white mt-8 xl:mt-[52px]  w-full px-4 lg:px-0 md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-1xl-content 2xl:max-w-max-container" />
        <ClientOnly>
          <HomeEntrepreneurSlider />
        </ClientOnly>
      </div>
      <div className="relative xl:-top-[12%] px-4 xl:px-8 1xl:-top-[10%] -mt-32 xl:mt-0 mb-10 xl:mb-0 w-full flex justify-center">
        <ClientOnly>
          <HomeEntrepreneurVideo />
        </ClientOnly>
      </div>
    </section>
  );
};

export default HomeEntrepreneur;
