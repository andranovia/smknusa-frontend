"use client";

import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import {
  AnimationControls,
  motion,
  useAnimation,
  motionValue,
} from "framer-motion";
import { defaultTransition } from "../animation/transition";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Announcement } from "@/services/api/useQueries/useAnnouncements";
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
  isChangingAnnouncements: boolean;
};

const HomeAnnouncementsCard = ({
  isChangingAnnouncements,
  currentAnnouncementsType,
  currentAnnouncementsData,
  currentAnnouncementsHighlightIndex,
  announcementsHighlightControls,
  setCurrentAnnouncementsHighlightIndex,
  homeAnnouncementsEndRef,
}: HomeAnnouncementsCardProps) => {
  const isMobile = useMediaQuery("only screen and (max-width : 1024px)");
  const sliderPositionYRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();



  useEffect(() => {
    if (isChangingAnnouncements) {
      controls.start({ y: 0 });
    }
    else if (isMobile) {
      let timeoutId: NodeJS.Timeout;

      timeoutId = setTimeout(() => {
        setCurrentAnnouncementsHighlightIndex((prevIndex) => {
          if (currentAnnouncementsData && prevIndex < currentAnnouncementsData?.length - 1) {
            return prevIndex + 1;
          } else {
            return 0;
          }
        });
      }, 2000);

      return () => clearTimeout(timeoutId);
    }



  }, [currentAnnouncementsData, currentAnnouncementsHighlightIndex, controls, setCurrentAnnouncementsHighlightIndex, isMobile]);

  const handleChangeHighlight = (index: number) => {
    if (isMobile) { return }
    setCurrentAnnouncementsHighlightIndex(index);
    if (currentAnnouncementsData && index === 0) {
      controls.start({ y: 0 });
    } else if (currentAnnouncementsData && index === 1) {
      controls.start({ y: 170 });
    } else {
      controls.start({ y: 340 });
    }
  };

  const imageVariant = {
    hidden: { opacity: 1, y: isMobile ? 0 : 200, x: 0 },
  };

  useEffect(() => {

    let timeoutId: NodeJS.Timeout;

    timeoutId = setTimeout(() => {
      announcementsHighlightControls.start("visible");
    }, 400);

    return () => clearTimeout(timeoutId);


  }, [currentAnnouncementsData]);


  const announcementsHighlightVariant = {
    hidden: {
      y: 0,
      opacity: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    after: {
      y: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listVariant = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    after: {
      y: 40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };




  const AnnouncementsHighlight = (children: React.ReactNode) => {
    return (
      <motion.div
        variants={announcementsHighlightVariant}
        animate={announcementsHighlightControls}
        initial="hidden"
        transition={defaultTransition}
        className="flex flex-col items-start gap-8  xl:pb-0 pb-10 w-full"
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
              className={`flex flex-col items-start justify-between xl:w-2/3 min-h-[8.5rem] max-h-[8.5rem]`}
            >
              <span className="flex flex-col items-start gap-2  cursor-pointer " onClick={() => handleChangeHighlight(index)}>
                <h2 className="font-[600]   xl:text-lg">
                  {currentAnnouncementsType}
                </h2>

                <p className="font-[500] text-sm xl:text-[16px] line-clamp-3  xl:min-h-fit">
                  {announcement.nama}
                </p>
              </span>

              <div className="flex justify-start items-center gap-2">
                <h3 className="font-[500] text-[16px] cursor-pointer">Lihat Selengkapnya</h3>
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
                className={`flex flex-col items-start gap-2 xl:w-2/3 animate-pulse `}
              >
                <div className="h-4 bg-gray-300 rounded-full w-[20rem]  xl:w-[26rem] mb-4"></div>
                <div className="h-3 bg-gray-300 rounded-full  w-[14rem]  xl:w-[30rem] mb-4"></div>
                <div className="h-3 bg-gray-300 rounded-full   w-[16rem] xl:w-[20rem] mb-4"></div>
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


  const announcementsImageHighlightVariant = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    after: {
      x: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };


  const AnnouncementImageHighlight = (children: React.ReactNode) => {
    return (

      currentAnnouncementsData ? (
        <>
          <motion.div
            variants={announcementsImageHighlightVariant}
            animate={announcementsHighlightControls}
            initial="hidden"
            transition={defaultTransition}
            className=" w-full xl:w-3/4 relative  h-[16rem]  lg:h-[24rem]  xl:h-full "
          >
            {children}
          </motion.div>
        </>
      ) :  <>
      <div className="relative w-full h-full xl:h-[27rem]  xl:w-3/5 -left-10 object-cover z-1  md:mb-0  shadow-sm  animate-pulse">
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
    );
  }
  const AnnouncementImageList = () => {
    const cardTransitionSettings = {
      duration: 0.4,
      ease: "easeInOut",
      zIndex: { delay: 0.5 },
    };
    return (
      <>
        {
          currentAnnouncementsData?.map((announcement, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial="hidden"
                animate={{
                  opacity: currentAnnouncementsHighlightIndex === index ? 1 : 1,
                  x: currentAnnouncementsHighlightIndex === index ? 0 : isMobile ? index === 2 ? 0 : 840 : 660,
                  zIndex: isMobile ? index === 0 ? 10 : index === 1 ? 8 : currentAnnouncementsHighlightIndex : index === 1 ? 10 : currentAnnouncementsHighlightIndex,
                  y: 0,
                }}
                variants={{ ...imageVariant }}
                transition={cardTransitionSettings}
                className={` w-full h-full xl:max-h-[27rem] xl:top-4  xl:max-w-[40rem] absolute  `}
              >
                <Image
                  src={backendUrl + announcement.thumbnail}
                  alt={`announcement-${announcement.id_pemberitahuan}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            </React.Fragment>
          ))
        }
    
      </>
    );
  };

  return (
    <div className="flex justify-start overflow-hidden items-end relative w-full xl:h-[34rem] bg-white   rounded-[10px] ">
      <div className="absolute right-0 h-full bg-gradient-to-l from-white to-transparent z-20 p-0 xl:p-16 opacity-80"></div>
      <div className="flex flex-col overflow-hidden  xl:flex-row-reverse justify-between items-center w-full h-full xl:p-8 gap-6">
        {AnnouncementImageHighlight(AnnouncementImageList())}

        <div className="flex justify-start items-start gap-8 h-full w-[60%] ">
          <div className="hidden xl:block h-full">
            <motion.div
              dragConstraints={sliderContainerRef}
              ref={sliderPositionYRef}
              animate={controls}
              transition={defaultTransition}
              className="bg-yellow cursor-grab p-1 rounded-md h-1/4 absolute top-0 mt-8"
            ></motion.div>
            <div
              ref={sliderContainerRef}
              className="bg-gray-base  p-1 rounded-md xl:h-full"
            ></div>
          </div>

          {AnnouncementsHighlight(AnnouncementsList())}
        </div>
      </div>
    </div>
  );
};

export default HomeAnnouncementsCard;
