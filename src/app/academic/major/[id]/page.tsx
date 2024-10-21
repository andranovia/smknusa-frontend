"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Heading } from "@/components/ui/typography";
import DetailLayout from "@/layouts/detail-layout";
import { useMajors } from "@/services/api/useQueries/useMajors";
import FeatureCardItem from "@/components/ui/feature-card-item";
import { useMetadata } from "@/utils/useMetadata";
import { backendUrl } from "@/utils/backendUrl";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { majors, majorDetails } = useMajors(id);
  useMetadata(
    majorDetails?.jurusan_short + " | " + majorDetails?.jurusan_nama ||
      "Major Details",
    `Details about the major: ${
      majorDetails?.jurusan_text || "Major description"
    }`
  );

  const getCategoryColor = (icon: string) => {
    switch (icon) {
      case "Teknologi Informatika":
        return "bg-orange-400";
      case "Agribisnis dan Agroteknologi":
        return "bg-green-500";
      case "Teknologi dan Rekayasa":
        return "bg-blue-500";
      case "Teknologi Elektronika":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    majorDetails && (
      <DetailLayout detailData={majorDetails} className="justify-start">
        <div className="flex flex-col gap-[3.5rem] xl:min-h-[20rem]">
          <div className="flex flex-col lg:flex-row lg:justify-start justify-center items-center gap-4 h-full w-full">
            <div className="px-28 xs:px-8 py-6 w-fit xs:w-full lg:w-fit flex justify-center items-center bg-gray-medium rounded-[10px]">
              <Image
                src={backendUrl + majorDetails?.jurusan_logo}
                alt="smknusa-icon"
                width={50}
                height={50}
                className="w-14 h-14 "
              />
            </div>
            <div className="flex flex-col h-full gap-6 lg:gap-8">
              <Heading
                type="h1"
                className="text-blue-base font-bold md:!leading-none text-center"
              >
                {majorDetails?.jurusan_nama}
              </Heading>
              <div
                className={`${getCategoryColor(
                  majorDetails.prodi.nama_prodi
                )} text-center lg:text-start px-2 py-1 rounded-[6px] 1xl:rounded-[10px] w-full lg:w-auto lg:max-w-fit`}
              >
                <Heading
                  type="h5"
                  className="font-medium !text-sm text-white line-clamp-1 xl:line-clamp-none"
                >
                  {majorDetails.prodi.nama_prodi}
                </Heading>
              </div>
            </div>
          </div>
          <span className="!w-[280px] xs:!w-full font-[400] text-[16px]  md:text-[18px]">
            {majorDetails?.jurusan_text}
          </span>
          <div className=" flex gap-4 lg:gap-10 flex-col w-full ">
            <h2 className="mt-10 text-2xl lg:text-3xl xl:text-4xl 1xl:text-5xl font-semibold">
              Jurusan Lain
            </h2>
            <div className="grid grid-cols-1 bg-[#F1F5F9] lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 px-2 py-2 md:py-6 md:px-6  2xl:py-9  rounded-[10px] w-full">
              {majors?.slice(0, 3).map((major, index) => {
                return (
                  <React.Fragment key={index}>
                    <Link href={`/academic/major/${major.id_jurusan}`}>
                      <FeatureCardItem featureCardData={major} />
                    </Link>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </DetailLayout>
    )
  );
}
