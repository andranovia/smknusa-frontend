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
import {
  Announcement,
} from "@/services/api/useQueries/useAnnouncements";
import { Article } from "@/services/api/useQueries/useArticles";
import { News } from "@/services/api/useQueries/useNews";
import { Event } from "@/services/api/useQueries/useEvents";
import { backendUrl } from "@/utils/backendUrl";

type HomeAnnouncementsCardProps = {
  currentAnnouncementsData?: Announcement[] | Article[] | News[] | Event[];
  currentAnnouncementsHighlightIndex: number;
  announcementsHighlightControls: AnimationControls;
  setCurrentAnnouncementsHighlightIndex: Dispatch<SetStateAction<number>>;
  homeAnnouncementsEndRef: React.MutableRefObject<null>;
  currentAnnouncementsType: string;
};

const HomeAnnouncementsCard = ({
  currentAnnouncementsType,
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
    homeAnnouncementsScrollProgress,
    [0, 0.5, 1],
    [0, 80, 320]
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    timeoutId = setTimeout(() => {
      if (
        currentAnnouncementsData &&
        currentAnnouncementsHighlightIndex <
          currentAnnouncementsData?.length - 1
      ) {
        setCurrentAnnouncementsHighlightIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentAnnouncementsHighlightIndex(0);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [currentAnnouncementsHighlightIndex]);

  useMotionValueEvent(sliderY, "change", (latest) => {
    if (currentAnnouncementsData && !isMobile) {
      const segmentSize = 250 / (currentAnnouncementsData.length - 1);
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
        className="flex flex-col items-start gap-8  lg:pb-0 pb-10"
      >
        {children}
      </motion.div>
    );
  };

  const AnnouncementsList = () =>
    currentAnnouncementsData ? (
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
                {currentAnnouncementsType}
              </h2>

              <p className="font-[500] text-sm lg:text-[16px] line-clamp-3 min-h-16">
                {announcement.nama}
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
    ) : (
      <>
        <div className="flex flex-col gap-12">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className={`flex flex-col items-start gap-2 lg:w-2/3 animate-pulse `}
              >
                <div className="h-4 bg-gray-300 rounded-full w-[20rem]  lg:w-[26rem] mb-4"></div>
                <div className="h-3 bg-gray-300 rounded-full  w-[14rem]  lg:w-[30rem] mb-4"></div>
                <div className="h-3 bg-gray-300 rounded-full   w-[16rem] lg:w-[20rem] mb-4"></div>
                <div className="flex justify-start items-center gap-2">
                  <div className="h-3 bg-gray-200 rounded-full w-[10rem] "></div>
                  <Image
                    src={"assets/icon/line-arrow-right.svg"}
                    alt="arrow-right"
                    width={40}
                    height={40}
                    className="w-4 h-4"
                  />
                </div>
              </div>
            ))}
        </div>
      </>
    );

  const AnnouncementImageList = () => {
    return (
      <>
        {currentAnnouncementsData ? (
          <>
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentAnnouncementsHighlightIndex}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{ ...imageVariant }}
                transition={defaultTransition}
                className={` w-full h-full lg:top-[10%]  lg:h-[27rem]  lg:w-[45%] lg:left-1/2 absolute  `}
              >
                <Image
                  src={
                    currentAnnouncementsData
                      ? backendUrl +
                        currentAnnouncementsData[
                          currentAnnouncementsHighlightIndex
                        ].thumbnail
                      : "/empty"
                  }
                  alt={`announcement-${currentAnnouncementsHighlightIndex}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <>
            <div className="relative w-full h-full lg:h-[27rem] lg:left-1/2 lg:top-[10%]  lg:w-[45%] lg:absolute object-cover z-1  md:mb-0  shadow-sm  animate-pulse">
              <div className="flex justify-center  rounded-xl items-center flex-col w-full h-full bg-gray-300">
                <svg
                  className="w-1/3 h-1/3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <div className="flex justify-start overflow-hidden items-end relative w-full lg:h-[34rem] bg-white lg:bg-gray-base  rounded-[10px] ">
      <div className="flex flex-col  lg:flex-row-reverse justify-between items-center w-full h-full lg:p-8 gap-6">
        <div className="lg:w-2/4 overflow-hidden w-full relative lg:static h-[16rem] lg:h-full ">
          {AnnouncementImageList()}
        </div>
        <div className="flex justify-start items-start gap-8 h-full ">
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
