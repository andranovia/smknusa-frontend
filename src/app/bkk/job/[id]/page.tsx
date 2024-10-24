"use client";

import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import { Heading, Paragraph } from "@/components/ui/typography";
import DetailLayout from "@/layouts/detail-layout";
import JobVacanciesCardItem from "@/components/bkk/job/job-card-item";
import { useVacancies } from "@/services/api/useQueries/useVacancies";
import ApplyButton from "@/components/bkk/job/job-apply-button";
import { useMetadata } from "@/utils/useMetadata";
import PDFViewer from "@/components/ui/pdf-viewer";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { vacancies, vacanciesDetails } = useVacancies(id);

  useMetadata(
    vacanciesDetails?.position.position_name +
      " | " +
      vacanciesDetails?.kemitraan.kemitraan_name || "Job Info",
    `Details about the job: ${
      vacanciesDetails?.loker_description || "Job description"
    }`
  );

  const parsedHtml = parse(
    vacanciesDetails?.loker_description
      ? vacanciesDetails?.loker_description
      : ""
  );

  return (
    vacanciesDetails && (
      <DetailLayout
        detailData={vacanciesDetails}
        className="!justify-start w-full"
      >
        <div className="flex flex-col gap-[3.2rem] xl:min-h-[20rem] w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center  gap-4 h-full w-full">
            <div className="flex flex-col h-full gap-6 w-full">
              <Heading
                type="h1"
                className="text-blue-base font-bold !leading-none"
              >
                {vacanciesDetails?.loker_description}
              </Heading>
              <div className="flex flex-col sm:flex-row sm:items-center h-full gap-2 md:gap-4 ">
                <Heading
                  type="h5"
                  className="font-[500]   xl:!text-sm   line-clamp-1 leading-6 text-blue-base"
                >
                  {vacanciesDetails?.kemitraan?.kemitraan_city}
                </Heading>
                <div className="flex items-center h-full gap-2">
                  <Image
                    src={"/assets/icon/location-filled.svg"}
                    alt={"location"}
                    width={14}
                    height={14}
                    className="w-4 h-4"
                  />
                  <Heading
                    type="h5"
                    className="font-[500]   xl:!text-sm  sm:w-full  line-clamp-1 leading-6 text-blue-base"
                  >
                    {vacanciesDetails?.kemitraan?.kemitraan_location_detail}
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full gap-6 xl:items-end w-full">
              <div className="flex items-center gap-6">
                {vacanciesDetails.position.position_type &&
                  vacanciesDetails.position.position_type !== "" && (
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/icon/time.svg"
                        alt="time"
                        width={15}
                        height={15}
                        className="w-5 h-5"
                      />
                      <Paragraph className="text-sm xl:text-lg">
                        {vacanciesDetails.position.position_type}
                      </Paragraph>
                    </div>
                  )}
                {vacanciesDetails.loker_for &&
                  vacanciesDetails.loker_for !== "" && (
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/icon/user-filled.svg"
                        alt="user"
                        width={15}
                        height={15}
                        className="w-5 h-5"
                      />
                      <Paragraph className="text-sm xl:text-lg">
                        {vacanciesDetails.loker_for}
                      </Paragraph>
                    </div>
                  )}
              </div>
              <ApplyButton
                vacancy={vacanciesDetails}
                className="bg-yellow-light w-full xl:max-w-[183px] text-blue-base py-[10px] rounded-md text-xs font-medium"
              />
            </div>
          </div>
          <hr className="border-gray-300 w-full" />
          {vacanciesDetails?.pdf ? (
            <PDFViewer
              url={vacanciesDetails?.pdf ? vacanciesDetails?.pdf : ""}
            />
          ) : (
            <div className="min-h-[17rem] md:min-h-[20rem]  rounded-[10px] lg:min-h-[30rem] xl:min-h-[40rem] flex justify-center items-center bg-gray-base">
              <Image
                src={
                  "https://img.icons8.com/?size=100&id=cD26kdwTbCzt&format=png&color=DCDCDC"
                }
                alt="pdf"
                width={50}
                height={50}
                className="w-40 h-40"
              />
            </div>
          )}
          <Paragraph>{parsedHtml}</Paragraph>
          <div className=" flex gap-4 lg:gap-10 flex-col w-full ">
            <h2 className="mt-10 text-2xl lg:text-3xl xl:text-4xl 1xl:text-5xl font-semibold">
              Lowongan Lain
            </h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-8 bg-[#F1F5F9] px-2 py-2 md:py-6 md:px-6  2xl:py-9  rounded-[10px] w-full">
              {vacancies?.map((vacancy, index) => {
                return (
                  <React.Fragment key={index}>
                    <JobVacanciesCardItem vacancy={vacancy} />
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
