"use client";

import React, { useCallback, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Major, useMajors } from "@/services/api/useQueries/useMajors";
import HomeMajorSlider from "./home-major-slider";
import { Heading, Paragraph } from "../ui/typography";
import { defaultTransition } from "../animation/transition";


const majorLinkData = [
  {
    text: "Informatika",
    slide: "TI",
  },
  {
    text: "Agribisnis",
    slide: "Pertanian",
  },
  {
    text: "Pemesinan",
    slide: "Pemesinan",
  },
];

const HomeMajor = () => {
  const [currentSlide, setCurrentSlide] = useState("TI");
  const navHighlight = useAnimation();
  const { majors } = useMajors();
  const majorData = majors?.filter(
    (major: Major) => major.prodi.prodi_short === currentSlide
  );
const isMobile = useMediaQuery("only screen and (max-width : 1023.98px)");
  const controls = useAnimation();


  


  const handleSlideChange = useCallback(
    (newSlide: string) => {
      if (currentSlide !== newSlide) {
        controls.start("animate");;
        setTimeout(() => {
          setCurrentSlide(newSlide);
          switch (newSlide) {
            case "TI":
              navHighlight.start({ x: 0, width: "144px" });
              break;
            case "Pertanian":
              navHighlight.start({ x: 148, width: "116px" });
              break;
            case "Pemesinan":
              navHighlight.start({ x: 263, width: "144px" });
              break;
            default:
              navHighlight.start({ x: 0, width: "144px" });
          }
        }, 500);
      }
    },
    [currentSlide, controls, navHighlight]
  );

  return (
    <section className="w-full h-full bg-white rounded-[10px]">
      <div className="flex flex-col lg:text-center w-full items-center justify-center bg-primary  text-white pt-6 sm:pt-10 pb-16 xl:pb-48">
        <Heading
          type="h1"
          className="xl:text-[36px]  text-[22px] lg:text-[30px] sm:text-[24px] w-full px-4 md:px-0 md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-1xl-content 2xl:max-w-max-container xl:w-fit "
        >
          Menuju SMK Bisa,
          <br className="block sm:hidden" /> SMK Hebat
        </Heading>

        <Paragraph className=" text-sm xl:text-lg lg:text-[14px] xl:w-fit  mt-[12px] w-full px-4 md:px-0 md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-1xl-content 2xl:max-w-max-container">
          SMK Negeri 1 Purwosari memiliki beberapa program keahlian yang dibagi
          menjadi 10 macam jurusan.
        </Paragraph>

        <hr className="bg-white  xl:block hidden mt-8 xl:mt-[52px]  w-full px-4 md:px-0 md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-1xl-content 2xl:max-w-max-container" />
      </div>

      <div className="relative  xl:px-8 px-0  xl:-mt-32 flex justify-center w-full ">
        <div className="flex justify-center items-end relative  bg-white overflow-hidden rounded-[10px]  2xl:max-w-max-container h-full w-full">
          <div className="hidden sm:absolute left-0 h-full bg-gradient-to-r from-white to-transparent z-20 p-10 md:p-16 opacity-40"></div>
          <div className="hidden sm:absolute right-0 h-full bg-gradient-to-l from-white to-transparent z-20 p-10 md:p-16 opacity-40"></div>
          <div className="relative w-full  flex flex-col xl:flex-row   justify-center gap-14  h-full  mt-8 mb-10 xl:mb-0 max-w-max-container">
            <div className=" w-full flex top-0 -mt-28 xl:mt-0 absolute justify-center py-3 xl:rounded-[10px] items-center xl:px-0 px-6 gap-8 xl:bg-[#e5e7eb] lg:min-w-lg max-w-[26rem]">
              <motion.div
                initial={false}
                animate={navHighlight}
                transition={defaultTransition}
                className="left-1 w-[9rem] h-[2.475rem] bg-white absolute rounded-md"
              />
              {majorLinkData?.map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    <motion.span
                      key={index}
                      animate={{ scale: currentSlide === data.slide ? 0.9 : 1 }}
                      onClick={() => handleSlideChange(data.slide)}
                      className={`font-[600] relative text-center z-30 p-1 before:transition-colors before:duration-500 rounded-md before:bottom-0 before:right-0 before:absolute w-min-content text-xs cursor-pointer  xl:text-[16px]
                        before:h-0   before:bg-white before:opacity-0 
                        ${
                          currentSlide === data.slide
                            ? " text-blue-base  "
                            : " text-gray-light hover:before:border-[1px]  hover:before:border-yellow hover:before:w-full hover:before:opacity-100"
                        }`}
                    >
                      {data.text}
                    </motion.span>
                  </React.Fragment>
                );
              })}
            </div>
            <div className="relative flex justify-center items-center w-full   xl:py-16">
              <motion.div
                animate={controls}
                className="xl:mt-10 w-full"
                variants={{
                  animate: {
                    x: [0, 1400, 0],
                    opacity: [1, 0, 1],
                    transition: {
                      duration: 1.2,
                      ease: "easeInOut",
                    },
                  },
                  initial: {
                    x: 0,
                  },
                }}
              >
                <HomeMajorSlider majorData={isMobile ? majors : majorData } />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMajor;
