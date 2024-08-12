"use client";

import Image from "next/image";
import React, { useCallback, useMemo, useState } from "react";
import HomeMajorSlider from "./home-major-slider";
import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion";
import { Heading, Paragraph } from "../ui/typography";

const Informatika = Symbol("Informatika");
const Agribisnis = Symbol("Agribisnis");
const Pemesinan = Symbol("Pemesinan");
const Elektronika = Symbol("Elektronika");

const majorData = {
  [Informatika]: [
    {
      major: "RPL",
      majorDesc: "Rekayasa Perangkat Lunak",
      majorImg: "/assets/home/major/rpl-major.png",
    },
    {
      major: "DKV",
      majorDesc: "Design Komunikasi Visual",
      majorImg: "/assets/home/major/dkv-major.png",
    },
    {
      major: "TKJ",
      majorDesc: "Teknik Komputer Dan Jaringan",
      majorImg: "/assets/home/major/tkj-major.png",
    },
  ],
  [Agribisnis]: [
    {
      major: "RPL",
      majorDesc: "Rekayasa Perangkat Lunak",
      majorImg: "/assets/home/major/rpl-major.png",
    },
  ],
  [Pemesinan]: [
    {
      major: "RPL",
      majorDesc: "Rekayasa Perangkat Lunak",
      majorImg: "/assets/home/major/rpl-major.png",
    },
    {
      major: "DKV",
      majorDesc: "Design Komunikasi Visual",
      majorImg: "/assets/home/major/dkv-major.png",
    },
  ],
  [Elektronika]: [
    {
      major: "RPL",
      majorDesc: "Rekayasa Perangkat Lunak",
      majorImg: "/assets/home/major/rpl-major.png",
    },
    {
      major: "DKV",
      majorDesc: "Design Komunikasi Visual",
      majorImg: "/assets/home/major/dkv-major.png",
    },
    {
      major: "DKV",
      majorDesc: "Design Komunikasi Visual",
      majorImg: "/assets/home/major/dkv-major.png",
    },
  ],
};

const majorLinkData = [
  {
    text: "Informatika",
    slide: Informatika,
  },
  {
    text: "Agribisnis",
    slide: Agribisnis,
  },
  {
    text: "Pemesinan",
    slide: Pemesinan,
  },
  {
    text: "Elektronika",
    slide: Elektronika,
  },
];

const HomeMajor = () => {
  const [currentSlide, setCurrentSlide] = useState<symbol>(Informatika);
  const xValue = 0;
  const offsetX = useMotionValue(xValue);
  const majors = useMemo(() => {
    return majorData[currentSlide as keyof typeof majorData];
  }, [currentSlide]);
  const controls = useAnimation();
  const animatedX = useSpring(offsetX, {
    damping: 20,
    stiffness: 150,
  });

  const handleSlideChange = useCallback(
    (newSlide: symbol) => {
      if (currentSlide !== newSlide) {
        controls.start("animate");
        animatedX.set(0);
        setTimeout(() => {
          setCurrentSlide(newSlide);
        }, 500);
      }
    },
    [currentSlide, controls, animatedX]
  );

  return (
    <section className="w-full h-full bg-white rounded-[10px]">
      <div className="flex flex-col lg:text-center w-full items-center justify-center bg-primary  rounded-md text-white pt-6 sm:pt-10 pb-16 xl:pb-48">
        <Heading type="h1" className="xl:text-[36px]  text-[22px] lg:text-[30px] sm:text-[24px] w-full max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 2xl:max-w-max-container xl:w-fit ">
          Menuju SMK Bisa,
          <br className="block sm:hidden" /> SMK Hebat
        </Heading>

        <Paragraph className=" text-sm xl:text-[18px] lg:text-[14px] xl:w-fit  mt-[12px] w-full max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 2xl:max-w-max-container">
          SMK Negeri 1 Purwosari memiliki beberapa program keahlian yang dibagi
          menjadi 10 macam jurusan.
        </Paragraph>

        <hr className="bg-white mt-8 xl:mt-[52px]  w-full max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 2xl:max-w-max-container" />
      </div>

      <div className="relative  xl:px-8 px-0  xl:-mt-32  ">
        <div className="flex justify-center items-end relative  bg-white overflow-hidden rounded-[10px] ">
          <div className="relative w-full  flex flex-col xl:flex-row   justify-center gap-14  h-full  mt-8 mb-10 xl:mb-0 max-w-max-container">
            <div className="xl:w-[40%] w-full flex top-0 -mt-28 xl:mt-0 absolute justify-center py-3 xl:rounded-[10px] items-center xl:px-0 px-6 gap-8 xl:bg-primary lg:min-w-lg max-w-lg">
              {majorLinkData.map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    <span
                      key={index}
                      onClick={() => handleSlideChange(data.slide)}
                      className={`font-[600] relative z-30 text-xs cursor-pointer transition-colors xl:text-[16px] ${
                        currentSlide === data.slide
                          ? "p-1 rounded-md relative text-white  w-min-content before:border-[1px] before:absolute before:bottom-0 before:right-0 before:border-yellow before:w-full before:opacity-100"
                          : "p-1 rounded-md relative  text-gray-light w-min-content before:h-0 before:absolute before:bottom-0 before:right-0 before:bg-white before:opacity-0"
                      }`}
                    >
                      {data.text}
                    </span>
                  </React.Fragment>
                );
              })}
            </div>
            <div className="relative flex justify-center items-center w-full max-w-max-container  xl:left-20">
              <Image
                src={"/assets/home/major/principal.png"}
                alt=""
                width={550}
                height={550}
                draggable={false}
                className="w-[40rem] hidden xl:block h-full z-20 relative lg:left-0 xl:-left-[34%]"
              />
              <motion.div
                animate={controls}
                className="xl:absolute left-[34%] xl:mt-10"
                variants={{
                  animate: {
                    x: [0, 1000, 0],
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
                <HomeMajorSlider majorData={majors} animatedX={animatedX} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMajor;
