import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import FacilityCardItem from "./facility-card-item";
import CardItemLoading from "@/ui/card-item-loading";
import FacilityShowMore from "./facility-showmore";

const facilityData = [
  {
    card: "Laser Cutting",
    cardImg: "/assets/facility/facility-image.png",
    cardDescription: "Laser Cutting adalah alat yang digunakan untuk...",
    cardfacility: [
      { categoryName: "Teknologi dan Rekayasa", CategoryColor: "#007AFF" },
    ],
  },
  {
    card: "Laser Cutting",
    cardImg: "/assets/facility/facility-image.png",
    cardDescription: "Laser Cutting adalah alat yang digunakan untuk...",
    cardfacility: [
      { categoryName: "Teknologi dan Rekayasa", CategoryColor: "#007AFF" },
    ],
  },
  {
    card: "Laser Cutting",
    cardImg: "/assets/facility/facility-image.png",
    cardDescription: "Laser Cutting adalah alat yang digunakan untuk...",
    cardfacility: [
      { categoryName: "Teknologi dan Rekayasa", CategoryColor: "#007AFF" },
    ],
  },
  {
    card: "Laser Cutting",
    cardImg: "/assets/facility/facility-image.png",
    cardDescription: "Laser Cutting adalah alat yang digunakan untuk...",
    cardfacility: [
      { categoryName: "Teknologi dan Rekayasa", CategoryColor: "#007AFF" },
    ],
  },
  {
    card: "Laser Cutting",
    cardImg: "/assets/facility/facility-image.png",
    cardDescription: "Laser Cutting adalah alat yang digunakan untuk...",
    cardfacility: [
      { categoryName: "Teknologi dan Rekayasa", CategoryColor: "#007AFF" },
    ],
  },
  {
    card: "Laser Cutting",
    cardImg: "/assets/facility/facility-image.png",
    cardDescription: "Laser Cutting adalah alat yang digunakan untuk...",
    cardfacility: [
      { categoryName: "Teknologi dan Rekayasa", CategoryColor: "#007AFF" },
    ],
  },
  {
    card: "Laser Cutting",
    cardImg: "/assets/facility/facility-image.png",
    cardDescription: "Laser Cutting adalah alat yang digunakan untuk...",
    cardfacility: [
      { categoryName: "Teknologi dan Rekayasa", CategoryColor: "#007AFF" },
    ],
  },
  {
    card: "Laser Cutting",
    cardImg: "/assets/facility/facility-image.png",
    cardDescription: "Laser Cutting adalah alat yang digunakan untuk...",
    cardfacility: [
      { categoryName: "Teknologi dan Rekayasa", CategoryColor: "#007AFF" },
    ],
  },
  {
    card: "Laser Cutting",
    cardImg: "/assets/facility/facility-image.png",
    cardDescription: "Laser Cutting adalah alat yang digunakan untuk...",
    cardfacility: [
      { categoryName: "Teknologi dan Rekayasa", CategoryColor: "#007AFF" },
    ],
  },
  {
    card: "Laser Cutting",
    cardImg: "/assets/facility/facility-image.png",
    cardDescription: "Laser Cutting adalah alat yang digunakan untuk...",
    cardfacility: [
      { categoryName: "Teknologi dan Rekayasa", CategoryColor: "#007AFF" },
    ],
  },
  {
    card: "Laser Cutting",
    cardImg: "/assets/facility/facility-image.png",
    cardDescription: "Laser Cutting adalah alat yang digunakan untuk...",
    cardfacility: [
      { categoryName: "Teknologi dan Rekayasa", CategoryColor: "#007AFF" },
    ],
  },
  {
    card: "Laser Cutting",
    cardImg: "/assets/facility/facility-image.png",
    cardDescription: "Laser Cutting adalah alat yang digunakan untuk...",
    cardfacility: [
      { categoryName: "Teknologi dan Rekayasa", CategoryColor: "#007AFF" },
    ],
  },
  {
    card: "Laser Cutting",
    cardImg: "/assets/facility/facility-image.png",
    cardDescription: "Laser Cutting adalah alat yang digunakan untuk...",
    cardfacility: [
      { categoryName: "Teknologi dan Rekayasa", CategoryColor: "#007AFF" },
    ],
  },
  {
    card: "Laser Cutting",
    cardImg: "/assets/facility/facility-image.png",
    cardDescription: "Laser Cutting adalah alat yang digunakan untuk...",
    cardfacility: [
      { categoryName: "Teknologi dan Rekayasa", CategoryColor: "#007AFF" },
    ],
  },
  {
    card: "Laser Cutting",
    cardImg: "/assets/facility/facility-image.png",
    cardDescription: "Laser Cutting adalah alat yang digunakan untuk...",
    cardfacility: [
      { categoryName: "Teknologi dan Rekayasa", CategoryColor: "#007AFF" },
    ],
  },
  {
    card: "Laser Cutting",
    cardImg: "/assets/facility/facility-image.png",
    cardDescription: "Laser Cutting adalah alat yang digunakan untuk...",
    cardfacility: [
      { categoryName: "Teknologi dan Rekayasa", CategoryColor: "#007AFF" },
    ],
  },
  {
    card: "Laser Cutting",
    cardImg: "/assets/facility/facility-image.png",
    cardDescription: "Laser Cutting adalah alat yang digunakan untuk...",
    cardfacility: [
      { categoryName: "Teknologi dan Rekayasa", CategoryColor: "#007AFF" },
    ],
  },
];

export type Facility = {
  card: string;
  cardImg: string;
  cardDescription: string;
  cardfacility: {
    categoryName: string;
    CategoryColor: string;
  }[];
};

const FacilityCard = () => {
  const [showAllFacillity, setShowAllFacillity] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center bg-gray-base lg:bg-white px-2 lg:mt-0 ">
        {facilityData ? (
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 p-4 lg:px-12 pb-12 bg-white rounded-[10px]">
              {facilityData
                .slice(0, showAllFacillity ? facilityData.length : 9)
                .map((facility, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Link href={"/news/2"}>
                        <FacilityCardItem facility={facility} />
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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 p-4 lg:px-12 pb-12 bg-white rounded-[10px]">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <React.Fragment key={index}>
                  <CardItemLoading />
                </React.Fragment>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FacilityCard;
