"use client";

import Image from "next/image";
import React, { useState } from "react";
import DOMPurify from "dompurify";
import Link from "next/link";
import parse from "html-react-parser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { backendUrl } from "@/utils/backendUrl";
import { useArticles } from "@/services/api/useQueries/useArticles";
import InfoCardItem from "@/components/ui/info-card-item";
import ArticleShare from "@/components/info/article/article-share";
import FilterCard from "@/components/ui/filter-card";
import { useMetadata } from "@/utils/useMetadata";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { articleDetails, articles } = useArticles(id);
  const sanitizedHtml = articleDetails?.text ? DOMPurify.sanitize(articleDetails?.text, {
    FORBID_TAGS: ["img", "style", "b", "i", "strong", "em", "u", "font"],
    FORBID_ATTR: ["style"],
  }) : "";
  const parsedHTML = parse(articleDetails?.text ? articleDetails?.text : "");
  const [articleFilter, setArticleFilter] = useState({
    search: "",
    category: "",
    start_date: "",
    end_date: "",
  });
  
  const { categoriesArticles } = useArticles(undefined, 1, articleFilter);

  useMetadata(
    articleDetails?.nama || "Article Details",
    `Details about the article: ${
      articleDetails?.text || "Article description"
    }`
  );
  const date = new Date(articleDetails?.created_at || Date.now());
  const normalDate = articleDetails ? date.toLocaleDateString() : "";

  const filteredArticles = (articles?.data || []).filter((item) => item.id_pemberitahuan !== articleDetails?.id_pemberitahuan);
  const shuffledArticles = filteredArticles.sort(() => Math.random() - 0.5);

  const iframeSources = articleDetails?.iframe;

  return (
    <div className="pt-[4.5rem] xl:pt-24 px-2 xl:px-3 flex justify-center items-center w-full">
      <div className="w-full  bg-white rounded-[10px]  text-blue-base flex justify-center ">
        <div className="relative  bg-white rounded-[10px] flex flex-col items-center xl:gap-20 pt-4 lg:pt-10 pb-20 px-4 gap-0  max-w-full md:max-w-md-content lg:max-w-lg-content xl:max-w-full 2xl:max-w-max-content w-full">
          <div className="flex flex-col gap-0 xl:gap-6 w-full xl:w-[82%] ">
            <h1 className="font-[700] lg:text-4xl xl:text-[46px] xl:leading-[3rem] text-2xl">
              {articleDetails?.nama}
            </h1>
            <div className="flex xl:flex-row flex-col xl:my-0 my-6 gap-4 xl:gap-8 justify-between items-start w-full">
              <div className="flex flex-wrap items-center gap-2 xl:w-1/4 2xl:w-1/6">
                {articleDetails?.level === "0" ? (
                  <div className="bg-[#FFE7AF] px-2 py-1.5 lg:py-1 rounded-[10px]">
                    <p className="font-[500] text-[10px] text-gray text-center">
                      Penting
                    </p>
                  </div>
                ) : null}
                <div
                  style={{ backgroundColor: articleDetails?.category.color }}
                  className="px-2 py-1.5 lg:py-1 rounded-[10px]"
                >
                  <p className="font-[500] text-[10px] text-gray text-center">
                    {articleDetails?.category.nama}
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full xl:w-4/5 gap-8 !font-[500] !text-[18px]  ">
                <p className="relative !text-gray line-clamp-3 ">
                  {parse(sanitizedHtml)}
                </p>
                <hr className="w-full border " />
                <div className="w-full justify-between flex lg:flex-row flex-col lg:items-center gap-4">
                  <h4 className="text-[14px]">Diposting pada : {normalDate}</h4>
                  <div className="flex flex-row justify-between lg:justify-center xl:items-center my-4 gap-4 xl:gap-10 text-[12px]">
                    <div className="flex gap-1 items-center">
                      <Image
                        width={20}
                        height={20}
                        src={"/assets/icon/location-black.svg"}
                        alt="location"
                      />
                      <h4>SMKN 1 PURWOSARI</h4>
                    </div>
                    <div className="flex gap-1 items-center ml-auto lg:ml-0">
                      <Image
                        width={20}
                        height={20}
                        src={"/assets/icon/eye.svg"}
                        alt="view"
                      />
                      <h4>{articleDetails?.viewer}</h4>
                    </div>
                    <ArticleShare />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 w-full xl:w-[82%] ">
            {iframeSources && iframeSources.length > 0 ? (
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar]}
                  navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                  }}
                  pagination={{
                    el: '.my-custom-pagination',
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  className="w-full rounded-[10px] z-10 relative my-custom-swiper"
                >
                  <SwiperSlide>
                    <Image
                    src={backendUrl + articleDetails?.thumbnail}
                    alt="article-image"
                    className="w-full rounded-[10px]"
                    width={800}
                    height={800}
                    />
                  </SwiperSlide>
                  {iframeSources.map((source, index) => (
                    <SwiperSlide key={index}>
                      <iframe
                        src={source}
                        width={800}
                        height="100%"
                        className="w-full rounded-[10px]"
                        title={`Iframe ${index + 1}`}
                      ></iframe>
                    </SwiperSlide>
                  ))}
                  <div className="swiper-button-prev">
                  </div>
                  <div className="swiper-button-next">
                  </div>
                  <div className="my-custom-pagination absolute bottom-2 left-0 right-0 text-center z-20" />
                </Swiper>
            ) : (
              <Image
                src={backendUrl + articleDetails?.thumbnail}
                alt="article-image"
                className="w-full rounded-[10px]"
                width={800}
                height={800}
              />
            )}
            <div className="flex xl:flex-row flex-col justify-between items-start gap-10 xl:gap-20 w-full">
              <div className="w-full flex flex-col items-start gap-10 ">
                <div className="flex flex-col items-start gap-10 font-[500] text-[18px] text-blue-base w-full">
                  <span className="flex flex-col items-start gap-4">
                    {parsedHTML}
                  </span>

                  <span>Jurnalis: {articleDetails?.jurnal_by}</span>
                </div>
                <hr className="w-full border " />
                <div className="w-full rounded-[10px] p-4 flex justify-start items-center gap-4 bg-gray-base">
                  <div className="p-2 xs:p-4 bg-gray-medium rounded-[10px]">
                    <Image
                      src={backendUrl + articleDetails?.published_by.img}
                      alt="smknusa-icon"
                      width={50}
                      height={50}
                      className="w-14 h-14 rounded-[10px]"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="font-medium text-xs xs:text-sm text-gray">
                      DIPUBLIKASIKAN OLEH
                    </h3>
                    <h4 className="font-semibold text-[18px]">{articleDetails?.published_by.name}</h4>
                  </div>
                </div>
              </div>

              <FilterCard 
                url="article"
                categories={categoriesArticles}
                selectedCategory={articleFilter.category}
                onCategorySelect={(val) => 
                  setArticleFilter((prev) => ({ ...prev, category: val }))}
              />
            </div>
          </div>
          <div className=" flex gap-4 lg:gap-10 flex-col w-full xl:w-[82%]">
            <h2 className="mt-10 text-2xl lg:text-3xl xl:text-4xl 1xl:text-5xl font-semibold">
              Artikel Lain yang tak kalah menarik
            </h2>
            <div className="grid grid-cols-1 bg-[#F1F5F9] lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 px-2 py-2 md:py-6 md:px-6  2xl:px-12 2xl:py-9  rounded-[10px] w-full">
              {shuffledArticles.slice(0, 3).map((article, index) => {
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
          </div>
        </div>
      </div>
    </div>
  );
}
