"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { PanInfo, motion, useMotionValue, useSpring } from "framer-motion";

const majorData = [
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
];

const HomeMajor = () => {
  const startIndex = 0;
  const dragThreshold = 100;
  const fallbackWidth = 100;
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSlide, setActiveSlide] = useState(startIndex);
  const canScrollPrev = activeSlide > 0;
  const canScrollNext = activeSlide < majorData.length - 1;

  const maxLeftSlide = -250;
  const maxRightSlide = -20;
  const offsetX = useMotionValue(0);
  const animatedX = useSpring(offsetX, {
    damping: 20,
    stiffness: 150,
  });

  function handleDragSnap(
    _: MouseEvent,
    { offset: { x: dragOffset } }: PanInfo
  ) {
    containerRef.current?.removeAttribute("data-dragging");

    animatedX.stop();

    if (
      Math.abs(dragOffset) < dragThreshold ||
      (!canScrollPrev && dragOffset > 0) ||
      (!canScrollNext && dragOffset < 0)
    ) {
      animatedX.set(maxRightSlide);
    } else {
      animatedX.set(maxLeftSlide);
    }
  }

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

      <div className="relative w-full h-full px-8  -top-32 ">
        <div className="flex justify-start items-end relative bottom-0 bg-[#F2F3F4] overflow-hidden rounded-[10px] ">
          <Image
            src={"/assets/pak-rudi-1.png"}
            alt=""
            width={550}
            height={550}
            draggable={false}
            className="h-full w-full relative z-20 -right-14 bg-gradient-to-r from-[#F2F3F4] to-transparent rounded-md"
          />
          <div className="relative  flex flex-col gap-14 justify-center items-start h-full my-14">
            <div className="mx-20 flex justify-center items-center gap-8">
              <h1
                className="font-[600] text-[16px] p-1 rounded-md relative transition-all w-min-content
                        before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-white before:transition-all before:duration-500
                        before:w-full hover:before:left-0 hover:before:bg-primary cursor-pointer"
              >
                Informatika
              </h1>
              <h1 className="font-[600] text-[16px]">Agribisnis</h1>
              <h1 className="font-[600] text-[16px]">Permesinan</h1>
              <h1 className="font-[600] text-[16px]">Elektronika</h1>
            </div>
            <motion.div
              ref={containerRef}
              style={{
                x: animatedX,
              }}
              drag="x"
              onDragStart={() => {
                containerRef.current?.setAttribute("data-dragging", "true");
              }}
              onDragEnd={handleDragSnap}
              dragConstraints={{
                left: -(fallbackWidth * (majorData.length - 1)),
                right: fallbackWidth,
              }}
              className="flex justify-end items-end gap-8   relative "
            >
              {majorData.map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    <motion.div
                      layout
                      transition={{
                        ease: "easeInOut",
                        duration: 0.4,
                      }}
                      ref={(el) => (itemsRef.current[index] = el)}
                      className="flex justify-end items-center flex-col relative bg-black rounded-[10px]  w-[18.75rem] h-[25rem]"
                    >
                      <Image
                        src={data.majorImg}
                        alt="rpl-major"
                        width={300}
                        height={400}
                        className="w-full h-full opacity-70"
                        draggable={false}
                      />
                      <div className="absolute text-center pb-4 text-white">
                        <h2 className="font-[600] text-[18px]">{data.major}</h2>
                        <p className="font-[500] text-[14px]">
                          {data.majorDesc}
                        </p>
                      </div>
                    </motion.div>
                  </React.Fragment>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMajor;
