
import { Heading } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";

const InfoLayout = ({title, subtitle, children, className}: {title: string, subtitle: string, children: React.ReactNode, className?: string}) => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-base pt-16 xl:pt-0  ">
      <div className="relative h-full xl:w-full xl:h-[80%]">
        <div className="relative xl:pb-6 xl:h-full h-[12rem]">
          <Image
            src={"/assets/smkn1purwosari.svg"}
            alt="smknusa"
            width={1500}
            height={1500}
            className="object-cover w-full h-full xl:rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col px-10 xl:items-center justify-center text-white xl:mt-[11em]">
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
      <div className="flex xl:w-full flex-col items-center ">
        <div className="container gap-10 xl:gap-0 flex flex-col  items-center  bg-white max-w-full h-full xl:rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfoLayout;
