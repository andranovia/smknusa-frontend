"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProfileCardItem from "@/components/ui/profile-card-item";
import { Heading, Paragraph } from "@/components/ui/typography";
import DetailLayout from "@/layouts/detail-layout";
import { usePartnerships } from "@/services/api/useQueries/usePartnerships";
import { useMetadata } from "@/utils/useMetadata";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { partnerships, partnershipDetails } = usePartnerships(id);
  useMetadata(
    partnershipDetails?.kemitraan_name || "Partnership Details",
    `Details about the partnership: ${
      partnershipDetails?.kemitraan_description || "Partnership description"
    }`
  );

  return (
    partnershipDetails && (
      <DetailLayout detailData={partnershipDetails} className="!justify-start">
        <div className="flex flex-col gap-[3.5rem] xl:min-h-[20rem] w-full lg:w-fit">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start  gap-4 h-full w-full">
            <div className="px-8 py-6 w-full lg:w-fit flex justify-center items-center bg-gray-medium rounded-[10px]">
              <Image
                src={"/assets/icon/logo-skansa.svg"}
                alt="smknusa-icon"
                width={50}
                height={50}
                className="w-14 h-14 "
              />
            </div>
            <div className="flex flex-col h-full gap-4">
              <Heading
                type="h1"
                className="text-blue-base font-bold !leading-none"
              >
                {partnershipDetails?.kemitraan_name}
              </Heading>
              <div className="flex items-center h-full gap-2">
                <Image
                  src={"/assets/icon/location-filled.svg"}
                  alt={partnershipDetails?.kemitraan_name}
                  width={14}
                  height={14}
                  className="w-4 h-4"
                />
                <Heading
                  type="h5"
                  className=" !text-xs font-[500]   xl:!text-sm  sm:w-full  line-clamp-1 leading-6 text-blue-base"
                >
                  {partnershipDetails?.kemitraan_location_detail}
                </Heading>
              </div>
            </div>
          </div>

          <Paragraph>{partnershipDetails?.kemitraan_description}</Paragraph>
          <div className=" flex gap-4 lg:gap-10 flex-col w-full ">
            <h2 className="mt-10 text-2xl lg:text-3xl xl:text-4xl 1xl:text-5xl font-semibold">
              Perusahaan Lain
            </h2>
            <div className="grid grid-cols-1 bg-[#F1F5F9] lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 px-2 py-2 md:py-6 md:px-6  2xl:py-9  rounded-[10px] w-full">
              {partnerships?.slice(0, 3).map((partnership, index) => {
                return (
                  <React.Fragment key={index}>
                    <Link href={`/bkk/partnership/${partnership.id_kemitraan}`}>
                      <ProfileCardItem profileCardData={partnership} />
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
