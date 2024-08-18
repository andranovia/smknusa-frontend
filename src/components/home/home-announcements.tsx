"use client";

import React, { useState } from "react";
import { useAnimation } from "framer-motion";
import HomeAnnouncementsCard from "./home-announcements-card";
import {
  Announcement,
  useAnnouncements,
} from "@/services/api/useQueries/useAnnouncements";
import { News, useNews } from "@/services/api/useQueries/useNews";
import { Article, useArticles } from "@/services/api/useQueries/useArticles";
import { useEvents } from "@/services/api/useQueries/useEvents";
import { Heading, Paragraph } from "../ui/typography";
import { useMediaQuery } from "@uidotdev/usehooks";
import Link from "next/link";

const announcementsLinkData = [
  {
    announcementsTitle: "Pengumuman",
  },
  {
    announcementsTitle: "Agenda",
  },
  {
    announcementsTitle: "Berita",
  },
  {
    announcementsTitle: "Artikel",
  },
];

const HomeAnnouncement = () => {
  const { announcements } = useAnnouncements();
  const { news } = useNews();
  const { articles } = useArticles();
  const { events } = useEvents();
  const isMobile = useMediaQuery("only screen and (max-width : 1024px)");

  const [currentAnnouncementsType, setCurrentAnnouncementsType] =
    useState<string>("Pengumuman");
  const [isChangingAnnouncements, setisChangingAnnouncements] = useState(false)

  const [
    currentAnnouncementsHighlightIndex,
    setCurrentAnnouncementsHighlightIndex,
  ] = useState(0);
  const announcementsHighlightControls = useAnimation();

  const getNewestItems = (
    data?: Announcement[] | News[] | Article[] | null
  ) => {
    return data
      ?.sort((a, b) => {
        const dateA =
          "date" in a
            ? new Date(a.date).getTime()
            : new Date(a.created_at).getTime();
        const dateB =
          "date" in b
            ? new Date(b.date).getTime()
            : new Date(b.created_at).getTime();
        return dateB - dateA;
      })
      .slice(0, 3);
  };

  const getCurrentAnnouncementsData = () => {
    switch (currentAnnouncementsType) {
      case "Pengumuman":
        return getNewestItems(announcements);
      case "Berita":
        return getNewestItems(news);
      case "Artikel":
        return getNewestItems(articles);
      case "Agenda":
        return getNewestItems(events);
      default:
        return [];
    }
  };

  const currentAnnouncementsData = getCurrentAnnouncementsData();

  const handleChangeAnnouncements = (announcementsType: string) => {
    setisChangingAnnouncements(true)
    if (announcementsType !== currentAnnouncementsType) {
      announcementsHighlightControls.start("after");
      if(isMobile){
        setTimeout(() => {
          setisChangingAnnouncements(false)
        }, 2000);
      } else {
        setTimeout(() => {
          setisChangingAnnouncements(false)
        }, 500);
      }
     

      setTimeout(() => {
        setCurrentAnnouncementsType(announcementsType);
        setCurrentAnnouncementsHighlightIndex(0);
      
      }, 400);
   

      
    }
  };

  return (
    <section
      className="w-full h-full  flex justify-center items-center flex-col "
    >
      <div className="xl:sticky -top-1/3 w-full  flex justify-center items-center  ">
        <div className="w-full h-full xl:pb-8 bg-white rounded-[10px] ">
          <div className="flex flex-col items-center lg:text-center justify-center bg-primary  rounded-md text-white pt-6 sm:pt-10 pb-48">
            <Heading type="h1" className=" xl:text-[36px] text-[22px] lg:text-[30px] sm:text-[24px] max-w-[274px] xs:max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content w-full xl:max-w-xl-content 1xl:max-w-1xl-content 2xl:max-w-max-container">
              Papan Pengumuman Informasi <br className="hidden lg:block" />
              SMK Negeri 1 Purwosari
            </Heading>

            <Paragraph className="text-sm xl:text-lg lg:text-[14px] mt-[12px]  max-w-[274px] xs:max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content w-full xl:max-w-xl-content 1xl:max-w-1xl-content 2xl:max-w-max-container">
              Papan Pengumuman ini berisi segala informasi mengenai pembaruan
              agenda, berita, artikel atau yang lainnya.
            </Paragraph>

            <hr className="bg-white mt-8 xl:mt-[52px]  w-full  max-w-[274px] xs:max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-1xl-content 2xl:max-w-max-container" />

            <div className="flex flex-col xl:flex-row max-w-[274px] xs:max-w-xs-content sm:max-w-sm-content md:max-w-md-content  lg:max-w-lg-content xl:justify-between xl:max-w-xl-content 1xl:max-w-1xl-content 2xl:max-w-max-container items-start w-full gap-8 left-8 mt-12  ">
              <div className="grid grid-cols-2 xl:flex items-center xl:justify-start xl:gap-x-10  md:px-4 w-full gap-x-4 gap-y-10 ">
                {announcementsLinkData.map((link, index) => (
                  <React.Fragment key={index}>
                    <span
                      onClick={() =>
                        handleChangeAnnouncements(link.announcementsTitle)
                      }
                      className={`font-[600] text-[16px] text-center p-2 xl:p-1 rounded-md relative transition-all w-min-content cursor-pointer ${
                        link.announcementsTitle === currentAnnouncementsType
                          ? `p-1 rounded-md relative   before:xl:border-[1px] before:absolute bg-yellow text-blue-base xl:bg-transparent before:right-0  before:bottom-0 xl:text-white  before:mx-auto before:border-[#F5C451] before:w-full before:opacity-100 `
                          : "p-1 rounded-md relative   before:h-0 before:absolute before:bottom-0 text-gray-light before:right-0 before:bg-white before:opacity-0 "
                      }`}
                    >
                      {link.announcementsTitle}
                    </span>
                  </React.Fragment>
                ))}
              </div>

              <div className="hidden xl:flex justify-center items-center w-full xl:w-40">
                <Link href={currentAnnouncementsType === "Berita" ? "/news" : "/article"} className="w-full bg-yellow text-[#081B34] font-[500] py-2.5 px-5 rounded">
                  Selengkapnya
                </Link>
              </div>
            </div>
          </div>

          <div className="relative  xl:px-8 flex justify-center items-center  -mt-36   w-full ">
            <div className=" xl:h-full flex justify-center   bg-white relative xl:rounded-xl mt-0 w-full max-w-full 2xl:max-w-max-container">
              <div className="relative  max-w-[274px] xs:max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-full w-full">
                  <HomeAnnouncementsCard
                    isChangingAnnouncements={isChangingAnnouncements}
                    announcementsHighlightControls={
                      announcementsHighlightControls
                    }
                    setCurrentAnnouncementsHighlightIndex={
                      setCurrentAnnouncementsHighlightIndex
                    }
                    currentAnnouncementsHighlightIndex={
                      currentAnnouncementsHighlightIndex
                    }
                    currentAnnouncementsData={currentAnnouncementsData}
                    currentAnnouncementsType={currentAnnouncementsType}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAnnouncement;
