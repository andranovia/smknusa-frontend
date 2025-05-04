"use client";

import React, { useState } from "react";

import { motion, useAnimation } from "framer-motion";

import { useMediaQuery } from "@uidotdev/usehooks";
import Link from "next/link";
import {
  Facility,
  useFacilities,
} from "@/services/api/useQueries/useFacilities";
import { Heading, Paragraph } from "../ui/typography";
import HomeFacilityCardStack from "./home-facility-card-stack";

const HomeFacility = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 1024px)");
  const [currentSlide, setCurrentSlide] = useState("TI");
  const { facilities } = useFacilities();
  const facilityCardData = facilities?.filter(
    (facility: Facility) => facility.prodi.prodi_short === currentSlide
  );
  const [isChangingSlide, setIsChangingSlide] = useState(false);

  const controls = useAnimation();

  const handleSlideChange = (key: string) => {
    setIsChangingSlide(true);

    setTimeout(() => {
      setIsChangingSlide(false);
    }, 1400);
    setCurrentSlide(key);
    controls.start("animate");
  };

  const getFacilityLinkText = (text: string, altText: string) => {
    return isMobile ? text : altText;
  };

  const facilityLinkData = [
    {
      text: getFacilityLinkText("Informatika", "Informatika dan Elektronika"),
      majorFacility: "TI",
    },
    {
      text: getFacilityLinkText("Agribisnis", "Agribisnis dan Agroteknologi"),
      majorFacility: "Pertanian",
    },
    {
      text: getFacilityLinkText("Rekayasa", "Teknologi dan Rekayasa"),
      majorFacility: "Pemesinan",
    },
  ];

  return (
    <section className="w-full h-fit bg-white rounded-[10px] xl:overflow-hidden ">
      <div className="flex flex-col items-center justify-center bg-primary  text-white pt-6 sm:pt-10 pb-48">
        <Heading
          type="h1"
          className=" xl:text-[36px] text-[22px] lg:text-[30px] sm:text-[24px] lg:text-center w-full px-4 lg:px-0 md:max-w-md-content lg:max-w-lg-content 1xl:max-w-1xl-content xl:max-w-xl-content 2xl:max-w-max-container xl:w-fit "
        >
          Kenapa Harus SMK Negeri 1 Purwosari
        </Heading>

        <Paragraph className=" text-sm xl:text-lg lg:text-[14px] mt-[12px] w-full 1xl:w-2/3 lg:text-center px-4 lg:px-0 md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-1xl-content 2xl:max-w-max-container">
          Dengan dilengkapi fasilitas yang berqualitas, mampu menyongsong
          kebutuhan siswa untuk belajar.
        </Paragraph>

        <hr className="bg-white hidden xl:block mt-8 xl:mt-[52px] w-full px-4 lg:px-0 md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-1xl-content 2xl:max-w-max-container" />

        <div className="flex my-6 xl:my-12  xl:gap-0 gap-8 justify-center items-center  w-full px-4 lg:px-0 md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-1xl-content 2xl:max-w-max-container ">
          <div className="max-w-max-container flex xl:justify-between w-full items-center xl:px-4 gap-8 ">
            {facilityLinkData?.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <h1
                    onClick={() => handleSlideChange(data.majorFacility)}
                    className={`font-[600] w-full hidden xl:block  2xl:text-center cursor-pointer transition-colors 1xl:text-[16px] xl:text-center xl:text-md text-xs   ${
                      currentSlide === data.majorFacility
                        ? `p-1 rounded-md relative   before:border-[1px] before:absolute before:right-0  before:bottom-0 text-white  before:mx-auto before:border-[#F5C451] before:w-full before:opacity-100 `
                        : "p-1 rounded-md relative   before:h-0 before:absolute before:bottom-0 text-gray-light before:right-0 before:bg-white before:opacity-0 "
                    } `}
                  >
                    {data.text}
                  </h1>
                </React.Fragment>
              );
            })}

            <div className="hidden xl:flex justify-center items-center xl:ml-[8%] 1xl:ml-[12%] 2xl:ml-[22%] w-full xl:w-fit ">
              <div className="btn bg-yellow text-blue-base w-full text-center font-[600] py-2.5 px-5 rounded">
                <Link
                  href={"/profile/school-facility"}
                  className="xl:text-[16px] text-xs"
                >
                  Selengkapnya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative xl:px-8 -mt-44 mb-6 xl:mt-0  xl:-top-44  w-full flex justify-center  xl:-mb-20">
        <div className="flex justify-center xl:items-end pt-4 relative overflow-hidden w-full bg-white 2xl:max-w-max-container xl:rounded-[10px] ">
          <div className="absolute bottom-0  w-full bg-gradient-to-t from-white to-transparent z-20 p-10 md:p-7x opacity-60"></div>
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
            className=" 2xl:h-[38rem] xl:h-[30rem] lg:h-[24rem] flex xl:items-end  justify-center w-full xl:px-20 pt-10 xl:pt-20"
          >
            {facilityCardData && facilities && facilityCardData?.length > 0 && (
              <HomeFacilityCardStack
                items={isMobile ? facilities.slice(0, 4) : facilityCardData}
                isChangingSlide={isChangingSlide}
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeFacility;
