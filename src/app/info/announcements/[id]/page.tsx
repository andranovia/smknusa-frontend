"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import { useAnnouncements } from "@/services/api/useQueries/useAnnouncements";
import PDFViewer from "@/components/ui/pdf-viewer";
import InfoCardItem from "@/components/ui/info-card-item";
import InfoShare from "@/components/ui/info-share";
import { useMetadata } from "@/utils/useMetadata";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { announcements, announcementDetails } = useAnnouncements(id);

  const sanitizedHtml = announcementDetails?.text ? DOMPurify.sanitize(announcementDetails?.text, {
    FORBID_TAGS: ["img", "style", "b", "i", "strong", "em", "u", "font"],
    FORBID_ATTR: ["style"],
  }) : "";
  const parsedHtml = parse(sanitizedHtml);
  useMetadata(
    announcementDetails?.nama || "Announcement Details",
    `Details about the announcement: ${
      announcementDetails?.text || "Announcement description"
    }`
  );

  const date = new Date(announcementDetails?.created_at || Date.now());
  const normalDate = announcementDetails ? date.toLocaleDateString() : "";

  const filteredAnnouncements = (announcements || []).filter((item) => item.id_pemberitahuan !== announcementDetails?.id_pemberitahuan);
  const shuffledAnnouncements = filteredAnnouncements.sort(() => Math.random() - 0.5);

  return (
    <div className="pt-[4.5rem] xl:pt-24 px-2 xl:px-3 flex justify-center items-center w-full">
      <div className="w-full  bg-white rounded-[10px]  text-blue-base flex justify-center ">
        <div className="relative  bg-white rounded-[10px] flex flex-col items-center xl:gap-20 pt-4 lg:pt-10 pb-20 px-4 gap-0 max-w-full md:max-w-md-content lg:max-w-lg-content xl:max-w-full 2xl:max-w-max-content w-full">
          <div className="flex flex-col gap-0 xl:gap-6 w-full xl:w-[82%]">
            <h1 className="font-[700] lg:text-4xl xl:text-[42px] xl:leading-[3rem] text-2xl">
              {announcementDetails?.nama}
            </h1>
            <div className="flex xl:flex-row flex-col xl:my-0 my-6 gap-4 xl:gap-8 justify-between items-start w-full">
              <div className="flex flex-wrap items-center gap-2 xl:w-1/4 2xl:w-1/6">
                {announcementDetails?.level === "0" ? (
                  <div className="bg-[#FFE7AF] px-2 py-1.5 lg:py-1 rounded-[10px]">
                    <p className="font-[500] text-[10px] text-gray text-center">
                      Penting
                    </p>
                  </div>
                ) : null}
                <div
                  style={{
                    backgroundColor: announcementDetails?.category.color,
                  }}
                  className="px-2 py-1.5 lg:py-1 rounded-[10px]"
                >
                  <p className="font-[500] text-[10px] text-gray text-center">
                    {announcementDetails?.category.nama}
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full xl:w-4/5 gap-8 !font-[500] !text-[18px]  ">
                <p className="relative !text-gray line-clamp-3 ">
                  {parsedHtml}
                </p>
                <hr className="w-full border " />
                <div className="w-full justify-between flex lg:flex-row flex-col lg:items-center gap-4">
                  <h4 className="text-[14px]">Diposting pada : {normalDate}</h4>
                  <div className="flex flex-row justify-between lg:justify-center xl:items-center my-4 gap-4 xl:gap-10 text-[12px]">
                    <div className="flex gap-1 items-center">
                      <Image
                        width={20}
                        height={20}
                        src={"/assets/icon/location-black.svg"}
                        alt="location"
                      />
                      <h4>SMKN 1 PURWOSARI</h4>
                    </div>
                    <div className="flex gap-1 items-center ml-auto lg:ml-0">
                      <Image
                        width={20}
                        height={20}
                        src={"/assets/icon/eye.svg"}
                        alt="view"
                      />
                      <h4>{announcementDetails?.viewer}</h4>
                    </div>
                    <InfoShare />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 w-full xl:w-[82%]">
            <div className="w-full max-h-[17rem] md:max-h-[20rem] rounded-[10px] lg:max-h-[30rem] xl:max-h-[40rem]">
              {announcementDetails?.pdf ? (
                <PDFViewer
                  url={announcementDetails?.pdf ? announcementDetails?.pdf : ""}
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
            </div>
          </div>
          <div className=" flex gap-4 lg:gap-10 flex-col w-full xl:w-[82%]">
            <h2 className="mt-10 text-2xl lg:text-3xl xl:text-4xl 1xl:text-5xl font-semibold">
              Pengumuman Lain yang tak kalah penting
            </h2>
            <div className="grid grid-cols-1 bg-[#F1F5F9] lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 px-2 py-2 md:py-6 md:px-6  2xl:px-12 2xl:py-9  rounded-[10px] w-full">
              {shuffledAnnouncements.slice(0, 3).map((announcement, index) => {
                const date = new Date(announcement.created_at);
                const normalDate = date.toLocaleDateString();

                return (
                  <React.Fragment key={index}>
                    <Link
                      href={`/info/announcements/${announcement.id_pemberitahuan}`}
                      className="flex justify-center"
                    >
                      <InfoCardItem
                        infoCardData={announcement}
                        normalDate={normalDate}
                      />
                    </Link>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
