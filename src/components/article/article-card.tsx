"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../feature/pagination";
import { useArticles } from "@/services/api/useQueries/useArticles";
import { backendUrl } from "@/utils/backendUrl";

const ArticleCard = () => {
  const { articles } = useArticles();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentArticleData = articles?.slice(indexOfFirstPost, indexOfLastPost);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gray-base lg:bg-white px-2 lg:-mt-10 lg:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 p-4 lg:px-12 pb-12 bg-white rounded-[10px]">
          {currentArticleData?.map((article, index) => {
            const date = new Date(article.created_at);
            const normalDate = date.toLocaleDateString();
            return (
              <React.Fragment key={index}>
                <Link href={`/article/${article.id_pemberitahuan}`}>
                  <div className="bg-white rounded-lg lg:w-[23rem] h-full shadow-md overflow-hidden relative">
                    <Image
                      className="w-full max-h-[12rem] object-cover"
                      src={backendUrl +  article.thumbnail}
                      alt={article.nama}
                      width={800}
                      height={800}
                    />
                    <div className=" px-3 lg:p-4 flex flex-col items-start gap-4 w-full my-4 lg:my-0 ">
                      <div className="grid lg:grid-cols-2 items-center gap-2 top-0 left-0 lg:absolute lg:p-2 z-20">
                        <div
                          className={`bg-[#FFE7AF] px-2 py-1 rounded-[10px]`}
                        >
                          <p className="font-[500] text-[10px] line-clamp-1 text-gray">
                            {article?.category.nama}
                          </p>
                        </div>
                      </div>
                      <div className="lg:text-md text-xs font-[500] lg:min-h-16  lg:text-[18px] mb-2 lg:w-full w-[8.5rem]">
                        <h2> {article.nama}</h2>
                      </div>
                      <div className="text-sm gap-2 text-gray flex flex-col lg:flex-row lg:justify-between lg:items-center w-full">
                      <div className="flex gap-2 items-center">
                        <Image
                          src={"/assets/icon/user-profile.svg"}
                          alt="user"
                          height={15}
                          width={15}
                          className="w-3 h-3 invert"
                        />
                        <span className=" flex text-gray font-[500] text-[12px] gap-2 items-center">
                          SMKoding
                        </span>
                        </div>
                        <div className="flex lg:ml-auto font-[500] mr-4 text-[12px] text-gray text-right gap-2 items-center">
                          <Image
                            src={"/assets/icon/clock.svg"}
                            alt="clock"
                            width={15}
                            height={15}
                          />
                          {normalDate}
                        </div>
                        <span className="font-[500]  text-[12px] text-gray flex items-center gap-2">
                          <Image
                            src={"/assets/icon/eye.svg"}
                            alt="views"
                            width={15}
                            height={15}
                          />
                          {article.viewer}
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
          totalPosts={articles?.length}
          postsPerPage={postsPerPage}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default ArticleCard;
