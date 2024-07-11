
import { Heading } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";

const InfoLayout = ({title, subtitle, children, className}: {title: string, subtitle: string, children: React.ReactNode, className?: string}) => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-base pt-16 lg:pt-0  ">
      <div className="relative h-full lg:w-full lg:h-[80%]">
        <div className="relative lg:pb-6 lg:h-full h-[12rem]">
          <Image
            src={"/assets/smkn1purwosari.svg"}
            alt="smknusa"
            width={1500}
            height={1500}
            className="object-cover w-full h-full lg:rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col px-10 lg:items-center justify-center text-white lg:mt-[11em]">
            <Heading
              type="h1"
              className="lg:text-4xl text-2xl mb-6 lg:text-[46px]"
            >
             {title}
            </Heading>
            <Heading
              type="h5"
              className="text-xs  lg:text-center lg:font-[500] lg:text-[18px]"
            >
          {subtitle}
            </Heading>
          </div>
        </div>
      </div>
      <div className="flex lg:w-full flex-col items-center ">
        <div className="container gap-10 lg:gap-0 flex flex-col  items-center  bg-white max-w-full h-full lg:rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfoLayout;
