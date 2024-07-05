"use client";

import React, { useState } from "react";
import Link from "next/link";
import Pagination from "../feature/pagination";
import { useArticles } from "@/services/api/useQueries/useArticles";
import ArticleCardItem from "./article-card-item";
import Image from "next/image";
import ArticleCardItemLoading from "../../ui/card-item-loading";
import CardItemLoading from "../../ui/card-item-loading";

const ArticleCard = () => {
  const { articles, isArticlesLoading } = useArticles();
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
      <div className="flex flex-col justify-center items-center bg-gray-base lg:bg-white px-2 lg:-mt-10 lg:my-20 ">
        {isArticlesLoading ? (
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
              {currentArticleData?.map((article, index) => {
                const date = new Date(article.created_at);
                const normalDate = date.toLocaleDateString();
                return (
                  <React.Fragment key={index}>
                    <Link href={`/article/${article.id_pemberitahuan}`}>
                      <ArticleCardItem
                        article={article}
                        normalDate={normalDate}
                      />
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
        )}
      </div>
    </>
  );
};

export default ArticleCard;
