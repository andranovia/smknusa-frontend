"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import HomeMajorSlider from "./home-major-slider";
import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion";

function createSymbol(name: string): symbol {
  return Symbol(name);
}

const Informatika = createSymbol("Informatika");
const Agribisnis = createSymbol("Agribisnis");
const Pemesinan = createSymbol("Pemesinan");

const majorData = {
  [Informatika]: [
    {
      major: "RPL",
      majorDesc: "Rekayasa Perangkat Lunak",
      majorImg: "/assets/rpl-major.png",
    },
    {
      major: "DKV",
      majorDesc: "Design Komunikasi Visual",
      majorImg: "/assets/dkv-major.png",
    },
    {
      major: "TKJ",
      majorDesc: "Teknik Komputer Dan Jaringan",
      majorImg: "/assets/tkj-major.png",
    },
  ],
  [Agribisnis]: [
    {
      major: "RPL",
      majorDesc: "Rekayasa Perangkat Lunak",
      majorImg: "/assets/rpl-major.png",
    },
  ],
  [Pemesinan]: [
    {
      major: "RPL",
      majorDesc: "Rekayasa Perangkat Lunak",
      majorImg: "/assets/rpl-major.png",
    },
    {
      major: "DKV",
      majorDesc: "Design Komunikasi Visual",
      majorImg: "/assets/dkv-major.png",
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
  const [currentSlide, setCurrentSlide] = useState(Informatika);
  const offsetX = useMotionValue(-40);
  const majors = majorData[currentSlide as keyof typeof majorData];
  const controls = useAnimation();
  const animatedX = useSpring(offsetX, {
    damping: 20,
    stiffness: 150,
  });

  const handleSlideChange = (newSlide: symbol) => {
    if (majorData[currentSlide] !== majorData[newSlide]) {
      controls.start("animate");
      animatedX.set(0);
    } else {
      controls.start("initial");
    }
    setTimeout(() => {
      setCurrentSlide(() => {
        return newSlide;
      });
    }, 500);
  };

  return (
    <div className="w-full h-[61rem] bg-white rounded-[10px]">
      <div className="flex flex-col items-center justify-center bg-primary  rounded-md text-white pt-16 pb-48">
        <h1 className="font-[700] text-[36px]">Menuju SMK Bisa, SMK Hebat</h1>

        <p className="font-[500] text-[18px]">
          SMK Negeri 1 Purwosari memiliki beberapa program keahlian yang dibagi
          menjadi 10 macam jurusan.
        </p>

        <hr className="bg-white w-[95%] mt-20" />
      </div>

      <div className="relative  px-8  -top-32  ">
        <div className="flex justify-start items-end relative bg-[#F2F3F4] overflow-hidden rounded-[10px] ">
          <Image
            src={"/assets/pak-rudi-1.png"}
            alt=""
            width={550}
            height={550}
            draggable={false}
            className="w-[40rem] h-[35rem] z-20 bg-gradient-to-r from-[#F2F3F4]  to-transparent rounded-md"
          />

          <div className="relative  flex flex-col gap-14 justify-center items-start h-full my-14">
            <div className=" flex justify-start items-center gap-8">
              {majorLinkData.map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    <h1
                      onClick={() => handleSlideChange(data.slide)}
                      className={`font-[600] cursor-pointer transition-colors text-[16px] text-[#9DA5B1] ${
                        majorData[currentSlide] === majorData[data.slide]
                          ? `p-1 rounded-md relative text-primary w-min-content before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-[#F5C451] before:w-full before:opacity-100 `
                          : "p-1 rounded-md relative  w-min-content before:h-0 before:absolute before:bottom-0 before:right-0 before:bg-[#F2F3F4] before:opacity-0 "
                      } `}
                    >
                      {data.text}
                    </h1>
                  </React.Fragment>
                );
              })}
            </div>

            <motion.div
              animate={controls}
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
              <HomeMajorSlider
                majorData={majors}
                offsetX={offsetX}
                animatedX={animatedX}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMajor;
