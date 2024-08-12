"use client";

import { Heading } from "@/components/ui/typography";
import { useMediaQuery } from "@uidotdev/usehooks";
import React from "react";

const InfoLayout = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const isMedium = useMediaQuery("only screen and (max-width: 1023.98px)");
  const isSmall = useMediaQuery("only screen and (max-width:  576px)");
  return (
    <div className="flex xl:min-h-screen flex-col items-center ">
      <div
        style={{
          marginTop: isMedium ? "4rem" : "0rem",
        }}
        className="relative h-full w-full xl:h-[80%] p-2 xl:p-3 overflow-hidden "
      >
       
        <div   style={{
              height: isMedium ? isSmall ? "10rem" : "14rem" : "30rem",
              background: 'url("/assets/smkn1purwosari.svg")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }} className="relative 1xl:pb-6 h-full w-full flex justify-center rounded-md">
                <div className="absolute top-0 bg-gradient-to-b w-full z-10 from-black opacity-40 to-transparent min-w-full p-10"></div>
          <div
          
            className="inset-0 flex flex-col items-center justify-center text-white px-8  max-w-full md:max-w-md-content lg:max-w-lg-content xl:max-w-full  z-20  w-full"
          >
            <div className=" flex flex-col items-center container xl:pt-16">
              <Heading
                type="h1"
                className="text-[24px] mb-2 xl:mb-6 md:text-[32px] xl:text-[46px] xl:mt-10"
              >
                {title}
              </Heading>
              <Heading
                type="h5"
                className="text-sm text-center xl:font-[500] md:text-[18px]"
              >
                {subtitle}
              </Heading>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center px-2 xl:px-2.5  bg-gray-base">
        <div className=" w-full gap-10 xl:gap-0 flex flex-col  items-center bg-white   h-full rounded-lg ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfoLayout;
