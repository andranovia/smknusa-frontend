
import Image from "next/image";
import React from "react";
import { Heading } from "./typography";
import { Extracurricular } from "../academic/extracurricular/extracurricular-card";

type ProfileCardItemProps = {
  profileCardData: Extracurricular;
};

const ProfileCardItem = ({ profileCardData }: ProfileCardItemProps) => {
  return (
    <div className="bg-white rounded-lg sm:w-full 1xl:w-[23rem] h-full border overflow-hidden relative">
      <Image
        className="w-full min-h-[6rem] sm:min-h-[8rem] xl:min-h-[12rem]  max-h-[6rem] sm:max-h-[8rem] xl:max-h-[12rem] object-cover"
        src={profileCardData.img}
        alt={profileCardData.icon.iconName}
        width={800}
        height={800}
      />
      <div className=" px-3 xl:p-4 flex flex-col items-stretch justify-between    gap-4 w-full my-4 xl:my-0 ">
        <div className="grid grid-cols-1 xl:grid-cols-2   items-center gap-2 top-0 left-0 xl:absolute xl:p-2 z-20">

          <div className={`bg-white px-2 sm:px-4 xl:px-2 border xl:border-none py-2 rounded-md flex justify-center sm:justify-start xl:justify-center gap-2 sm:gap-4 xl:gap-2 items-center sm:rounded-[10px]`}>
            <Image src={profileCardData.icon.iconImg} alt={profileCardData.icon.iconName} width={40} height={40} className="w-6 h-6"/>
            <Heading type="h5" className="font-semibold text-center text-sm sm:text-[16px] line-clamp-1  text-blue-base">
              {profileCardData.icon.iconName}
            </Heading>
          </div>
        </div>
        
          <Heading type="h5" className="xl:text-md text-xs font-[500]   xl:text-[18px] mb-2 sm:w-full  line-clamp-3 leading-6 text-gray"> {profileCardData.description}</Heading>
      </div>
    </div>
  );
};

export default ProfileCardItem;
