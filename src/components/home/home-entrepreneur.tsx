import React from "react";
import HomeEntrepreneurSlider from "./home-entrepreneur-slider";

import HomeEntrepreneurVideo from "./home-entrepreneur-video";
import { ClientOnly } from "@/utils/isClient";
import { Heading, Paragraph } from "../ui/typography";

const HomeEntrepreneur = () => {
  return (
    <section className=" lg:w-full h-full lg:h-[78rem]  flex flex-col items-center justify-center bg-white rounded-[10px] ">
      <div className="relative flex w-full h-3/4 flex-col items-center justify-center gap-8 bg-primary  rounded-md text-white pt-14 pb-32">
        <Heading type="h1" className="  lg:text-[36px] text-[24px] lg:text-center w-4/5">
          SMKN 1 Purwosari <br className="hidden lg:block" /> Bekerjasama Dengan
          Beberapa Perusahaan
        </Heading>

        <Paragraph  className="text-[18px] w-4/5 lg:text-center">
          Kami telah melakukan kerja sama dengan beberapa perusahaan besar yang
          membina SMK Negeri 1 Purwosari.
        </Paragraph>

        <hr className="bg-white lg:w-[95%] lg:mt-[58px] w-4/5" />
        <HomeEntrepreneurSlider />
      </div>
      <div className="relative lg:-top-[10%] -mt-32 lg:-mt-0 mb-10 lg:mb-0">
        <ClientOnly>
          <HomeEntrepreneurVideo />
        </ClientOnly>
      </div>
    </section>
  );
};

export default HomeEntrepreneur;
