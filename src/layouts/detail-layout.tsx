import React from "react";
import { Extra } from "@/services/api/useQueries/useExtracurricular";
import { Facility } from "@/services/api/useQueries/useFacilities";
import { Major } from "@/services/api/useQueries/useMajors";
import { Partnership } from "@/services/api/useQueries/usePartnerships";
import { backendUrl } from "@/utils/backendUrl";
import { cn } from "@/utils/cn";
import { Vacancy } from "@/services/api/useQueries/useVacancies";
import { Announcement } from "@/services/api/useQueries/useAnnouncements";
import { Event } from "@/services/api/useQueries/useEvents";

const DetailLayout = ({
  children,
  detailData,
  className,
}: {
  children: React.ReactNode;
  detailData:
    | Major
    | Facility
    | Extra
    | Partnership
    | Vacancy
    | Announcement
    | Event;
  className?: string;
}) => {
  return (
    <div className="flex xl:min-h-screen flex-col items-center  gap-3 ">
      <div
        className="relative mt-[65px] xl:mt-24 h-[16rem] w-full p-2 xl:p-2.5 overflow-hidden sm:h-[17rem] md:h-[20rem] xl:h-[28rem] 1xl:h-[32.375rem] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${
            "facility_image" in detailData
              ? backendUrl + detailData.facility_image
              : "jurusan_thumbnail" in detailData
              ? backendUrl + detailData.jurusan_thumbnail
              : "extra_image" in detailData
              ? backendUrl + detailData.extra_image
              : "kemitraan_thumbnail" in detailData
              ? backendUrl + detailData.kemitraan_thumbnail
              : "loker_thumbnail" in detailData
              ? backendUrl + detailData.loker_thumbnail
              : backendUrl + detailData.thumbnail
          })`,
        }}
      ></div>
      <div className="flex w-full flex-col items-center   bg-gray-base">
        <div className=" w-full gap-10 xl:gap-0 flex flex-col  items-center bg-white py-8 lg:py-14  h-full rounded-lg ">
          <div
            className={cn(
              "flex justify-center px-4 xl:px-0 flex-col items-center xl:flex-row gap-[4rem] 1xl:gap-[9.813rem] xl:items-start max-w-[290px] xs:max-w-[330px] sm:max-w-[380px] md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-1xl-content 2xl:max-w-max-[1222px] w-full",
              className
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLayout;
