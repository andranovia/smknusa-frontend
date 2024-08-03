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
  const [showAllFacillity, setShowAllFacillity] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center bg-gray-base xl:bg-white px-2 xl:mt-0 ">
        {facilityData ? (
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-8 p-4 xl:px-12 pb-12 bg-white rounded-[10px]">
              {facilityData
                .slice(0, showAllFacillity ? facilityData.length : 9)
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
              showAllFacillity={showAllFacillity}
              setShowAllFacillity={setShowAllFacillity}
            />
          </div>
        ) : (
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-8 p-4 xl:px-12 pb-12 bg-white rounded-[10px]">
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
