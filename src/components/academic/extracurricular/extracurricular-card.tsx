'use client'

import React, { useState } from "react";
import Link from "next/link";
import ExtracurricularShowMore from "./extracurricular-showmore";
import ProfileCardItem from "@/components/ui/profile-card-item";
import ProfileCardItemLoading from "@/components/ui/profile-card-item-loading";



export type Extracurricular = {
    
  icon : {
      iconImg: string,
      iconName: string,
  },
  img: string,
  description: string,
}

const extracurricularData: Extracurricular[] = [
  {
    icon: {
      iconImg: "/assets/academic/extracurricular/futsal-icon.svg",
      iconName: "Futsal", 
    },
    img: "/assets/academic/extracurricular/futsal-image.png",
    description: 'Integer aliquam tempor nisi varius suspendisse id.'
  },
  {
    icon: {
      iconImg: "/assets/academic/extracurricular/futsal-icon.svg",
      iconName: "Futsal", 
    },
    img: "/assets/academic/extracurricular/futsal-image.png",
    description: 'Integer aliquam tempor nisi varius suspendisse id.'
  },
  {
    icon: {
      iconImg: "/assets/academic/extracurricular/futsal-icon.svg",
      iconName: "Futsal", 
    },
    img: "/assets/academic/extracurricular/futsal-image.png",
    description: 'Integer aliquam tempor nisi varius suspendisse id.'
  },
  {
    icon: {
      iconImg: "/assets/academic/extracurricular/futsal-icon.svg",
      iconName: "Futsal", 
    },
    img: "/assets/academic/extracurricular/futsal-image.png",
    description: 'Integer aliquam tempor nisi varius suspendisse id.'
  },
  {
    icon: {
      iconImg: "/assets/academic/extracurricular/futsal-icon.svg",
      iconName: "Futsal", 
    },
    img: "/assets/academic/extracurricular/futsal-image.png",
    description: 'Integer aliquam tempor nisi varius suspendisse id.'
  },
  {
    icon: {
      iconImg: "/assets/academic/extracurricular/futsal-icon.svg",
      iconName: "Futsal", 
    },
    img: "/assets/academic/extracurricular/futsal-image.png",
    description: 'Integer aliquam tempor nisi varius suspendisse id.'
  },
  {
    icon: {
      iconImg: "/assets/academic/extracurricular/futsal-icon.svg",
      iconName: "Futsal", 
    },
    img: "/assets/academic/extracurricular/futsal-image.png",
    description: 'Integer aliquam tempor nisi varius suspendisse id.'
  },
  {
    icon: {
      iconImg: "/assets/academic/extracurricular/futsal-icon.svg",
      iconName: "Futsal", 
    },
    img: "/assets/academic/extracurricular/futsal-image.png",
    description: 'Integer aliquam tempor nisi varius suspendisse id.'
  },
  {
    icon: {
      iconImg: "/assets/academic/extracurricular/futsal-icon.svg",
      iconName: "Futsal", 
    },
    img: "/assets/academic/extracurricular/futsal-image.png",
    description: 'Integer aliquam tempor nisi varius suspendisse id.'
  },
  {
    icon: {
      iconImg: "/assets/academic/extracurricular/futsal-icon.svg",
      iconName: "Futsal", 
    },
    img: "/assets/academic/extracurricular/futsal-image.png",
    description: 'Integer aliquam tempor nisi varius suspendisse id.'
  },
];

const ExtracurricularCard = () => {
  const [showAllExtracurricular, setShowAllExtracurricular] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center bg-white px-2 xl:mt-0 ">
        {extracurricularData ? (
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 p-4 1xl:px-14 pb-12 bg-white rounded-[10px]">
              {extracurricularData
                .slice(0, showAllExtracurricular ? extracurricularData.length : 9)
                .map((extracurricular, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Link href={"/news/2"}>
                    <ProfileCardItem profileCardData={extracurricular}/>
                      </Link>
                    </React.Fragment>
                  );
                })}
            </div>
            <ExtracurricularShowMore
              showAllExtracurricular={showAllExtracurricular}
              setShowAllExtracurricular={setShowAllExtracurricular}
            />
          </div>
        ) : (
          <div className="grid grid-cols-2 1xl:grid-cols-3 gap-4 md:gap-8 w-full 1xl:w-auto p-4 2xl:px-14 pb-12 bg-white rounded-[10px]">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <React.Fragment key={index}>
                  <ProfileCardItemLoading/>
                </React.Fragment>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ExtracurricularCard;
