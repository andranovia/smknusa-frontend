"use client";

import { Heading } from "@/components/ui/typography";
import { useMediaQuery } from "@uidotdev/usehooks";

import Image from "next/image";
import React from "react";

const InfoLayout = ({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const isMobile = useMediaQuery("only screen and (max-width: 1023.98px)");
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-base">
      <div
        style={{
          marginTop: isMobile ? "4rem" : "0rem",
        }}
        className="relative h-full w-full xl:h-[80%] "
      >
        <div className="relative 1xl:pb-6 h-full w-full flex justify-center">
          <div
            style={{
              height: isMobile ? "14rem" : "30rem",
              background: 'url("/assets/smkn1purwosari.svg")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
            className="inset-0 flex flex-col items-center justify-center text-white  max-w-full md:max-w-md-content lg:max-w-lg-content xl:max-w-full  z-20  w-full"
          >
            <div className=" flex flex-col xl:items-center w-[80%] sm:px-4 xl:px-12 container">
              <Heading
                type="h1"
                className="text-[24px] mb-2 xl:mb-6 lg:text-[32px] xl:text-[46px] xl:mt-10"
              >
                {title}
              </Heading>
              <Heading
                type="h5"
                className="text-sm  xl:text-center xl:font-[500] xl:text-[18px]"
              >
                {subtitle}
              </Heading>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center ">
        <div className=" w-full gap-10 xl:gap-0 flex flex-col  items-center   h-full xl:rounded-lg ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfoLayout;
