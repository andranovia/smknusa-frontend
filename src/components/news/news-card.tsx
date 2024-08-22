"use client";

import React, { useState } from "react";
import Link from "next/link";
import Pagination from "../ui/pagination";
import { useNews } from "@/services/api/useQueries/useNews";
import InfoCardItem from "../ui/info-card-item";
import InfoCardItemLoading from "@/components/ui/info-card-item-loading";

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
      <div className="flex flex-col justify-center items-center bg-white -mt-10 xl:-mt-14 ">
        {isNewsLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 p-4 1xl:px-12 pb-12 bg-white w-full 2xl:max-w-fit  rounded-[10px]">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <React.Fragment key={index}>
                  <InfoCardItemLoading />
                </React.Fragment>
              ))}
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col w-full 2xl:w-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8  px-2 lg:px-4 py-4  1xl:px-12 pb-12 bg-white rounded-[10px] w-full">
              {currentNewsData?.map((news, index) => {
                const date = new Date(news.created_at);
                const normalDate = date.toLocaleDateString();

                return (
                  <React.Fragment key={index}>
                    <Link href={`/news/${news.id_pemberitahuan}`}className="flex justify-center">
                      <InfoCardItem infoCardData={news} normalDate={normalDate} />
                    </Link>
                  </React.Fragment>
                );
              })}
            </div>
            <div className="mt-4 mb-12">
            <Pagination
              totalPosts={news?.length}
              postsPerPage={postsPerPage}
              onPageChange={onPageChange}
            />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NewsCard;
