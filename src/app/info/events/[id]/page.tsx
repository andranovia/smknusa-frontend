import Image from "next/image";
import React from "react";
import { backendUrl } from "@/utils/backendUrl";
import ArticleShare from "@/components/info/article/article-share";
import DetailLayout from "@/layouts/detail-layout";
import { Event } from "@/services/api/useQueries/useEvents";

async function fetchEvents() {
  const response = await fetch(`${backendUrl}api/user/events`, {
    cache: "no-store",
  });
  const data: { data: Event[] } = await response.json();
  return data?.data;
}

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const EventData = await fetchEvents();
  const ids = EventData?.map((Event: Event) => Event.id_pemberitahuan);
  return ids?.map((id: string) => ({ id: id.toString() }));
}

async function getEventById(id: string) {
  if (!id) throw new Error("ID is required to fetch Events");
  const response = await fetch(`${backendUrl}api/user/events/${id}`, {
    cache: "no-store",
  });

  const data = await response.json();
  return data?.data || null;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const Event: Event = await getEventById(params?.id);
  return {
    title: Event.nama + " | " + Event.id_pemberitahuan,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  //   const VacancyData = await fetchVacancy();
  const eventById: Event = await getEventById(id);
  const date = new Date(eventById?.created_at || Date.now());
  const normalDate = date.toLocaleDateString();

  return (
    <DetailLayout detailData={eventById} className="w-full">
      <div className="relative  bg-white rounded-[10px] flex flex-col items-center xl:gap-20 pt-4 lg:pt-10 pb-20 px-4 gap-0   w-full">
        <div className="flex flex-col gap-0 xl:gap-6 w-full">
          <h1 className="font-[700] lg:text-4xl xl:text-[42px] xl:leading-[3rem] text-2xl">
            {eventById?.nama}
          </h1>
          <div className="flex xl:flex-row flex-col xl:my-0 my-6 gap-4 xl:gap-8 justify-between items-start w-full">
            <div className="flex flex-wrap items-center gap-2 xl:w-1/4 2xl:w-1/6">
              {eventById?.level === "0" ? (
                <div className="bg-[#FFE7AF] px-2 py-1.5 lg:py-1 rounded-[10px]">
                  <p className="font-[500] text-[10px] text-gray text-center">
                    Penting
                  </p>
                </div>
              ) : null}
              <div
                style={{
                  backgroundColor: eventById?.category.color,
                }}
                className="px-2 py-1.5 lg:py-1 rounded-[10px]"
              >
                <p className="font-[500] text-[10px] text-gray text-center">
                  {eventById?.category.nama}
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full xl:w-4/5 gap-8 !font-[500] !text-[18px]  ">
              <p className="relative !text-gray line-clamp-3 ">
                {eventById?.text}
              </p>
              <hr className="w-full border " />
              <div className="w-full justify-between flex lg:flex-row flex-col lg:items-center gap-4">
                <h4 className="text-[14px]">Diposting pada : {normalDate}</h4>
                <div className="flex flex-row justify-between lg:justify-center xl:items-center grayscale my-4 gap-4 xl:gap-10 text-[12px]">
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
                    <h4>{eventById?.viewer}</h4>
                  </div>
                  <ArticleShare />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 w-full">
          <Image
            src={backendUrl + eventById?.thumbnail}
            alt="article-image"
            className="w-full rounded-[10px]"
            width={800}
            height={800}
          />
        </div>
        {/* <div className=" flex gap-4 lg:gap-10 flex-col w-full xl:w-[82%]">
            <h2 className="mt-10 text-2xl lg:text-3xl xl:text-4xl 1xl:text-5xl font-semibold">
              Artikel Lain yang tak kalah menarik
            </h2>
            <div className="grid grid-cols-1 bg-[#F1F5F9] lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 px-2 py-2 md:py-6 md:px-6  2xl:px-12 2xl:py-9  rounded-[10px] w-full">
              {articlesData?.slice(0, 3).map((article, index) => {
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
          </div> */}
      </div>
    </DetailLayout>
  );
}
