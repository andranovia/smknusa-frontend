"use client";

import React, { useState } from "react";

import { useAnimation, motion } from "framer-motion";
import { useMediaQuery } from "@uidotdev/usehooks";
import HomeFacilityCardStack from "./home-facility-card-stack";

const cardData = [
  [
    {
      id: 0,
      name: "Laboratorium Komputer",
      designation: "Dilengkapi dengan setup yang bagus",
      contentImg: "/assets/home/facility/lab-computer.png",
    },
    {
      id: 1,
      name: "Laboratorium Komputer",
      designation: "Dilengkapi dengan setup yang bagus",
      contentImg: "/assets/home/facility/lab-farm.png",
    },
    {
      id: 2,
      name: "Laboratorium Komputer",
      designation: "Dilengkapi dengan setup yang bagus",
      contentImg: "/assets/home/facility/lab-machine.png",
    },
  ],
  [
    {
      id: 0,
      name: "Laboratorium Komputer 2",
      designation: "Dilengkapi dengan setup yang bagus",
      contentImg: "/assets/home/facility/lab-farm.png",
    },
    {
      id: 1,
      name: "Laboratorium Komputer",
      designation: "Dilengkapi dengan setup yang bagus",
      contentImg: "/assets/home/facility/lab-machine.png",
    },
  ],
  [
    {
      id: 0,
      name: "Laboratorium Komputer 3",
      designation: "Dilengkapi dengan setup yang bagus",
      contentImg: "/assets/home/facility/lab-farm.png",
    },
    {
      id: 1,
      name: "Laboratorium Komputer",
      designation: "Dilengkapi dengan setup yang bagus",
      contentImg: "/assets/home/facility/lab-machine.png",
    },
  ],
];

const HomeFacility = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");
  const [currentSlide, setCurrentSlide] = useState(0);
  const facilityCardData = cardData[currentSlide];
  const controls = useAnimation();
  const handleSlideChange = (key: number) => {
    setTimeout(() => {
      setCurrentSlide(key);
    }, 500);

    controls.start("animate");
  };

  const getFacilityLinkText = (text: string, altText: string) => {
    return isMobile ? text : altText;
  };

  const facilityLinkData = [
    {
      text: getFacilityLinkText("Informatika", "Informatika dan Elektronika"),
      majorFacilityIndex: 0,
    },
    {
      text: getFacilityLinkText("Agribisnis", "Agribisnis dan Agroteknologi"),
      majorFacilityIndex: 1,
    },
    {
      text: getFacilityLinkText("Rekayasa", "Teknologi dan Rekayasa"),
      majorFacilityIndex: 2,
    },
  ];

  return (
    <>
      <div className="w-full h-fit bg-white rounded-[10px] mt-3 lg:overflow-hidden">
        <div className="flex flex-col items-center justify-center bg-primary gap-8 rounded-md text-white pt-10 pb-48">
          <h1 className="font-[700] lg:text-[36px] text-[24px] w-4/5 lg:w-fit">
            Kenapa Harus SMK Negeri 1 Purwosari
          </h1>

          <p className="font-[500] lg:text-[18px]  lg:w-2/3 lg:text-center w-4/5">
            Di SMK Negeri 1 Purwosari, kami akan memberikan pengalaman terbaik
            dalam kegiatan belajar mengajar yang menyongsong kurikulum merdeka
            belajar. Dengan dilengkapi fasilitas yang berqualitas, mampu
            menyongsong kebutuhan siswa untuk belajar
          </p>

          <hr className="bg-white lg:w-[95%]  w-4/5 lg:mt-20" />

          <div className="flex  lg:gap-0 gap-8 justify-center items-center  w-4/5 lg:w-full  lg:mt-12 lg:px-10">
            <div className="grid  grid-cols-2  lg:flex justify-between w-full items-center lg:px-4 gap-8 ">
              {facilityLinkData.map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    <h1
                      onClick={() => handleSlideChange(data.majorFacilityIndex)}
                      className={`font-[600]  text-center cursor-pointer transition-colors lg:text-[16px] text-xs   ${
                        cardData[currentSlide] ===
                        cardData[data.majorFacilityIndex]
                          ? `p-1 rounded-md relative   before:border-[1px] before:absolute before:right-0  before:bottom-0 text-white  before:mx-auto before:border-[#F5C451] before:w-full before:opacity-100 `
                          : "p-1 rounded-md relative   before:h-0 before:absolute before:bottom-0 text-gray-light before:right-0 before:bg-white before:opacity-0 "
                      } `}
                    >
                      {data.text}
                    </h1>
                  </React.Fragment>
                );
              })}
              
              <div className="flex justify-center items-center lg:ml-[25%]">
                <div className="btn bg-yellow text-blue-base font-[600] py-2.5 px-5 rounded">
                  <button className="lg:text-[16px] text-xs">
                    Selengkapnya{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative px-4 lg:px-8  -top-36  -mb-20">
          <div className="flex justify-center lg:items-end relative overflow-hidden bg-white rounded-[10px] ">
            <motion.div
              variants={{
                initial: {
                  y: 0,
                },
                animate: {
                  y: [0, 800, 0],
                  opacity: [1, 0, 1],
                  transition: {
                    duration: 1.2,
                    ease: "easeInOut",
                  },
                },
              }}
              animate={controls}
              initial={"initial"}
              className="lg:h-[38rem] flex lg:items-end justify-center w-full lg:px-20 pt-10 lg:pt-20"
            >
              <HomeFacilityCardStack items={facilityCardData} />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFacility;
