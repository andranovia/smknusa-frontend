"use client";

import React, { useState } from "react";

import { useAnimation, motion } from "framer-motion";

import HomeFacilityCardStack from "./home-facility-card-stack";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Heading, Paragraph } from "../ui/typography";

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
  const isMobile = useMediaQuery("only screen and (max-width : 1024px)");
  const [currentSlide, setCurrentSlide] = useState(0);
  const facilityCardData = cardData[currentSlide];
  const [isChangingSlide, setisChangingSlide] = useState(false)
  const controls = useAnimation();
  const handleSlideChange = (key: number) => {
    setisChangingSlide(true)
    setTimeout(() => {
      setisChangingSlide(false)
    }, 1000);
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
    <section className="w-full h-fit bg-white rounded-[10px] xl:overflow-hidden ">
      <div className="flex flex-col items-center justify-center bg-primary rounded-md text-white pt-6 sm:pt-10 pb-48">
        <Heading type="h1" className=" xl:text-[36px] text-[22px] lg:text-[30px] sm:text-[24px] lg:text-center w-full max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 2xl:max-w-max-container xl:w-fit ">
          Kenapa Harus SMK  Negeri 1 Purwosari
        </Heading>

        <Paragraph className=" text-sm xl:text-[18px] lg:text-[14px] mt-[12px]  2xl:w-2/3 lg:text-center w-full max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 2xl:max-w-max-container">
          Di SMK Negeri 1 Purwosari, kami akan memberikan pengalaman terbaik
          dalam kegiatan belajar mengajar yang menyongsong kurikulum merdeka
          belajar. Dengan dilengkapi fasilitas yang berqualitas, mampu
          menyongsong kebutuhan siswa untuk belajar
        </Paragraph>

        <hr className="bg-white mt-8 xl:mt-[52px] w-full max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 2xl:max-w-max-container" />

        <div className="flexm my-12  xl:gap-0 gap-8 justify-center items-center  w-full max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 2xl:max-w-max-container ">
          <div className="max-w-max-container flex xl:justify-between w-full items-center xl:px-4 gap-8 ">
            {facilityLinkData.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <h1
                    onClick={() => handleSlideChange(data.majorFacilityIndex)}
                    className={`font-[600] hidden xl:block  2xl:text-center cursor-pointer transition-colors xl:text-[16px] text-xs   ${
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

            <div className="flex justify-center items-center xl:ml-[25%] w-full xl:w-fit ">
              <div className="btn bg-yellow text-blue-base w-full text-center font-[600] py-2.5 px-5 rounded">
                <button className="xl:text-[16px] text-xs">Selengkapnya</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative px-4 xl:px-8 -mt-44 mb-6 xl:mt-0  xl:-top-44   xl:-mb-20">
        <div className="flex justify-center xl:items-end relative overflow-hidden bg-white rounded-[10px] ">
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
            className="w-[15rem] 2xl:h-[38rem] xl:h-[30rem] lg:h-[24rem] flex xl:items-end max-w-max-container justify-center xs:w-full xl:px-20 pt-10 xl:pt-20"
          >
            <HomeFacilityCardStack items={facilityCardData} isChangingSlide={isChangingSlide}/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeFacility;
