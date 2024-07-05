"use client";

import React, { useState } from "react";
import Link from "next/link";
import Pagination from "../feature/pagination";
import { useNews } from "@/services/api/useQueries/useNews";
import NewsCardItem from "./news-card-item";
import CardItemLoading from "@/ui/card-item-loading";

const NewsCard = () => {
  const { news, isNewsLoading } = useNews();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentNewsData = news?.slice(indexOfFirstPost, indexOfLastPost);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gray-base lg:bg-white px-2 lg:-mt-10 lg:my-20">
        {isNewsLoading ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 p-4 lg:px-12 pb-12 bg-white rounded-[10px]">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <React.Fragment key={index}>
                  <CardItemLoading />
                </React.Fragment>
              ))}
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 p-4 lg:px-12 pb-12 bg-white rounded-[10px]">
              {currentNewsData?.map((news, index) => {
                const date = new Date(news.created_at);
                const normalDate = date.toLocaleDateString();

                return (
                  <React.Fragment key={index}>
                    <Link href={`/news/${news.id_pemberitahuan}`}>
                      <NewsCardItem news={news} normalDate={normalDate} />
                    </Link>
                  </React.Fragment>
                );
              })}
            </div>
            <Pagination
              totalPosts={news?.length}
              postsPerPage={postsPerPage}
              onPageChange={onPageChange}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default NewsCard;
