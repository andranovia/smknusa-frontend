'use client'

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { useLogos } from "@/services/api/useQueries/useLogos";
import { backendUrl } from "@/utils/backendUrl";

// const sliderEntrepreneur = [
//   {
//     entrepreneurImg: "/assets/home/company/yamaha.svg",
//   },
//   {
//     entrepreneurImg: "/assets/home/company/mayora.svg",
//   },
//   {
//     entrepreneurImg: "/assets/home/company/otsuka.svg",
//   },
//   {
//     entrepreneurImg: "/assets/home/company/bakery.svg",
//   },
//   {
//     entrepreneurImg: "/assets/home/company/satria.svg",
//   },
//   {
//     entrepreneurImg: "/assets/home/company/daihatsu.svg",
//   },
//   {
//     entrepreneurImg: "/assets/home/company/kyc.svg",
//   },
//   {
//     entrepreneurImg: "/assets/home/company/ktg.svg",
//   },
// ];

const HomeEntrepreneurSlider = () => {
  const { logos } = useLogos();

  return (
    <div className="text-blue-base w-full flex max-w-max-content  justify-center  relative items-center  rounded-md  py-6 ">
      <div className="absolute left-0 z-10 mix-blend-darken bg-gradient-to-r from-[#081B34] to-transparent py-20 px-4"></div>

      <Marquee autoFill={true} speed={60}>
        {logos?.map((data, index) => (
          <React.Fragment key={index}>
            <Image
              src={backendUrl + data?.logo_mitra}
              alt={data.nama_mitra}
              width={data.width}
              height={data.height}
              style={{height: `${data.height}px`}}
              className="xl:w-32 w-20 p-2 xl:p-3"
            />
          </React.Fragment>
        ))}
      </Marquee>
      <div className="absolute right-0 z-10 mix-blend-darken bg-gradient-to-l from-[#081B34] to-transparent py-20 px-4"></div>
    </div>
  );
};

export default HomeEntrepreneurSlider;
