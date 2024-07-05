import Image from "next/image";
import React from "react";
import { Facility } from "./facility-card";
import { cn } from "@/utils/cn";

const FacilityCardItem = ({ facility }: { facility: Facility }) => {
  return (
    <div className="bg-white rounded-lg lg:w-[23rem] h-full shadow-md overflow-hidden relative">
      <Image
        className="w-full max-h-full object-cover"
        src={facility.cardImg}
        alt={facility.card}
        width={800}
        height={800}
      />
      <div className=" px-3 lg:p-4 flex flex-col items-start gap-4 w-full my-4 lg:my-0 ">
        <div className="grid grid-cols-2 items-center gap-2 top-0 left-0 lg:absolute lg:p-2 z-20">
          {facility.cardfacility.map((facility, index) => (
            <div
              key={index}
              className={cn(
                `bg-[${facility.CategoryColor}] px-2 py-1 rounded-[10px]`
              )}
            >
              <p className="font-[600] text-[12px] text-white ">
                {facility.categoryName}
              </p>
            </div>
          ))}
        </div>
        <div className="lg:text-md text-xs font-[500]  lg:text-[18px] mb-2 lg:w-full w-[8.5rem]">
          <h2> {facility.card}</h2>
        </div>
        <div className="lg:text-md text-xs font-[500]  lg:text-[18px] mb-2 lg:w-full w-[8.5rem] text-gray">
          <h2> {facility.cardDescription}</h2>
        </div>
      </div>
    </div>
  );
};

export default FacilityCardItem;
