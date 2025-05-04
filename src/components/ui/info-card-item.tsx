import Image from "next/image";
import React from "react";
import { Article } from "@/services/api/useQueries/useArticles";
import { Announcement } from "@/services/api/useQueries/useAnnouncements";
import { Event } from "@/services/api/useQueries/useEvents";
import { News } from "@/services/api/useQueries/useNews";
import { backendUrl } from "@/utils/backendUrl";
import { cn } from "@/utils/cn";
import { Heading } from "./typography";

type InfoCardItemProps = {
  infoCardData: Article | News | Event | Announcement;
  normalDate: string;
};

const InfoCardItem = ({ infoCardData, normalDate }: InfoCardItemProps) => {
  return (
    <div className="bg-white rounded-lg w-full 1xl:w-[23rem] min-h-[241px] xl:min-h-[276px] h-full border hover:shadow-md overflow-hidden relative">
      <Image
        className="w-full h-full  max-h-[8rem] xs:max-h-[9rem] sm:max-h-[8rem]  xl:max-h-[9rem] object-cover"
        src={backendUrl + infoCardData.thumbnail}
        alt={infoCardData.nama}
        width={800}
        height={800}
      />
<div className="px-3 md:px-4 xl:p-4 flex flex-col items-stretch lg:h-[11rem] xl:h-[8rem]   gap-4 w-full my-4 xl:my-0 ">
        <div className="flex items-center gap-1 sm:gap-2 absolute top-2 lg:top-0 left-0 px-1.5 lg:px-0 lg:relative xl:absolute xl:p-2 z-10">
          {infoCardData.level === "0" || infoCardData.level === 0 ? (
            <div
              className={`bg-[#FFE7AF] px-2 py-1 rounded-[10px] max-w-[89.25px]`}
            >
              <p className="font-[500] text-[8px] md:text-[10px] text-center text-gray">
                Penting
              </p>
            </div>
          ) : null}

          <div
            style={{ backgroundColor: infoCardData.category.color }}
            className={cn(
              ` px-2 py-1 rounded-[10px] max-w-[74px] sm:max-w-[89.25px] `
            )}
          >
            <Heading
              type="h5"
              className="!font-[500] text-center text-[8px] md:!text-[10px] line-clamp-1   text-ellipsis  text-gray"
            >
              {infoCardData.category.nama}
            </Heading>
          </div>
        </div>

        <Heading
          type="h5"
          className="text-sm md:text-[16px]  !font-[550] xl:min-h-fit min-h-[40px]  xl:text-lg mb-2 sm:w-full  line-clamp-2 xl:!leading-6"
        >
          {infoCardData.nama}
        </Heading>

        <div className="text-sm gap-2 text-gray mt-auto flex flex-row  xl:flex-row justify-between xl:items-center w-full">
          <div className="flex gap-2 items-center">
            <Image
              src={"/assets/icon/user-profile.svg"}
              alt="user"
              height={15}
              width={15}
              className="w-3 h-3 invert"
            />
            <span className=" flex text-gray font-[500] text-[12px] gap-2 items-center">
              SMKNUSA
            </span>
          </div>
          <div className="flex xl:ml-auto font-[500] ml-auto  text-[12px] text-gray text-right gap-2 items-center">
            <Image
              src={"/assets/icon/clock.svg"}
              alt="user"
              width={15}
              height={15}
            />
            {normalDate}
          </div>
          <span className="font-[500]  text-[12px] text-gray flex items-center gap-2">
            <Image
              src={"/assets/icon/eye.svg"}
              alt="views"
              width={15}
              height={15}
            />
            {infoCardData.viewer}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoCardItem;
