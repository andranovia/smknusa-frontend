"use client";

import React, { useRef, useState } from "react";
import { useAnimation } from "framer-motion";
import HomeAnnouncementsCard from "./home-announcements-card";
import { ClientOnly } from "@/utils/isClient";
import { Announcement, useAnnouncements } from "@/services/api/useQueries/useAnnouncements";
import { News, useNews } from "@/services/api/useQueries/useNews";
import { Article, useArticles } from "@/services/api/useQueries/useArticles";
import { useEvents } from "@/services/api/useQueries/useEvents";


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
  const {events} = useEvents()


  const [currentAnnouncementsType, setCurrentAnnouncementsType] = useState<string>("Pengumuman");
  const homeAnnouncementsEndRef = useRef(null);

  const [
    currentAnnouncementsHighlightIndex,
    setCurrentAnnouncementsHighlightIndex,
  ] = useState(0);
  const announcementsHighlightControls = useAnimation();

  const getNewestItems = (data?: Announcement[] | News[] | Article[] | null) => {
    return data
      ?.sort((a, b) => {
        const dateA = 'date' in a ? new Date(a.date).getTime() : new Date(a.created_at).getTime();
        const dateB = 'date' in b ? new Date(b.date).getTime() : new Date(b.created_at).getTime();
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
    if (announcementsType !== currentAnnouncementsType) {
      announcementsHighlightControls.start("after");
      setTimeout(() => {
        setCurrentAnnouncementsType((announcementsType));
        setCurrentAnnouncementsHighlightIndex(0);
      }, 200);
    }
  };

  return (
    <>
      <div
        ref={homeAnnouncementsEndRef}
        className="w-full h-full  flex justify-center items-center flex-col "
      >
        <div className="lg:sticky -top-1/3 w-full  flex justify-center items-center overflow-hidden ">
          <div className="w-full h-full bg-gray-base lg:pb-20 lg:bg-white rounded-[10px] ">
            <div className="flex flex-col items-center lg:text-center justify-center bg-primary  rounded-md text-white pt-10 pb-48">
              <h1 className="font-[700] lg:text-[36px]  text-[24px] w-4/5 lg:w-full">
                Papan Pengumuman Informasi <br className="hidden lg:block" />SMK Negeri 1 Purwosari
             
              
              </h1>

              <p className="font-[500] lg:text-[18px] mt-[12px] w-4/5 lg:w-full">
                Papan Pengumuman ini berisi segala informasi mengenai pembaruan
                agenda, berita, artikel atau yang lainnya
              </p>

              <hr className="bg-white w-[95%] mt-[58px]" />

              <div className="flex flex-col lg:flex-row lg:justify-between items-start w-full gap-8 left-8 mt-12 px-4 lg:px-10 ">
                <div className="grid grid-cols-2 items-center lg:flex lg:justify-start lg:gap-x-10  px-4 w-full gap-x-4 gap-y-10 ">
                  {announcementsLinkData.map((link, index) => (
                    <React.Fragment key={index}>
                      <h1
                        onClick={() =>
                          handleChangeAnnouncements(link.announcementsTitle)
                        }
                        className={`font-[600] text-[16px] text-center  p-1 rounded-md relative transition-all w-min-content cursor-pointer ${
                          link.announcementsTitle === currentAnnouncementsType
                            ? `p-1 rounded-md relative   before:border-[1px] before:absolute before:right-0  before:bottom-0 text-white  before:mx-auto before:border-[#F5C451] before:w-full before:opacity-100 `
                            : "p-1 rounded-md relative   before:h-0 before:absolute before:bottom-0 text-gray-light before:right-0 before:bg-white before:opacity-0 "
                        }`}
                      >
                        {link.announcementsTitle}
                      </h1>
                    </React.Fragment>
                  ))}
                </div>

                <div className="flex justify-center items-center w-full lg:w-40">
                  <div className="w-full bg-yellow text-[#081B34] font-[500] py-2.5 px-5 rounded">
                    <button>Selengkapnya </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative px-3  lg:px-8  -mt-36   w-full">
              <div className=" lg:w-full lg:h-full  bg-gray-base relative rounded-xl mt-0 ">
                <div className="relative ">
                  <ClientOnly>
                    <HomeAnnouncementsCard
                      homeAnnouncementsEndRef={homeAnnouncementsEndRef}
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
                  </ClientOnly>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAnnouncement;
