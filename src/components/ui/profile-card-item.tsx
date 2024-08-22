
import Image from "next/image";
import React from "react";
import { Heading } from "./typography";
import { Extra } from "@/services/api/useQueries/useExtracurricular";
import { backendUrl } from "@/utils/backendUrl";

type ProfileCardItemProps = {
  profileCardData: Extra;
};

const ProfileCardItem = ({ profileCardData }: ProfileCardItemProps) => {
  return (
    <div className="bg-white rounded-lg sm:w-full 1xl:w-[23rem] h-full border overflow-hidden relative">
      <Image
        className="w-full min-h-[8rem] xl:min-h-[12rem]  max-h-[8rem] sm:min-h-[10rem] sm:max-h-[10rem] xl:max-h-[12rem] object-cover"
        src={backendUrl + profileCardData.extra_image}
        alt={profileCardData.extra_name}
        width={800}
        height={800}
      />
      <div className=" px-3 xl:p-4 flex flex-col items-stretch justify-between    gap-4 w-full my-4 xl:my-0 ">
        <div className="flex   items-center gap-2 top-0 left-0 absolute p-2 lg:p-0 lg:relative xl:absolute xl:p-2 z-20">

          <div className={`bg-white px-2 sm:px-4 xl:px-2 border xl:border-none py-2 rounded-md flex justify-center sm:justify-start xl:justify-center gap-2 sm:gap-4 xl:gap-2 items-center sm:rounded-[10px]`}>
            <Image src={backendUrl + profileCardData.extra_logo} alt={profileCardData.extra_name} width={40} height={40} className="w-6 h-6" />
            <Heading type="h5" className="font-semibold text-center !text-sm sm:!text-[16px] line-clamp-1  text-blue-base">
              {profileCardData.extra_name}
            </Heading>
          </div>
        </div>

        <Heading type="h5" className=" !text-xs font-[500]   xl:!text-lg mb-2 sm:w-full  line-clamp-3 leading-6 text-gray"> {profileCardData.extra_text}</Heading>
      </div>
    </div>
  );
};

export default ProfileCardItem;
