"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  const { articles, isArticlesLoading } = useArticles(undefined, articleFilter);
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
        ) : (
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
            {articles && articles?.length > 9 && (
              <div className="mt-4 mb-12">
                <Pagination
                  totalPosts={articles?.length}
                  postsPerPage={postsPerPage}
                  onPageChange={onPageChange}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ArticleCard;
