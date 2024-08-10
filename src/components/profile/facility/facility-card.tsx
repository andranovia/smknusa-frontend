import React, { useState } from "react";
import Link from "next/link";
import FacilityShowMore from "./facility-showmore";
import FeatureCardItem from "@/components/ui/feature-card-item";

import FeatureCardItemLoading from "@/components/ui/feature-card-item-loading";

export type Facility = {
  title: string;
  thumbnail: string;
  description: string;
  category: {
    id: number;
    nama: string;
  };
};

const facilityData: Facility[] = [
  {
    title: "Laser Cutting",
    thumbnail: "/assets/facility/facility-image.png",
    description: "Laser Cutting adalah alat yang digunakan untuk...",
    category: { id: 1, nama: "Teknologi dan Rekayasa" },
  
  },
  {
    title: "Laser Cutting",
    thumbnail: "/assets/facility/facility-image.png",
    description: "Laser Cutting adalah alat yang digunakan untuk...",
    category: { id: 1, nama: "Teknologi dan Rekayasa" },
  },
  {
    title: "Laser Cutting",
    thumbnail: "/assets/facility/facility-image.png",
    description: "Laser Cutting adalah alat yang digunakan untuk...",
    category: { id: 1, nama: "Teknologi dan Rekayasa" },
  },
  {
    title: "Laser Cutting",
    thumbnail: "/assets/facility/facility-image.png",
    description: "Laser Cutting adalah alat yang digunakan untuk...",
    category: { id: 1, nama: "Teknologi dan Rekayasa" },
  },
  {
    title: "Laser Cutting",
    thumbnail: "/assets/facility/facility-image.png",
    description: "Laser Cutting adalah alat yang digunakan untuk...",
    category: { id: 1, nama: "Teknologi dan Rekayasa" },
  },
  {
    title: "Laser Cutting",
    thumbnail: "/assets/facility/facility-image.png",
    description: "Laser Cutting adalah alat yang digunakan untuk...",
    category: { id: 1, nama: "Teknologi dan Rekayasa" },
  },
  {
    title: "Laser Cutting",
    thumbnail: "/assets/facility/facility-image.png",
    description: "Laser Cutting adalah alat yang digunakan untuk...",
    category: { id: 1, nama: "Teknologi dan Rekayasa" },
  },
  {
    title: "Laser Cutting",
    thumbnail: "/assets/facility/facility-image.png",
    description: "Laser Cutting adalah alat yang digunakan untuk...",
    category: { id: 1, nama: "Teknologi dan Rekayasa" },
  },
  {
    title: "Laser Cutting",
    thumbnail: "/assets/facility/facility-image.png",
    description: "Laser Cutting adalah alat yang digunakan untuk...",
    category: { id: 1, nama: "Teknologi dan Rekayasa" },
  },
  {
    title: "Laser Cutting",
    thumbnail: "/assets/facility/facility-image.png",
    description: "Laser Cutting adalah alat yang digunakan untuk...",
    category: { id: 1, nama: "Teknologi dan Rekayasa" },
  },
  {
    title: "Laser Cutting",
    thumbnail: "/assets/facility/facility-image.png",
    description: "Laser Cutting adalah alat yang digunakan untuk...",
    category: { id: 1, nama: "Teknologi dan Rekayasa" },
  },
  {
    title: "Laser Cutting",
    thumbnail: "/assets/facility/facility-image.png",
    description: "Laser Cutting adalah alat yang digunakan untuk...",
    category: { id: 1, nama: "Teknologi dan Rekayasa" },
  },
  {
    title: "Laser Cutting",
    thumbnail: "/assets/facility/facility-image.png",
    description: "Laser Cutting adalah alat yang digunakan untuk...",
    category: { id: 1, nama: "Teknologi dan Rekayasa" },
  },
  {
    title: "Laser Cutting",
    thumbnail: "/assets/facility/facility-image.png",
    description: "Laser Cutting adalah alat yang digunakan untuk...",
    category: { id: 1, nama: "Teknologi dan Rekayasa" },
  },
  {
    title: "Laser Cutting",
    thumbnail: "/assets/facility/facility-image.png",
    description: "Laser Cutting adalah alat yang digunakan untuk...",
    category: { id: 1, nama: "Teknologi dan Rekayasa" },
  },
  {
    title: "Laser Cutting",
    thumbnail: "/assets/facility/facility-image.png",
    description: "Laser Cutting adalah alat yang digunakan untuk...",
    category: { id: 1, nama: "Teknologi dan Rekayasa" },
  },
  {
    title: "Laser Cutting",
    thumbnail: "/assets/facility/facility-image.png",
    description: "Laser Cutting adalah alat yang digunakan untuk...",
    category: { id: 1, nama: "Teknologi dan Rekayasa" },
  },
];

const FacilityCard = () => {
  const [showAllFacility, setShowAllFacility] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center bg-white px-2 xl:mt-0 ">
        {facilityData ? (
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 p-4 1xl:px-14 pb-12 bg-white rounded-[10px]">
              {facilityData
                .slice(0, showAllFacility ? facilityData.length : 9)
                .map((facility, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Link href={"/news/2"}>
                        <FeatureCardItem featureCardData={facility} />
                      </Link>
                    </React.Fragment>
                  );
                })}
            </div>
            <FacilityShowMore
              showAllFacility={showAllFacility}
              setShowAllFacility={setShowAllFacility}
            />
          </div>
        ) : (
          <div className="grid grid-cols-2 w-full 1xl:w-auto 1xl:grid-cols-3 gap-4 md:gap-8 p-4 1xl:px-14 pb-12 bg-white rounded-[10px]">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <React.Fragment key={index}>
                  <FeatureCardItemLoading />
                </React.Fragment>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FacilityCard;
