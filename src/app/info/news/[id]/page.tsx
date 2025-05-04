"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { backendUrl } from "@/utils/backendUrl";
import { useNews } from "@/services/api/useQueries/useNews";
import InfoCardItem from "@/components/ui/info-card-item";
import NewsShare from "@/components/info/news/news-share";
import FilterCard from "@/components/ui/filter-card";
import { useMetadata } from "@/utils/useMetadata";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { news, newsDetails } = useNews(id);
  const sanitizedHtml = newsDetails?.text ? DOMPurify.sanitize(newsDetails?.text, {
    FORBID_TAGS: ["img", "style", "b", "i", "strong", "em", "u", "font"],
    FORBID_ATTR: ["style"],
  }) : "";

  const parsedHtml = parse(newsDetails?.text ? newsDetails?.text : "");
  const [newsFilter, setNewsFilter] = useState({
      search: "",
      category: "",
      start_date: "",
      end_date: "",
    });
    
  const { categoriesNews } = useNews(undefined, 1, newsFilter);

  useMetadata(
    newsDetails?.nama || "News details",
    `Details about the job: ${newsDetails?.text || "News description"}`
  );

  const date = new Date(newsDetails?.created_at || Date.now());
  const normalDate = newsDetails ? date.toLocaleDateString() : "";

  const filteredNews = (news?.data || []).filter((item) => item.id_pemberitahuan !== newsDetails?.id_pemberitahuan);
  const shuffledNews = filteredNews.sort(() => Math.random() - 0.5);

  return (
    <div className="pt-[4.5rem] xl:pt-24 px-2 xl:px-3 flex justify-center items-center w-full overflow-hidden">
      <div className="w-full  bg-white rounded-[10px]  text-blue-base flex justify-center ">
        <div className="relative  bg-white rounded-[10px] flex flex-col items-center xl:gap-20 pt-4 lg:pt-10 pb-20 px-4 gap-0  max-w-full md:max-w-md-content lg:max-w-lg-content xl:max-w-full 2xl:max-w-max-content w-full">
          <div className="flex flex-col gap-0 xl:gap-6 w-full xl:w-[82%] ">
            <h1 className="font-[700] lg:text-4xl xl:text-[46px] xl:leading-[3rem] text-2xl">
              {newsDetails?.nama}
            </h1>
            <div className="flex xl:flex-row flex-col xl:my-0 my-6 gap-4 xl:gap-8 justify-between items-start w-full">
              <div className="flex flex-wrap items-center gap-2 xl:w-1/4 2xl:w-1/6">
                {newsDetails?.level === 0 ? (
                  <div className="bg-[#FFE7AF] px-2 py-1.5 lg:py-1 rounded-[10px]">
                    <p className="font-[500] text-[10px] text-gray text-center">
                      Penting
                    </p>
                  </div>
                ) : null}
                <div
                  style={{ backgroundColor: newsDetails?.category.color }}
                  className="px-2 py-1.5 lg:py-1 rounded-[10px]"
                >
                  <p className="font-[500] text-[10px] text-gray text-center">
                    {newsDetails?.category.nama}
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
                      <h4>{newsDetails?.location}</h4>
                    </div>
                    <div className="flex gap-1 items-center ml-auto lg:ml-0">
                      <Image
                        width={20}
                        height={20}
                        src={"/assets/icon/eye.svg"}
                        alt="view"
                      />
                      <h4>{newsDetails?.viewer}</h4>
                    </div>
                    <NewsShare />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 w-full xl:w-[82%] ">
            <div className="w-full max-h-[17rem] md:max-h-[20rem]  rounded-[10px] lg:max-h-[30rem] xl:max-h-[40rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#F5C451] scrollbar-track-yellow-100">
              <Image
                src={backendUrl + newsDetails?.thumbnail}
                alt={`${newsDetails?.nama}`}
                className="w-full object-cover"
                width={800}
                height={800}
              />
            </div>

            <div className="flex xl:flex-row flex-col justify-between items-start gap-10 xl:gap-20 w-full">
              <div className="w-full flex flex-col items-start gap-10 ">
                <div className="flex flex-col items-start gap-10 font-[500] text-[18px] text-blue-base w-full">
                  <span className="flex flex-col items-start gap-4">
                    {parsedHtml}
                  </span>

                  <span>Jurnalis: {newsDetails?.jurnal_by}</span>
                </div>
                <hr className="w-full border " />
                <div className="w-full rounded-[10px] p-4 flex justify-start items-center gap-4 bg-gray-base">
                  <div className="p-2 xs:p-4 bg-gray-medium rounded-[10px]">
                    <Image
                      src={backendUrl + newsDetails?.published_by.img}
                      alt="smknusa-icon"
                      width={50}
                      height={50}
                      className="w-14 h-14 "
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="font-medium text-xs xs:text-sm text-gray">
                      DIPUBLIKASIKAN OLEH
                    </h3>
                    <h4 className="font-semibold text-[18px]">{newsDetails?.published_by.name}</h4>
                  </div>
                </div>
              </div>

              <FilterCard 
                url="news" 
                categories={categoriesNews}
                selectedCategory={newsFilter.category}
                onCategorySelect={(val) => 
                  setNewsFilter((prev) => ({ ...prev, category: val }))}  
              />
            </div>
          </div>
          <div className=" flex gap-4 lg:gap-10 flex-col w-full xl:w-[82%]">
            <h2 className="mt-10 text-2xl lg:text-3xl xl:text-4xl 1xl:text-5xl font-semibold">
              Berita Lain yang tak kalah menarik
            </h2>
            <div className="grid grid-cols-1 bg-[#F1F5F9] lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 px-2 py-2 md:py-6 md:px-6  2xl:px-12 2xl:py-9  rounded-[10px] w-full">
              {shuffledNews.slice(0, 3).map((news, index) => {
                const date = new Date(news.created_at);
                const normalDate = date.toLocaleDateString();

                return (
                  <React.Fragment key={index}>
                    <Link
                      href={`/info/news/${news.id_pemberitahuan}`}
                      className="flex justify-center"
                    >
                      <InfoCardItem
                        infoCardData={news}
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
