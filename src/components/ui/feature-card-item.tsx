import Image from "next/image";
import React from "react";
import { Facility } from "../profile/facility/facility-card";

const FeatureCardItem = ({
  featureCardData,
}: {
  featureCardData: Facility;
}) => {
  return (
    <div className="bg-white rounded-lg lg:w-[23rem] h-full shadow-md overflow-hidden relative">
      <Image
        className="w-full max-h-full object-cover"
        src={featureCardData.thumbnail}
        alt={featureCardData.title}
        width={800}
        height={800}
      />
      <div className=" px-3 lg:p-4 flex flex-col items-start gap-4 w-full my-4 lg:my-0 ">
        <div className="grid grid-cols-2 items-center gap-2 top-0 left-0 lg:absolute lg:p-2 z-20">
          <div
            className={`bg-[#007AFF] px-2 py-1 rounded-[10px]`}
          >
            <p className="font-[600] text-[12px] text-white ">
              {featureCardData.category.nama}
            </p>
          </div>
        </div>
        <div className="lg:text-md text-xs font-[500]  lg:text-[18px] mb-2 lg:w-full w-[8.5rem]">
          <h2> {featureCardData.title}</h2>
        </div>
        <div className="lg:text-md text-xs font-[500]  lg:text-[18px] mb-2 lg:w-full w-[8.5rem] text-gray">
          <h2> {featureCardData.description}</h2>
        </div>
      </div>
    </div>
  );
};

export default FeatureCardItem;
