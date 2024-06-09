"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../feature/pagination";

const articleData = [
  {
    card: "Laravel: Aplikasi Perpustakaan dengan Laravel 7",
    cardImg: "/assets/article/article-laravel-application.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
  {
    card: "Javascript: Synchronous VS Asynchronous",
    cardImg: "/assets/article/article-javascript.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
  {
    card: "Laravel: Structure Directory & Migrations",
    cardImg: "/assets/article/article-laravel.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
  {
    card: "Laravel: Aplikasi Perpustakaan dengan Laravel 7",
    cardImg: "/assets/article/article-laravel-application.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
  {
    card: "Javascript: Synchronous VS Asynchronous",
    cardImg: "/assets/article/article-javascript.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
  {
    card: "Laravel: Structure Directory & Migrations",
    cardImg: "/assets/article/article-laravel.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
  {
    card: "Laravel: Aplikasi Perpustakaan dengan Laravel 7",
    cardImg: "/assets/article/article-laravel-application.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
  {
    card: "Javascript: Synchronous VS Asynchronous",
    cardImg: "/assets/article/article-javascript.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
  {
    card: "Laravel: Structure Directory & Migrations",
    cardImg: "/assets/article/article-laravel.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
  {
    card: "Laravel: Aplikasi Perpustakaan dengan Laravel 7",
    cardImg: "/assets/article/article-laravel-application.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
  {
    card: "Javascript: Synchronous VS Asynchronous",
    cardImg: "/assets/article/article-javascript.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
  {
    card: "Laravel: Structure Directory & Migrations",
    cardImg: "/assets/article/article-laravel.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
  {
    card: "Laravel: Aplikasi Perpustakaan dengan Laravel 7",
    cardImg: "/assets/article/article-laravel-application.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
  {
    card: "Javascript: Synchronous VS Asynchronous",
    cardImg: "/assets/article/article-javascript.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
  {
    card: "Laravel: Structure Directory & Migrations",
    cardImg: "/assets/article/article-laravel.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
  {
    card: "Laravel: Aplikasi Perpustakaan dengan Laravel 7",
    cardImg: "/assets/article/article-laravel-application.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
  {
    card: "Javascript: Synchronous VS Asynchronous",
    cardImg: "/assets/article/article-javascript.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
];

const ArticleCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentArticleData = articleData.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gray-base lg:bg-white px-2 lg:-mt-10 my-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 p-4 lg:px-12 pb-12 bg-white rounded-[10px]">
          {currentArticleData.map((article, index) => {
            return (
              <React.Fragment key={index}>
                <Link href={"/article/2"}>
                  <div className="bg-white rounded-lg lg:w-[23rem] h-full shadow-md overflow-hidden relative">
                    <Image
                      className="w-full max-h-full object-cover"
                      src={article.cardImg}
                      alt={article.card}
                      width={800}
                      height={800}
                    />
                    <div className=" px-3 lg:p-4 flex flex-col items-start gap-4 w-full my-4 lg:my-0 ">
                      <div className="grid grid-cols-2 items-center gap-2 top-0 left-0 lg:absolute lg:p-2 z-20">
                        {article.cardCategory.map((category, index) => (
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
                        <h2> {article.card}</h2>
                      </div>
                      <div className="text-sm gap-2 text-gray flex flex-col lg:flex-row lg:justify-between lg:items-center w-full">
                        <Image
                          src={"/assets/icon/user-profile.svg"}
                          alt="user"
                          height={15}
                          width={15}
                          className="w-3 h-3 invert"
                        />
                        <span className=" flex text-gray font-[500] text-[12px] gap-2 items-center">
                          {article.cardProfile}
                        </span>
                        <div className="flex lg:ml-auto font-[500] mr-4 text-[12px] text-gray text-right gap-2 items-center">
                          <Image
                            src={"/assets/icon/clock.svg"}
                            alt="clock"
                            width={15}
                            height={15}
                          />
                          {article.cardDate}
                        </div>
                        <span className="font-[500]  text-[12px] text-gray flex items-center gap-2">
                          <Image
                            src={"/assets/icon/eye.svg"}
                            alt="views"
                            width={15}
                            height={15}
                          />
                          {article.cardView}
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
          totalPosts={articleData.length}
          postsPerPage={9}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default ArticleCard;
