"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../feature/pagination";

const newsData = [
  {
    card: "Pembelajaran Entrepreneur Dari PT.Indobismar",
    cardImg: "/assets/news/news-entrepeneur.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
  {
    card: "Pembelajaran Entrepreneur Dari PT.Indobismar",
    cardImg: "/assets/news/news-entrepeneur.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/news/news-entrepeneur.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
  {
    card: "Hari Guru Nasional 2023: Bergerak Bersama, Rayakan...",
    cardImg: "/assets/news/news-teacher.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
  {
    card: "Raih Prestasi Kembali: Dua Siswa SMKN 1 Purwosari Juara...",
    cardImg: "/assets/news/news-achievement.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/news/news-entrepeneur.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/news/news-entrepeneur.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
  {
    card: "Hari Guru Nasional 2023: Bergerak Bersama, Rayakan...",
    cardImg: "/assets/news/news-teacher.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/news/news-entrepeneur.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/news/news-entrepeneur.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/news/news-entrepeneur.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/news/news-entrepeneur.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
  {
    card: "Hari Guru Nasional 2023: Bergerak Bersama, Rayakan...",
    cardImg: "/assets/news/news-teacher.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
  {
    card: "Raih Prestasi Kembali: Dua Siswa SMKN 1 Purwosari Juara...",
    cardImg: "/assets/news/news-achievement.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/news/news-entrepeneur.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/news/news-entrepeneur.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
  {
    card: "Hari Guru Nasional 2023: Bergerak Bersama, Rayakan...",
    cardImg: "/assets/news/news-teacher.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
];

const NewsCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentNewsData = newsData.slice(indexOfFirstPost, indexOfLastPost);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gray-base lg:bg-white px-2 lg:-mt-10 my-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 p-4 lg:px-12 pb-12 bg-white rounded-[10px]">
          {currentNewsData.map((news, index) => {
            return (
              <React.Fragment key={index}>
                <Link href={"/news/2"}>
                  <div className="bg-white rounded-lg lg:w-[23rem] h-full shadow-md overflow-hidden relative">
                    <Image
                      className="w-full max-h-full object-cover"
                      src={news.cardImg}
                      alt={news.card}
                      width={800}
                      height={800}
                    />
                    <div className=" px-3 lg:p-4 flex flex-col items-start gap-4 w-full my-4 lg:my-0 ">
                      <div className="grid grid-cols-2 items-center gap-2 top-0 left-0 lg:absolute lg:p-2 z-20">
                        {news.cardCategory.map((category, index) => (
                          <div
                            key={index}
                            className={`bg-[${category.CategoryColor}] px-2 py-1 rounded-[10px]`}
                          >
                            <p className="font-[500] text-[10px] text-gray">
                              {category.categoryName}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="lg:text-md text-xs font-[500]  lg:text-[18px] mb-2 lg:w-full w-[8.5rem]">
                        <h2> {news.card}</h2>
                      </div>
                      <div className="text-sm gap-2 text-gray flex flex-col lg:flex-row lg:justify-between lg:items-center w-full">
                        <span className=" flex text-gray font-[500] text-[12px] gap-2 items-center">
                          <Image
                            src={"/assets/icon/user.svg"}
                            alt="user"
                            width={15}
                            height={15}
                          />
                          {news.cardProfile}
                        </span>
                        <div className="flex lg:ml-auto font-[500] mr-4 text-[12px] text-gray text-right gap-2 items-center">
                          <Image
                            src={"/assets/icon/clock.svg"}
                            alt="user"
                            width={15}
                            height={15}
                          />
                          {news.cardDate}
                        </div>
                        <span className="font-[500]  text-[12px] text-gray flex items-center gap-2">
                          <Image
                            src={"/assets/icon/eye.svg"}
                            alt="views"
                            width={15}
                            height={15}
                          />
                          {news.cardView}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
        <Pagination
          totalPosts={newsData.length}
          postsPerPage={9}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default NewsCard;
