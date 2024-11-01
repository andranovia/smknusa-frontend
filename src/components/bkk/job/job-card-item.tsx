import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Vacancy } from "@/services/api/useQueries/useVacancies";
import { Heading, Paragraph } from "../../ui/typography";
import ApplyButton from "./job-apply-button";

const JobCardItem = ({ vacancy }: { vacancy: Vacancy }) => {
  return (
    <div className="flex flex-col gap-3 w-full p-6 border rounded-md 2xl:w-[38rem] bg-white">
      <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-0 items-start">
        <div className="flex-col  flex  gap-1">
          <Heading
            type="h5"
            className="text-blue-base uppercase font-semibold text-xl line-clamp-1"
          >
            {vacancy.position.position_name}
          </Heading>
          <Paragraph className="uppercase font-[320] text-xs line-clamp-1">
            {vacancy?.kemitraan.kemitraan_name}
          </Paragraph>
        </div>
        <div className="flex items-center gap-2 pt-1.5">
          {vacancy.position.position_type &&
            vacancy.position.position_type !== "" && (
              <div className="flex items-center gap-1">
                <Image
                  src="/assets/icon/time.svg"
                  alt="time"
                  width={15}
                  height={15}
                  className="w-4 h-4"
                />
                <Paragraph className="text-xs">
                  {vacancy.position.position_type}
                </Paragraph>
              </div>
            )}
          {vacancy.loker_for && vacancy.loker_for !== "" && (
            <div className="flex items-center gap-1">
              <Image
                src="/assets/icon/user-filled.svg"
                alt="user"
                width={15}
                height={15}
                className="w-4 h-4"
              />
              <Paragraph className="text-xs">{vacancy.loker_for}</Paragraph>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between h-full gap-2">
        <div className="flex items-center gap-1">
          <Image
            src="/assets/icon/location-filled.svg"
            alt="location"
            width={15}
            height={15}
            className="w-4 h-4"
          />
          <Paragraph className="font-[320] text-xs line-clamp-1">
            {vacancy?.kemitraan?.kemitraan_city},{" "}
            {vacancy?.kemitraan?.kemitraan_location_detail}
          </Paragraph>
        </div>
        <Paragraph className="font-[320] text-xs line-clamp-4">
          {vacancy.loker_description}
        </Paragraph>
        <div className="1xl:flex grid grid-cols-2 w-full gap-3 mt-2 relative bottom-0">
          <Link
            href={`/bkk/job/${vacancy.id_loker}`}
            className="bg-primary w-full text-white rounded-md text-xs font-medium"
          >
            <button className="bg-primary w-full text-white py-[10px] rounded-md text-xs font-medium">
              Detail
            </button>
          </Link>
          <ApplyButton
            vacancy={vacancy}
            className="bg-yellow-light w-full text-blue-base py-[10px] rounded-md  text-xs font-medium"
          />
        </div>
      </div>
    </div>
  );
};

export default JobCardItem;
