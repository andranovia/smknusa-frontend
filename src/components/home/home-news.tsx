"use client";

import React, { useRef, useState } from "react";
import { useAnimation } from "framer-motion";
import HomeNewsCard from "./home-news-card";

interface NewsItem {
  title: string;
  content: string;
  image: string;
}

const newsData: { [key: string]: NewsItem[] } = {
  Pengumuman: [
    {
      title: "Pengumuman",
      content:
        'Pengoptimalan Gerakan Literasi Sekolah dengan Program "Pustaka Keliling" di SMK Negeri 1 Purwosari',
      image: "/assets/berita/berita_entrepeneur.svg",
    },
    {
      title: "Pengumuman",
      content:
        "SMKN 1 Purwosari Merebut Juara 1 dan 3 Lomba Karya Tulis Ilmiah (KTI) Inovasi Teknologi",
      image: "/assets/samplemurid.png",
    },
    {
      title: "Pengumuman",
      content:
        "SMKN 1 Purwosari Mendapatkan Penghargaan Bintang 5 Apresiasi SMK BISA 2023",
      image: "/assets/berita/berita_guru.svg",
    },
    {
      title: "Pengumuman",
      content:
        "SMKN 1 Purwosari Merebut Juara 1 dan 3 Lomba Karya Tulis Ilmiah (KTI) Inovasi Teknologi",
      image: "/assets/samplemurid.png",
    },
    {
      title: "Pengumuman",
      content:
        "SMKN 1 Purwosari Mendapatkan Penghargaan Bintang 5 Apresiasi SMK BISA 2023",
      image: "/assets/berita/berita_guru.svg",
    },
  ],
  Agenda: [
    {
      title: "Agenda",
      content:
        'Pengoptimalan Gerakan Literasi Sekolah dengan Program "Pustaka Keliling" di SMK Negeri 1 Purwosari',
      image: "/assets/berita/berita_entrepeneur.svg",
    },
    {
      title: "Agenda",
      content:
        "SMKN 1 Purwosari Merebut Juara 1 dan 3 Lomba Karya Tulis Ilmiah (KTI) Inovasi Teknologi",
      image: "/assets/samplemurid.png",
    },
    {
      title: "Agenda",
      content:
        "SMKN 1 Purwosari Mendapatkan Penghargaan Bintang 5 Apresiasi SMK BISA 2023",
      image: "/assets/berita/berita_guru.svg",
    },
  ],
  Berita: [
    {
      title: "Berita",
      content:
        'Pengoptimalan Gerakan Literasi Sekolah dengan Program "Pustaka Keliling" di SMK Negeri 1 Purwosari',
      image: "/assets/berita/berita_entrepeneur.svg",
    },
    {
      title: "Berita",
      content:
        "SMKN 1 Purwosari Merebut Juara 1 dan 3 Lomba Karya Tulis Ilmiah (KTI) Inovasi Teknologi",
      image: "/assets/samplemurid.png",
    },
  ],
  Artikel: [
    {
      title: "Artikel",
      content:
        'Pengoptimalan Gerakan Literasi Sekolah dengan Program "Pustaka Keliling" di SMK Negeri 1 Purwosari',
      image: "/assets/berita/berita_entrepeneur.svg",
    },
    {
      title: "Artikel",
      content:
        "SMKN 1 Purwosari Merebut Juara 1 dan 3 Lomba Karya Tulis Ilmiah (KTI) Inovasi Teknologi",
      image: "/assets/samplemurid.png",
    },
    {
      title: "Artikel",
      content:
        "SMKN 1 Purwosari Mendapatkan Penghargaan Bintang 5 Apresiasi SMK BISA 2023",
      image: "/assets/berita/berita_guru.svg",
    },
  ],
};

const newsLinkData = [
  {
    newsTitle: "Pengumuman",
  },
  {
    newsTitle: "Agenda",
  },
  {
    newsTitle: "Berita",
  },
  {
    newsTitle: "Artikel",
  },
];

const HomeNews = () => {
  const [currentNewsType, setCurrentNewsType] = useState<string | null>(
    "Pengumuman"
  );
  const homeNewsEndRef = useRef(null);

  const [currentNewsHighlightIndex, setCurrentNewsHighlightIndex] = useState(0);
  const newsHighlightControls = useAnimation();

  const currentNewsData = currentNewsType
    ? newsData[currentNewsType]
    : undefined;

  const handleChangeNews = (newsType: string) => {
    if (newsType !== currentNewsType) {
      newsHighlightControls.start("after");
      setTimeout(() => {
        setCurrentNewsType(newsType);
        setCurrentNewsHighlightIndex(0);
      }, 300);
    }
  };

  return (
    <>
      <div
        ref={homeNewsEndRef}
        className="w-full h-full  flex justify-center items-center flex-col "
      >
        <div className="lg:sticky -top-1/3   flex justify-center items-center overflow-hidden ">
          <div className="w-full h-full bg-gray-base lg:pb-20 lg:bg-white rounded-[10px] mt-3">
            <div className="flex flex-col items-center lg:text-center justify-center bg-primary  rounded-md text-white pt-10 pb-48">
              <h1 className="font-[700] lg:text-[36px]  text-[24px] w-4/5 lg:w-full">
                Papan Pengumuman Informasi
                <br className="hidden lg:block" />
                SMK Negeri 1 Purwosari
              </h1>

              <p className="font-[500] lg:text-[18px] mt-[12px] w-4/5 lg:w-full">
                Papan Pengumuman ini berisi segala informasi mengenai pembaruan
                agenda, berita, artikel atau yang lainnya
              </p>

              <hr className="bg-white w-[95%] mt-[58px]" />

              <div className="flex flex-col lg:flex-row lg:justify-between items-start w-full gap-8 left-8 mt-12 px-10 ">
                <div className="grid grid-cols-2 items-center lg:flex lg:justify-start lg:gap-x-10 px-4 justify-between w-full gap-x-20 gap-y-10 ">
                  {newsLinkData.map((link, index) => (
                    <React.Fragment key={index}>
                      <h1
                        onClick={() => handleChangeNews(link.newsTitle)}
                        className={`font-[600] text-[16px]  p-1 rounded-md relative transition-all w-min-content cursor-pointer ${
                          link.newsTitle === currentNewsType
                            ? `p-1 rounded-md relative   before:border-[1px] before:absolute before:right-0  before:bottom-0 text-white  before:mx-auto before:border-[#F5C451] before:w-full before:opacity-100 `
                            : "p-1 rounded-md relative   before:h-0 before:absolute before:bottom-0 text-gray-light before:right-0 before:bg-white before:opacity-0 "
                        }`}
                      >
                        {link.newsTitle}
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

            <div className="relative px-4  lg:px-8  -mt-36   w-full">
              <div className=" lg:w-full lg:h-full  bg-gray-base relative rounded-xl mt-0 ">
                <div className="relative ">
                  <HomeNewsCard
                    homeNewsEndRef={homeNewsEndRef}
                    newsHighlightControls={newsHighlightControls}
                    setCurrentNewsHighlightIndex={setCurrentNewsHighlightIndex}
                    currentNewsHighlightIndex={currentNewsHighlightIndex}
                    currentNewsData={currentNewsData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" top-0 lg:h-[60vw] z-20 pointer  pointer-events:none hidden lg:flex justify-center items-center">
          {/* add height to trigger sticky*/}
        </div>
      </div>
    </>
  );
};

export default HomeNews;
