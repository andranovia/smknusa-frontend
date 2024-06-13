
"use client";

import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import {
  AnimationControls,
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useAnimation,
  AnimatePresence,
  motionValue,
} from "framer-motion";
import { defaultTransition } from "../animation/transition";
import { useMediaQuery } from "@uidotdev/usehooks";

type Announcement = {
  title: string;
  content: string;
  image: string;
};

type HomeAnnouncementsCardProps = {
  currentAnnouncementsData: Announcement[];
  currentAnnouncementsHighlightIndex: number;
  announcementsHighlightControls: AnimationControls;
  setCurrentAnnouncementsHighlightIndex: Dispatch<SetStateAction<number>>;
  homeAnnouncementsEndRef: React.MutableRefObject<null>;
};

const HomeAnnouncementsCard = ({
  currentAnnouncementsData,
  currentAnnouncementsHighlightIndex,
  announcementsHighlightControls,
  setCurrentAnnouncementsHighlightIndex,
  homeAnnouncementsEndRef,
}: HomeAnnouncementsCardProps) => {
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");
  const sliderPositionYRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const dragControls = useAnimation();
  const scrollMobile = motionValue(0);

  useEffect(() => {
    announcementsHighlightControls.start("visible");
  }, [currentAnnouncementsData]);


  const announcementsHighlightVariant = {
    hidden: {
      y: 0,
    },
    after: {
      y: 0,
    },
    visible: {
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listVariant = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    after: {
      y: 80,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, y: isMobile ? 0 : 200, x: isMobile ? -100 : 0 },
    visible: { opacity: 1, y: 0, x: 0 },
    exit: { opacity: 0, y: isMobile ? 0 : -200, x: isMobile ? 100 : 0 },
  };

  const { scrollYProgress: homeAnnouncementsScrollProgress } = useScroll({
    target: homeAnnouncementsEndRef,
    offset: ["start", "end"],
    layoutEffect: false,
  });

  const sliderY = useTransform(
    isMobile ? scrollMobile : homeAnnouncementsScrollProgress,
    [0, 0.5, 1],
    [0, 80, 300]
  );


  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isMobile) {
      timeoutId = setTimeout(() => {
        if (
          currentAnnouncementsHighlightIndex <
          currentAnnouncementsData.length - 1
        ) {
          setCurrentAnnouncementsHighlightIndex((prevIndex) => prevIndex + 1);
        } else {
          setCurrentAnnouncementsHighlightIndex(0);
        }
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [currentAnnouncementsHighlightIndex]);

  useMotionValueEvent(sliderY, "change", (latest) => {
    if (currentAnnouncementsData && !isMobile) {
      const segmentSize = 200 / (currentAnnouncementsData.length - 1);
      const index = Math.floor(latest / segmentSize);
      setCurrentAnnouncementsHighlightIndex(
        Math.min(index, currentAnnouncementsData.length - 1)
      );
    }
  });

  const announcementsY = useTransform(
    isMobile ? scrollMobile : homeAnnouncementsScrollProgress,
    [0, 1],
    [
      0,
      currentAnnouncementsData
        ? currentAnnouncementsData?.length <= 3
          ? -4
          : -40 * currentAnnouncementsData.length
        : 1,
    ]
  );

  const AnnouncementsHighlight = (children: React.ReactNode) => {
    return (
      <motion.div
        variants={announcementsHighlightVariant}
        animate={announcementsHighlightControls}
        initial="visible"
        style={{ y: announcementsY }}
        transition={defaultTransition}
        className="flex flex-col items-start gap-8 lg:mt-10 lg:pb-0 pb-10"
      >
        {children}
      </motion.div>
    );
  };

  const AnnouncementsList = () => (
    <>
      {currentAnnouncementsData?.map((announcement, index) => (
        <React.Fragment key={index}>
          <motion.div
            variants={listVariant}
            animate={{
              color:
                currentAnnouncementsHighlightIndex === index
                  ? "#111827"
                  : "#9ca3af",
              scale:
                currentAnnouncementsHighlightIndex === index && !isMobile
                  ? 1
                  : 0.9,
            }}
            className={`flex flex-col items-start gap-2 lg:w-2/3 `}
          >
            <h2 className="font-[600]   lg:text-[18px] ">
              {announcement.title}
            </h2>
            <p className="font-[500] text-sm lg:text-[16px]">
              {announcement.content}
            </p>
            <div className="flex justify-start items-center gap-2">
              <h3 className="font-[500] text-[16px]">Lihat Selengkapnya</h3>
              <Image
                src={"assets/icon/line-arrow-right.svg"}
                alt="arrow-right"
                width={40}
                height={40}
                className="w-4 h-4"
              />
            </div>
          </motion.div>
        </React.Fragment>
      ))}
    </>
  );

  const AnnouncementImageList = () => {
    return (
      <>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentAnnouncementsHighlightIndex}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{ ...imageVariant }}
            transition={defaultTransition}
            className={`flex flex-col items-start gap-2 w-full h-full top-[10%] lg:h-auto lg:w-[45%] lg:absolute  `}
          >
            <Image
              src={
                currentAnnouncementsData[currentAnnouncementsHighlightIndex]
                  .image
              }
              alt={`announcement-${currentAnnouncementsHighlightIndex}`}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </>
    );
  };

  return (
    <div className="flex justify-start overflow-hidden items-end relative w-full lg:h-[34rem] bg-white lg:bg-gray-base  rounded-[10px] ">
      <div className="flex flex-col  lg:flex-row-reverse justify-between items-center w-full h-full lg:p-8 gap-6">
        <div className="lg:w-2/3 overflow-hidden w-full">
         {AnnouncementImageList()}
        </div>
        <div className="flex justify-start items-start gap-8 h-full">
          <div className="hidden lg:block">
            <motion.div
              dragConstraints={sliderContainerRef}
              ref={sliderPositionYRef}
              style={{ y: sliderY }}
              animate={dragControls}
              transition={defaultTransition}
              className="bg-yellow cursor-grab p-1 rounded-md h-1/4 absolute top-0 mt-8"
            ></motion.div>
            <div
              ref={sliderContainerRef}
              className="bg-gray-base  p-1 rounded-md lg:h-[26rem]"
            ></div>
          </div>

          {AnnouncementsHighlight(AnnouncementsList())}
        </div>
      </div>
    </div>
  );
};

export default HomeAnnouncementsCard;
