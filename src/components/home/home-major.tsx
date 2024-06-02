"use client";

import Image from "next/image";
import React, { useCallback, useMemo, useState } from "react";
import HomeMajorSlider from "./home-major-slider";
import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion";

const Informatika = Symbol("Informatika");
const Agribisnis = Symbol("Agribisnis");
const Pemesinan = Symbol("Pemesinan");

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
];

const HomeMajor = () => {
  const [currentSlide, setCurrentSlide] = useState<symbol>(Informatika);
  const xValue = -170;
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
    <div className="lg:w-full lg:h-[61rem] bg-white rounded-[10px]">
      <div className="flex flex-col items-center justify-center gap-8 bg-primary  rounded-md text-white pt-16 pb-48">
        <h1 className="font-[700] lg:text-[36px] text-[24px] w-4/5 lg:w-fit ">
          Menuju SMK Bisa,
          <br className="block lg:hidden" /> SMK Hebat
        </h1>

        <p className="font-[500] lg:text-[18px] lg:w-fit w-4/5 ">
          SMK Negeri 1 Purwosari memiliki beberapa program keahlian yang dibagi
          menjadi 10 macam jurusan.
        </p>

        <hr className="bg-white w-4/5  lg:w-[95%] lg:mt-20" />
      </div>

      <div className="relative  lg:px-8 px-3  -top-32  ">
        <div className="flex justify-start items-end relative bg-white overflow-hidden rounded-[10px] ">
          <Image
            src={"/assets/home/major/principal.png"}
            alt=""
            width={550}
            height={550}
            draggable={false}
            className="w-[40rem] hidden lg:block h-[35rem] z-20 bg-gradient-to-r from-[#F2F3F4]  to-transparent rounded-md"
          />

          <div className="relative w-[20rem] lg:w-full  flex flex-col gap-14 lg:justify-center  items-start h-full lg:my-14 mt-8 ">
            <div className=" flex justify-start lg:px-0 px-6 lg:items-center gap-8">
              {majorLinkData.map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    <h1
                      key={index}
                      onClick={() => handleSlideChange(data.slide)}
                      className={`font-[600] text-xs cursor-pointer transition-colors lg:text-[16px] ${
                        currentSlide === data.slide
                          ? "p-1 rounded-md relative text-blue-base w-min-content before:border-[1px] before:absolute before:bottom-0 before:right-0 before:border-[#F5C451] before:w-full before:opacity-100"
                          : "p-1 rounded-md relative text-gray-light w-min-content before:h-0 before:absolute before:bottom-0 before:right-0 before:bg-white before:opacity-0"
                      }`}
                    >
                      {data.text}
                    </h1>
                  </React.Fragment>
                );
              })}
            </div>

            <motion.div
              animate={controls}
              className="relative"
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
  );
};

export default HomeMajor;
