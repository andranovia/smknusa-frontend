import Image from "next/image";
import React from "react";
import { Facility } from "../profile/facility/facility-card";
import { Heading } from "./typography";
import { Major } from "../academic/major/major-card";

const FeatureCardItem = ({
  featureCardData,
}: {
  featureCardData: Facility | Major;
}) => {

  const getCategoryColor = (icon: string) => {
    switch (icon) {
        case 'Informatika':
            return 'bg-orange-400';
        case 'Agribisnis':
            return 'bg-green-500';
        case 'Permesinan':
            return 'bg-blue-500';
        case 'Elektronika':
            return 'bg-red-500';
        default:
            return 'bg-gray-500';
    }
};

  return (
    <div className="bg-white rounded-lg 1xl:w-[23rem] h-full shadow-md overflow-hidden relative w-full">
      <Image
        className="w-full  min-h-[8rem] xl:min-h-[10rem]  max-h-[6rem] sm:max-h-[8rem] xl:max-h-[10rem]  object-cover"
        src={'thumbnail' in featureCardData ?  featureCardData.thumbnail : featureCardData.img}
        alt={featureCardData.title}
        width={800}
        height={800}
      />
      <div className=" px-3 xl:p-4 flex flex-col items-start gap-3 w-full my-3 xl:my-0 ">
        <div className="flex items-center gap-2 top-0 left-0 absolute p-2 lg:p-0 lg:relative xl:absolute xl:p-2 z-20">
          <div className={`${'icon' in featureCardData ? getCategoryColor(featureCardData.icon.icon): 'bg-[#007AFF]'} px-2 py-1 rounded-[6px] 1xl:rounded-[10px]`}>
            <Heading
              type="h5"
              className="font-[600] !text-[12px] text-white line-clamp-1 xl:line-clamp-none"
            >
              {'category' in featureCardData? featureCardData.category.nama : featureCardData.icon.icon}
            </Heading>
          </div>
        </div>

        <Heading
          type="h2"
          className="xl:text-md text-xs font-[500]   xl:text-lg xl:w-full "
        >
          {featureCardData.title}
        </Heading>

        <Heading
          type="h4"
          className="xl:text-md text-xs font-[500] leading-6 xl:text-lg mb-2 xl:w-full  text-gray"
        >
          {" "}
          {featureCardData.description}
        </Heading>
      </div>
    </div>
  );
};

export default FeatureCardItem;
