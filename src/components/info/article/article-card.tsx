"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "@/components/ui/typography";
import { useArticles } from "@/services/api/useQueries/useArticles";
import Pagination from "../../ui/pagination";
import InfoCardItem from "../../ui/info-card-item";
import InfoCardItemLoading from "../../ui/info-card-item-loading";

const ArticleCard = ({
  articleFilter,
}: {
  articleFilter: {
    search: string;
    category: string;
    start_date: string;
    end_date: string;
  };
}) => {
  const { articles, isArticlesLoading } = useArticles(undefined, 1, articleFilter);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = articles?.pagination?.per_page || 9;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentArticleData = articles?.data?.slice(indexOfFirstPost, indexOfLastPost);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white  -mt-10 xl:-mt-14 rounded-lg">
        {isArticlesLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 p-4 1xl:px-12 pb-12 bg-white w-full 2xl:max-w-fit  rounded-[10px]">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <React.Fragment key={index}>
                  <InfoCardItemLoading />
                </React.Fragment>
              ))}
          </div>
        ) : articles.data && articles?.data!.length > 0 ? (
          <div className="flex justify-center items-center flex-col w-full 2xl:w-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 px-2 lg:px-4 py-4 1xl:px-12 pb-12 bg-white rounded-[10px] w-full">
              {currentArticleData?.map((article, index) => {
                const date = new Date(article.created_at);
                const normalDate = date.toLocaleDateString();

                return (
                  <React.Fragment key={index}>
                    <Link
                      href={`/info/article/${article.id_pemberitahuan}`}
                      className="flex justify-center"
                    >
                      <InfoCardItem
                        infoCardData={article}
                        normalDate={normalDate}
                      />
                    </Link>
                  </React.Fragment>
                );
              })}
            </div>
            {articles && articles?.pagination && (
              <div className="mt-4 mb-12">
                <Pagination
                  totalPosts={articles?.pagination.total}
                  postsPerPage={postsPerPage}
                  onPageChange={onPageChange}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[40vh] xl:mt-10 xl:mb-20 gap-[30px] w-[90%] text-center ">
            <Image
              src={"/assets/icon/404.svg"}
              alt="404"
              width={500}
              height={500}
              className="w-[12rem] lg:w-[18rem] xl:w-[24rem] "
            />
            <Paragraph className="!text-sm lg:!text-base xl:!text-lg">
              Tidak ditemukan data yang cocok.
            </Paragraph>
          </div>
        )}
      </div>
    </>
  );
};

export default ArticleCard;
