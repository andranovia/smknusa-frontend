"use client";

import React, { useRef, useState } from "react";
import { useAnimation, useScroll, useTransform } from "framer-motion";
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
    {
      title: "Berita",
      content:
        "SMKN 1 Purwosari Mendapatkan Penghargaan Bintang 5 Apresiasi SMK BISA 2023",
      image: "/assets/berita/berita_guru.svg",
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

  const [currentNewsHighlightIndex, setcurrentNewsHighlightIndex] = useState(0);
  const newsHighlightControls = useAnimation();
  const dragControls = useAnimation();

  const currentNewsData = currentNewsType
    ? newsData[currentNewsType]
    : undefined;

  const handleChangeNews = (newsType: string) => {
    if (newsType !== currentNewsType) {
      dragControls.start({ y: 0 });
      newsHighlightControls.start("after");
      setTimeout(() => {
        setCurrentNewsType(newsType);
        setcurrentNewsHighlightIndex(0);
      }, 300);
    }
  };

  return (
    <>
      <div
        ref={homeNewsEndRef}
        className="w-full h-full flex justify-center items-center flex-col "
      >
        <div className="sticky -top-1/3   flex justify-center items-center overflow-hidden ">
          <div className="w-full h-full bg-white rounded-[10px] mt-3">
            <div className="flex flex-col items-center justify-center bg-primary  rounded-md text-white pt-10 pb-48">
              <h1 className="font-[700] text-[36px]">
                Papan Pengumuman Informasi <br />
                <span className="block text-center">
                  SMK Negeri 1 Purwosari
                </span>
              </h1>

              <p className="font-[500] text-[18px] mt-[12px]">
                Papan Pengumuman ini berisi segala informasi mengenai pembaruan
                agenda, berita, artikel atau yang lainnya
              </p>

              <hr className="bg-white w-[95%] mt-[58px]" />

              <div className="flex justify-between items-start w-full left-8 mt-12 px-10">
                <div className=" flex justify-between items-center px-4 gap-8 ">
                  {newsLinkData.map((link, index) => (
                    <React.Fragment key={index}>
                      <h1
                        onClick={() => handleChangeNews(link.newsTitle)}
                        className={`font-[600] text-[16px] text-[#9DA5B1] p-1 rounded-md relative transition-all w-min-content cursor-pointer ${
                          link.newsTitle === currentNewsType
                            ? " before:h-1 before:absolute text-white before:bottom-0 before:right-0 before:bg-[#F5C451] before:transition-all before:duration-500 before:w-full"
                            : null
                        }`}
                      >
                        {link.newsTitle}
                      </h1>
                    </React.Fragment>
                  ))}
                </div>

                <div className="flex justify-center items-center ">
                  <div className="btn bg-[#F5C451] hover:bg-[#F5C451] text-[#081B34] font-[500] py-2.5 px-5 rounded">
                    <button>Selengkapnya </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative  px-8  -top-36  w-full">
              <div className=" lg:w-full lg:h-full     bg-dot-black/[0.4] relative rounded-xl mt-10 lg:mt-0 ">
                <div className="relative ">
                  <HomeNewsCard
                    homeNewsEndRef={homeNewsEndRef}
                    newsHighlightControls={newsHighlightControls}
                    setcurrentNewsHighlightIndex={setcurrentNewsHighlightIndex}
                    currentNewsHighlightIndex={currentNewsHighlightIndex}
                    currentNewsData={currentNewsData}
                    dragControls={dragControls}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" top-0 h-[60vw] z-20 pointer  pointer-events: none; flex justify-center items-center">
          {/* add height to trigger sticky*/}
        </div>
      </div>
    </>
  );
};

export default HomeNews;
