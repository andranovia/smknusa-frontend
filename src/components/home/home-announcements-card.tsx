"use client";

import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import {
  AnimatePresence,
  AnimationControls,
  motion,
  useAnimation,
} from "framer-motion";
import Link from "next/link";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Announcement } from "@/services/api/useQueries/useAnnouncements";
import { Article } from "@/services/api/useQueries/useArticles";
import { News } from "@/services/api/useQueries/useNews";
import { Event } from "@/services/api/useQueries/useEvents";
import { backendUrl } from "@/utils/backendUrl";
import { defaultTransition } from "../animation/transition";

type HomeAnnouncementsCardProps = {
  currentAnnouncementsData?: Announcement[] | Article[] | News[] | Event[];
  currentAnnouncementsHighlightIndex: number;
  announcementsHighlightControls: AnimationControls;
  setCurrentAnnouncementsHighlightIndex: Dispatch<SetStateAction<number>>;
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
}: HomeAnnouncementsCardProps) => {
  const isTablet = useMediaQuery("only screen and (max-width : 1023.98px)");
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");

  const sliderPositionYRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (isChangingAnnouncements) {
      controls.start({ y: 0 });
    } else if (isTablet) {
      const timeoutId: NodeJS.Timeout = setTimeout(() => {
        setCurrentAnnouncementsHighlightIndex((prevIndex) => {
          if (
            currentAnnouncementsData &&
            prevIndex < currentAnnouncementsData?.length - 1
          ) {
            return prevIndex + 1;
          } else {
            return 0;
          }
        });
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [
    currentAnnouncementsData,
    currentAnnouncementsHighlightIndex,
    controls,
    setCurrentAnnouncementsHighlightIndex,
    isTablet,
    isChangingAnnouncements,
  ]);

  const handleChangeHighlight = (index: number) => {
    if (isTablet) {
      return;
    }
    setCurrentAnnouncementsHighlightIndex(index);
    if (currentAnnouncementsData && index === 0) {
      controls.start({ y: 0 });
    } else if (currentAnnouncementsData && index === 1) {
      controls.start({ y: 170 });
    } else {
      controls.start({ y: 340 });
    }
  };

  const imageVariantMobile = {
    hidden: { opacity: 0, y: 0, x: -100 },
    visible: { opacity: 1, y: 0, x: 0 },
    exit: { opacity: 0, y: 0, x: 100 },
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      announcementsHighlightControls.start("visible");
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [currentAnnouncementsData, announcementsHighlightControls]);

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
      y:
        isMobile &&
        currentAnnouncementsHighlightIndex === 1 &&
        !isChangingAnnouncements
          ? -150
          : isMobile &&
            currentAnnouncementsHighlightIndex === 2 &&
            !isChangingAnnouncements
          ? -310
          : isTablet &&
            currentAnnouncementsHighlightIndex === 1 &&
            !isChangingAnnouncements
          ? -80
          : isTablet &&
            Number(currentAnnouncementsHighlightIndex) === 2 &&
            !isChangingAnnouncements
          ? -160
          : 0,
      opacity: 1,
      transition: {
        type: "spring",
        mass: 0.5,
        damping: 11.5,
        stiffness: 100,
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
  };

  const getLinkDetail = (link: string) => {
    switch (currentAnnouncementsType) {
      case "Pengumuman":
        return `info/announcements/${link}`;
      case "Berita":
        return `info/news/${link}`;
      case "Artikel":
        return `info/article/${link}`;
      case "Agenda":
        return `info/events/${link}`;
      default:
        return "/";
    }
  };

  const AnnouncementsHighlight = (children: React.ReactNode) => {
    return (
      <motion.div
        variants={{
          ...announcementsHighlightVariant,
        }}
        animate={announcementsHighlightControls}
        initial="hidden"
        className="flex flex-col items-start gap-8   xl:pb-0 pb-10 w-full relative lg:max-h-fit max-h-[4rem] lg:min-h-[14rem] xl:min-h-fit"
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
              variants={{
                ...listVariant,
                visible: {
                  y: 0,
                  opacity:
                    currentAnnouncementsHighlightIndex === index || !isTablet
                      ? 1
                      : 0.3,
                },
              }}
              animate={{
                color:
                  currentAnnouncementsHighlightIndex === index &&
                  !isChangingAnnouncements
                    ? "#111827"
                    : "#9ca3af",
                scale:
                  currentAnnouncementsHighlightIndex === index &&
                  !isChangingAnnouncements
                    ? 1
                    : 0.9,
                opacity:
                  currentAnnouncementsHighlightIndex === index &&
                  isTablet &&
                  !isChangingAnnouncements
                    ? 1
                    : 0.2,
              }}
              transition={defaultTransition}
              className={`flex flex-col items-start justify-between xl:w-2/3 relative min-h-[7.9rem] xl:min-h-[8rem]`}
            >
              <span
                className="flex flex-col items-start gap-2  cursor-pointer "
                onClick={() => handleChangeHighlight(index)}
              >
                <h2 className="font-[600]   xl:text-lg">
                  {currentAnnouncementsType}
                </h2>

                <p className="font-[500] text-sm xl:text-[16px] line-clamp-3  xl:min-h-fit">
                  {announcement.nama}
                </p>
              </span>

              <Link
                href={getLinkDetail(announcement.id_pemberitahuan)}
                className="flex justify-start items-center gap-2"
              >
                <h3 className="font-[500] text-[16px] cursor-pointer">
                  Lihat Selengkapnya
                </h3>
                <Image
                  src={"assets/icon/line-arrow-right.svg"}
                  alt="arrow-right"
                  width={40}
                  height={40}
                  className="w-4 h-4"
                />
              </Link>
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
                <div className="h-4 bg-gray-300 rounded-full w-[16rem] sm:w-[20rem]  1xl:w-[26rem] mb-4 xl:mb-2.5"></div>
                <div className="h-3 bg-gray-300 rounded-full w-[14rem]  1xl:w-[20rem] mb-4 xl:mb-2.5"></div>
                <div className="h-3 bg-gray-300 rounded-full w-[16rem] 1xl:w-[22rem] mb-4 xl:mb-2.5"></div>
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
      x: isTablet ? "" : 200,
      scale: isTablet ? 0.9 : 1,
      opacity: 0,
    },
    visible: {
      x: 0,
      scale: 1,
      opacity: 1,
    },
  };

  const AnnouncementImageHighlight = (children: React.ReactNode) => {
    return currentAnnouncementsData ? (
      <>
        <motion.div
          variants={announcementsImageHighlightVariant}
          animate={announcementsHighlightControls}
          initial="hidden"
          transition={defaultTransition}
          className=" w-full xl:w-3/4 relative rounded-[10px] overflow-hidden xl:overflow-visible  z-20 h-full max-h-[13rem] lg:max-h-full "
        >
          {children}
        </motion.div>
      </>
    ) : (
      <>
        <div className="relative w-full h-full xl:h-[27rem]  xl:w-3/5 xl:-left-10 object-cover z-1  md:mb-0  shadow-sm  animate-pulse">
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
  };
  const AnnouncementImageList = () => {
    const cardTransitionSettings = {
      duration: 0.4,
      ease: "easeInOut",
      zIndex: { delay: 0.5 },
    };
    return (
      <>
        {isTablet ? (
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentAnnouncementsHighlightIndex}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{ ...imageVariantMobile }}
              transition={defaultTransition}
              className={` w-full h-full min-h-[13rem] lg:min-h-fit xl:max-h-[27rem] xl:top-4  xl:max-w-[40rem] absolute   `}
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
        ) : (
          currentAnnouncementsData?.map((announcement, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial="hidden"
                animate={{
                  x:
                    currentAnnouncementsHighlightIndex === index
                      ? 0
                      : isTablet
                      ? index === 2
                        ? 0
                        : 840
                      : 660,
                  zIndex: isTablet
                    ? index === 0
                      ? 10
                      : index === 1
                      ? 8
                      : currentAnnouncementsHighlightIndex
                    : index === 1
                    ? 10
                    : currentAnnouncementsHighlightIndex,
                }}
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
        )}
      </>
    );
  };

  return (
    <div className="flex justify-start overflow-hidden items-end relative w-full h-[24rem] lg:h-[20rem] py-4 xl:h-[34rem] bg-white   rounded-[10px] ">
      <div className="absolute right-0 h-full bg-gradient-to-l from-white to-transparent z-40 p-0 xl:p-16 opacity-40"></div>
      <div className="flex flex-col lg:flex-row overflow-hidden  xl:flex-row-reverse  rounded-[10px]  justify-between items-center w-full h-full xl:p-8 gap-6">
        {AnnouncementImageHighlight(AnnouncementImageList())}

        <div className="flex justify-start items-start gap-8 h-[17rem] px-2 lg:px-0 lg:h-full w-full xl:w-[60%] overflow-hidden  lg:overflow-visible">
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
