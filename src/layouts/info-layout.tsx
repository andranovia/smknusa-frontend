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
  const isMobile = useMediaQuery("only screen and (max-width: 1024px)");
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-base">
      <div
        style={{
          marginTop: isMobile ? "4rem" : "0rem",
        }}
        className="relative h-full w-full xl:h-[80%] md:max-w-md-content lg:max-w-lg-content xl:max-w-full"
      >
        <div className="relative 1xl:pb-6 xl:h-full h-[12rem]  ">
          <Image
            src={"/assets/smkn1purwosari.svg"}
            alt="smknusa"
            width={1500}
            height={1500}
            className="object-cover w-full h-full xl:px-0 px-2 rounded-[10px] "
          />
          <div className=" inset-0 flex flex-col px-10 xl:items-center justify-center text-white  z-20 absolute w-full">
            <Heading
              type="h1"
              className="xl:text-4xl text-2xl mb-6 xl:text-[46px]"
            >
              {title}
            </Heading>
            <Heading
              type="h5"
              className="text-xs  xl:text-center xl:font-[500] xl:text-[18px]"
            >
              {subtitle}
            </Heading>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center   ">
        <div className="container gap-10 xl:gap-0 flex flex-col  items-center  bg-white h-full xl:rounded-lg ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfoLayout;
