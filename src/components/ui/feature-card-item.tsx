import Image from "next/image";
import React from "react";
import { Facility } from "../profile/facility/facility-card";
import { Heading } from "./typography";

const FeatureCardItem = ({
  featureCardData,
}: {
  featureCardData: Facility;
}) => {
  return (
    <div className="bg-white rounded-lg 1xl:w-[23rem] h-full shadow-md overflow-hidden relative">
      <Image
        className="w-full  min-h-[6rem] sm:min-h-[8rem] xl:min-h-[10rem]  max-h-[6rem] sm:max-h-[8rem] xl:max-h-[10rem]  object-cover"
        src={featureCardData.thumbnail}
        alt={featureCardData.title}
        width={800}
        height={800}
      />
      <div className=" px-3 xl:p-4 flex flex-col items-start gap-3 w-full my-4 xl:my-0 ">
        <div className="flex items-center gap-2 top-0 left-0 xl:absolute xl:p-2 z-20">
          <div className={`bg-[#007AFF] px-2 py-1 rounded-[6px] sm:rounded-[10px]`}>
            <Heading
              type="h5"
              className="font-[600] text-[12px] text-white line-clamp-1 xl:line-clamp-none"
            >
              {featureCardData.category.nama}
            </Heading>
          </div>
        </div>

        <Heading
          type="h2"
          className="xl:text-md text-xs font-[500]   xl:text-[18px] xl:w-full "
        >
          {featureCardData.title}
        </Heading>

        <Heading
          type="h4"
          className="xl:text-md text-xs font-[500] leading-6 xl:text-[18px] mb-2 xl:w-full  text-gray"
        >
          {" "}
          {featureCardData.description}
        </Heading>
      </div>
    </div>
  );
};

export default FeatureCardItem;
