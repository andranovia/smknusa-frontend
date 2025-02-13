"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import parse from "html-react-parser";
import ProfileCardItem from "@/components/ui/profile-card-item";
import { Heading } from "@/components/ui/typography";
import DetailLayout from "@/layouts/detail-layout";
import { useExtras } from "@/services/api/useQueries/useExtracurricular";
import { useMetadata } from "@/utils/useMetadata";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { extras, extraDetails } = useExtras(id);

  useMetadata(
    extraDetails?.extra_name || "Extracurricular Details",
    `Details about the extracurricular: ${
      extraDetails?.extra_text || "Extracurricular description"
    }`
  );

  const parsedHtml = parse(
    extraDetails?.extra_text ? extraDetails?.extra_text : ""
  );

  const filteredExtra = (extras || []).filter((item) => item.id_extra !== extraDetails?.id_extra);
  const shuffledExtra = filteredExtra.sort(() => Math.random() - 0.5);

  return (
    extraDetails && (
      <DetailLayout detailData={extraDetails} className="justify-start">
        <div className="flex flex-col gap-[3.5rem] xl:min-h-[20rem]">
          <div className="flex flex-row items-center lg:justify-start  gap-4 h-full w-full">
            <div className="px-4 md:px-6 lg:px-8 py-2 md:py-4 lg:py-6 w-fit flex justify-center items-center bg-gray-medium rounded-[10px]">
              <Image
                src={"/assets/icon/logo-skansa.svg"}
                alt="smknusa-icon"
                width={50}
                height={50}
                className="w-10 xl:w-14 h-10 xl:h-14 object-cover"
              />
            </div>
            <div className="flex flex-col h-full gap-6 lg:gap-8">
              <Heading
                type="h1"
                className="text-blue-base font-bold !leading-none"
              >
                {extraDetails?.extra_name}
              </Heading>
            </div>
          </div>
          <span className="!w-[280px] xs:!w-full font-[400] text-[16px] md:text-[18px] !text-left">
            {parsedHtml}
          </span>
          <div className=" flex gap-4 lg:gap-10 flex-col w-full ">
            <h2 className="mt-10 text-2xl lg:text-3xl xl:text-4xl 1xl:text-5xl font-semibold">
              Extrakurikuler Lain
            </h2>
            <div className="grid grid-cols-1 bg-[#F1F5F9] lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 px-2 py-2 md:py-6 md:px-6  2xl:py-9  rounded-[10px] w-full">
              {shuffledExtra.slice(0, 3).map((extracurricular, index) => {
                return (
                  <React.Fragment key={index}>
                    <Link
                      href={`/academic/extracurricular/${extracurricular.id_extra}`}
                    >
                      <ProfileCardItem profileCardData={extracurricular} />
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
