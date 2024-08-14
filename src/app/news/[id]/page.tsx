
import { News } from "@/services/api/useQueries/useNews";
import { backendUrl } from "@/utils/backendUrl";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import { JSDOM } from 'jsdom';
import { redirect } from "next/navigation";

const newsData = [
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/news/news-entrepeneur.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/news/news-entrepeneur.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/news/news-entrepeneur.webp",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
];

async function fetchNews() {
  const response = await fetch(`${backendUrl}api/user/news`);
  const data = await response.json();

  return data.data;
}

export async function generateStaticParams() {
  const newsData = await fetchNews();

  const ids = newsData?.map((news: News) => news.id_pemberitahuan);

  return ids?.map((id: string) => ({ id: id.toString() }));
}

async function getNewsById(id: string) {
  const response = await fetch(`${backendUrl}api/user/news/${id}`);
  const data = await response.json();
  return data.data;
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const newsById = await getNewsById(id);


  if (newsById === 'Data tidak ditemukan') {
    redirect('/404');
  }
  const date = new Date(newsById?.created_at || Date.now());
  const normalDate = date.toLocaleDateString();
  const parsedHtml = parse(newsById?.text);
  const dom = new JSDOM(newsById?.text || '');
  const document = dom.window.document;

  const imgElements = document.querySelectorAll('img');
  imgElements.forEach(img => img.remove());

  const styleElements = document.querySelectorAll('style');
  styleElements.forEach(style => style.remove());

  const allElements = document.querySelectorAll('*');
  allElements.forEach(element => element.removeAttribute('style'));

  const sanitizedHtml = document.body.innerHTML;


  return (
    <div className="pt-20 xl:pt-24 px-2 xl:px-3 flex justify-center items-center w-full">
      <div className="w-full  bg-white  rounded-[10px] text-blue-base flex justify-center">
        <div className="relative w-full flex flex-col justify-center items-center px-4 gap-10 xl:gap-20 pt-10 pb-20  max-w-full md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 2xl:max-w-max-content">
          <div className="flex flex-col  gap-4 w-full 2xl:w-[82%] ">
            <h1 className="font-[700] xl:text-[46px] leading-[3rem] text-2xl">
              {newsById?.nama}
            </h1>
            <div className="flex xl:flex-row flex-col xl:my-0 xl:gap-0 gap-8 justify-between items-start w-full">
              <div className="grid grid-cols-2 items-center gap-2">
                <div className="bg-[#FFE7AF] px-2  py-2 lg:py-1 rounded-[10px]">
                  <p className="font-[500] text-md xl:text-[10px] text-gray">
                    {newsById?.category.nama}
                  </p>
                </div>
              </div>
              <div className="flex flex-col xl:w-4/5 gap-8 font-medium text-[18px]  ">
              <p dangerouslySetInnerHTML={{ __html: sanitizedHtml }} className="relative !text-gray line-clamp-3 after:content-['[...]'] after:absolute after:bottom-0 after:right-0 after:bg-white after:px-1">
                  
                  </p>

                <hr className="w-full border " />
                <div className="w-full justify-between flex xl:flex-row flex-col xl:items-center gap-4">
                  <h4 className="text-[12px]">Diposting pada : {normalDate}</h4>
                  <div className="flex flex-row  xl:justify-center xl:items-center grayscale my-4 gap-4 xl:gap-10 text-[10px]">
                    <div className="flex gap-1 items-center">
                      <Image
                        width={20}
                        height={20}
                        src={"/assets/icon/location-black.svg"}
                        alt="location"
                      />
                      <h4>SMKN 1 PURWOSARI</h4>
                    </div>
                    <div className="flex gap-1 items-center">
                      <Image
                        width={20}
                        height={20}
                        src={"/assets/icon/eye.svg"}
                        alt="view"
                      />
                      <h4>{newsById?.viewer}</h4>
                    </div>
                    <div className="flex gap-1 items-center">
                      <Image
                        width={20}
                        height={20}
                        src={"/assets/icon/share.svg"}
                        alt="share"
                      />
                      <h4>Bagikan</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 w-full 2xl:w-[82%] ">
            <Image
              src={backendUrl + newsById?.thumbnail}
              alt={"news-image"}
              className="w-full rounded-[10px]"
              width={800}
              height={800}
            />
            <div className="flex 2xl:flex-row flex-col justify-between items-start gap-10 xl:gap-20 w-full">
              <div className="xl:w-full flex flex-col items-start gap-10 ">
                <div className="flex flex-col items-start gap-10 font-[500] text-[18px] text-blue-base w-full">
                  <span className="flex flex-col items-start gap-4">{parsedHtml}</span>

                  <span>Jurnalis: -</span>
                </div>
                <hr className="w-full border " />
                <div className="w-full rounded-[10px] p-4 flex justify-start items-center gap-4 bg-gray-base">
                  <div className="p-4 bg-gray-medium rounded-[10px]">
                    <Image
                      src={"/assets/icon/logo-skansa.svg"}
                      alt="smknusa-icon"
                      width={50}
                      height={50}
                      className="w-14 h-14 "
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="font-medium text-sm text-gray">
                      DIPUBLIKASIKAN OLEH
                    </h3>
                    <h4 className="font-semibold text-[18px]">Humas</h4>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start w-full 2xl:w-2/4 ">
                <div className="flex gap-2 items-center w-full border-2 bg-white z-10 border-[#F5C451] py-3 px-8 rounded-[10px]">
                  <Image
                    width={20}
                    height={20}
                    src={"/assets/icon/filter.svg"}
                    alt="share"
                  />
                  <h4 className="font-[500] text-[18px]">
                    Cari Berita Berdasarkan
                  </h4>
                </div>
                <div className="grid grid-cols-2 w-full gap-4 py-6 -mt-2 px-6 border rounded-b-[10px]">
                  <div className="flex flex-col gap-4 w-full 2xl:col-span-2">
                    <label
                      htmlFor="title"
                      className="font-medium text-sm xl:text-lg text-blue-base"
                    >
                      Judul Berita
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="border border-gray-300 rounded-lg p-2 focus:ring-[#F5C451] focus:border-[#F5C451] focus:outline-none focus:ring-1"
                    />
                  </div>

                  <div className="flex flex-col gap-4 w-full 2xl:col-span-2">
                    <label
                      htmlFor="category"
                      className="font-medium text-sm xl:text-lg  text-blue-base"
                    >
                      Kategori Berita
                    </label>
                    <input
                      type="text"
                      id="category"
                      name="category"
                      className="border border-gray-300 rounded-lg p-2 focus:ring-[#F5C451] focus:border-[#F5C451] focus:outline-none focus:ring-1"
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-full col-span-1">
                    <label
                      htmlFor="from"
                      className=" font-medium text-sm xl:text-lg  text-blue-base "
                    >
                      Dari tanggal
                    </label>
                    <input
                      type="text"
                      id="from"
                      name="from"
                      className="border border-gray-300 rounded-lg p-2 focus:ring-[#F5C451] focus:border-[#F5C451] focus:outline-none focus:ring-1"
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-full col-span-1">
                    <label
                      htmlFor="to-date"
                      className=" font-medium text-sm xl:text-lg  text-blue-base "
                    >
                      Sampai tanggal
                    </label>
                    <input
                      type="text"
                      id="to-date"
                      name="to-date"
                      className="border border-gray-300 rounded-lg p-2 focus:ring-[#F5C451] focus:border-[#F5C451] focus:outline-none focus:ring-1"
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-full col-span-2 mt-2">
                    <button className=" font-medium text-sm xl:text-lg bg-yellow-light  py-2 rounded-[10px] ">
                      Cari
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex gap-10 flex-col w-full 2xl:w-[82%]">
            <h2 className="mt-10 text-3xl xl:text-5xl font-semibold">
              Berita Lain yang tak kalah menarik
            </h2>
            <div className="grid grid-cols-2 2xl:grid-cols-3 items-center gap-10 xl:mt-10 bg-white rounded-[10px]">
              {newsData.map((news, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="bg-white rounded-lg xl:w-[23rem] h-full shadow-md overflow-hidden relative">
                      <Image
                        className="w-full max-h-full object-cover"
                        src={"/assets/news/news-entrepeneur.webp"}
                        alt={news.card}
                        width={800}
                        height={800}
                      />
                      <div className=" px-3 xl:p-4 flex flex-col items-start gap-4 w-full my-4 xl:my-0 ">
                        <div className="grid grid-cols-2 items-center gap-2 top-0 left-0 xl:absolute xl:p-2 z-20">
                          {news.cardCategory.map((category, index) => (
                            <div
                              key={index}
                              className={`bg-[${category.CategoryColor}] px-2 py-1 rounded-[10px]`}
                            >
                              <p className="font-[500] text-[8px] xl:text-[10px] text-gray">
                                {category.categoryName}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="xl:text-md text-xs font-[500]  xl:text-lg mb-2 xl:w-full w-[8.5rem]">
                          <h2> {news.card}</h2>
                        </div>
                        <div className="text-sm gap-2 text-gray flex flex-col xl:flex-row xl:justify-between xl:items-center w-full">
                          <span className=" flex text-gray font-[500] text-[12px] gap-2 items-center">
                            <Image
                              src={"/assets/icon/user.svg"}
                              alt="user"
                              width={15}
                              height={15}
                            />
                            {news.cardProfile}
                          </span>
                          <div className="flex xl:ml-auto font-[500] mr-4 text-[12px] text-gray text-right gap-2 items-center">
                            <Image
                              src={"/assets/icon/clock.svg"}
                              alt="user"
                              width={15}
                              height={15}
                            />
                            {news.cardDate}
                          </div>
                          <span className="font-[500]  text-[12px] text-gray flex items-center gap-2">
                            <Image
                              src={"/assets/icon/eye.svg"}
                              alt="views"
                              width={15}
                              height={15}
                            />
                            {news.cardView}
                          </span>
                        </div>
                      </div>
                    </div>
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
