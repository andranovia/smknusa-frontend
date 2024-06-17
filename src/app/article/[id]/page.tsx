import { Article } from "@/services/api/useQueries/useArticles";
import { backendUrl } from "@/utils/backendUrl";
import Image from "next/image";
import React from "react";

const articleData = [
  {
    card: "Laravel: Aplikasi Perpustakaan dengan Laravel 7",
    cardImg: "/assets/article/article-laravel-application.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
  {
    card: "Javascript: Synchronous VS Asynchronous",
    cardImg: "/assets/article/article-javascript.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
  {
    card: "Laravel: Structure Directory & Migrations",
    cardImg: "/assets/article/article-laravel.png",
    cardProfile: "SMKoding",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [{ categoryName: "Programming", CategoryColor: "#FFE7AF" }],
  },
];



async function fetchArticles() {
  const response = await fetch(`${backendUrl}api/user/articles`);
  const data = await response.json();
  return data.data;
}

export async function generateStaticParams() {
  const newsData = await fetchArticles();

  const ids = newsData?.map((news: Article) => news.id_pemberitahuan);

  return ids?.map((id: string) => ({ id: id.toString() }));
}

async function getArticleById(id: string) {
  const response = await fetch(`${backendUrl}api/user/articles/${id}`);
  const data = await response.json();
  return data.data;
}


export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const articleById: Article = await getArticleById(id);

  const date = new Date(articleById?.created_at || Date.now());
  const normalDate = date.toLocaleDateString();

  return (
    <div className="w-full  lg:pt-24 px-2 lg:px-3 rounded-[10px] text-blue-base">
      <div className="relative  bg-white flex flex-col items-center lg:gap-20 pt-10 pb-20">
        <div className="flex flex-col gap-4 w-[80%] ">
          <h1 className="font-[700] lg:text-[46px] text-[24px] ">
            {articleById?.nama}
          </h1>
          <div className="flex lg:flex-row flex-col lg:my-0 my-8 lg:gap-0 gap-8 justify-between items-start w-full">
            <div className="grid grid-cols-2 items-center gap-2">
              <div className="bg-[#FFE7AF] px-2 py-1 rounded-[10px]">
                <p className="font-[500] text-[10px] text-gray">
                  {articleById?.category?.nama}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:w-4/5 gap-8 font-[500] text-[18px]  ">
              <p className=" text-gray">
                Framework Laravel adalah sebuah alat bantu untuk memudahkan kita
                agar bisa lebih mudah saat membuat website, Framework Laravel
                ini merupakan framework berbasis PHP ( maksutnya Pakek bahasa
                PHP) yang sedang populer dikalangan programmer PHP setelah CI
                (CodeIgniter), Rekomendasi banget deh buat kalian yang masih
                baru masuk ke dalam dunia web programming, buat belajar
                framework Laravel ini. [...]
              </p>
              <hr className="w-full border " />
              <div className="w-full justify-between flex lg:flex-row flex-col lg:items-center gap-4">
                <h4 className="text-[12px]">Diposting pada : {normalDate}</h4>
                <div className="flex flex-row  lg:justify-center lg:items-center grayscale my-4 gap-4 lg:gap-10 text-[10px]">
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
                    <h4>{articleById?.viewer}</h4>
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
        <div className="flex flex-col items-center gap-8 w-[90%] lg:w-[80%] ">
          <Image
            src={backendUrl + articleById?.thumbnail}
            alt="article-image"
            className="w-full rounded-[10px]"
            width={800}
            height={800}
          />
          <div className="flex lg:flex-row flex-col justify-between items-start gap-10 lg:gap-20 w-full">
            <div className="lg:w-full flex flex-col items-start gap-10 ">
              <p className="flex flex-col items-start gap-10 font-[500] text-[18px] text-blue-base w-full">
                <span>
                  Framework Laravel adalah sebuah alat bantu untuk memudahkan
                  kita agar bisa lebih mudah saat membuat website, Framework
                  Laravel ini merupakan framework berbasis PHP (maksutnya Pakek
                  bahasa PHP) yang sedang populer dikalangan programmer PHP
                  setelah CI (CodeIgniter), Rekomendasi banget deh buat kalian
                  yang masih baru masuk ke dalam dunia web programming, buat
                  belajar framework Laravel ini..
                </span>
                <span>
                  Pada seri kali ini kami membuat feed tentang Aplikasi
                  Perpustakaan menggunakan Laravel. Step by step pastinya. Dari
                  instalasi, Layouting, sampai nanti finishing. Jadi.. tetep
                  pantau terus. Walaupun lagi karantina tetep rebahan
                  secukupnya, ngoding selelahnya hehe ?
                </span>

                <span>Jurnalis: -</span>
              </p>
              <hr className="w-full border " />
              <div className="w-full rounded-[10px] p-4 flex justify-start items-center gap-4 bg-gray-base">
                <div className="p-4 bg-gray-medium rounded-[10px]">
                  <Image
                    src={"/assets/icon/ethic-logo.png"}
                    alt="smknusa-icon"
                    width={50}
                    height={50}
                    className="w-14 h-14 rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <h3 className="font-medium text-sm text-gray">
                    DIPUBLIKASIKAN OLEH
                  </h3>
                  <h4 className="font-semibold text-[18px]">Ethics</h4>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start lg:w-2/4 ">
              <div className="flex gap-2 items-center w-full border-2 bg-white z-10 border-[#F5C451] py-3 px-8 rounded-[10px]">
                <Image
                  width={20}
                  height={20}
                  src={"/assets/icon/filter.svg"}
                  alt="share"
                />
                <h4 className="font-[500] text-[18px]">
                  Cari Artikel Berdasarkan
                </h4>
              </div>
              <div className="grid grid-cols-2 w-full gap-4 py-6 -mt-2 px-6 border rounded-b-[10px]">
                <div className="flex flex-col gap-4 w-full col-span-2">
                  <label
                    htmlFor="title"
                    className="font-medium text-sm lg:text-[18px] text-blue-base"
                  >
                    Judul Artikel
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="border border-gray-300 rounded-lg p-2 focus:ring-[#F5C451] focus:border-[#F5C451] focus:outline-none focus:ring-1"
                  />
                </div>

                <div className="flex flex-col gap-4 w-full col-span-2">
                  <label
                    htmlFor="category"
                    className="font-medium text-sm lg:text-[18px]  text-blue-base"
                  >
                    Kategori Artikel
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
                    className=" font-medium text-sm lg:text-[18px]  text-blue-base "
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
                    className=" font-medium text-sm lg:text-[18px]  text-blue-base "
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
                  <button className=" font-medium text-sm lg:text-[18px] bg-yellow-light  py-2 rounded-[10px] ">
                    Cari
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-10 flex-col w-[90%] lg:w-[80%]">
          <h2 className="mt-10 text-3xl lg:text-5xl font-semibold">
            Artikel Lain yang tak kalah menarik
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-10 lg:mt-10 bg-white rounded-[10px]">
            {articleData.map((article, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="bg-white rounded-lg lg:w-[23rem] h-full shadow-md overflow-hidden relative">
                    <Image
                      className="w-full max-h-full object-cover"
                      src={article.cardImg}
                      alt={article.card}
                      width={800}
                      height={800}
                    />
                    <div className=" px-3 lg:p-4 flex flex-col items-start gap-4 w-full my-4 lg:my-0 ">
                      <div className="grid grid-cols-2 items-center gap-2 top-0 left-0 lg:absolute lg:p-2 z-20">
                        {article.cardCategory.map((category, index) => (
                          <div
                            key={index}
                            className={`bg-[${category.CategoryColor}] px-2 py-1 rounded-[10px]`}
                          >
                            <p className="font-[500] text-[8px] lg:text-[10px] text-gray">
                              {category.categoryName}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="lg:text-md text-xs font-[500]  lg:text-[18px] mb-2 lg:w-full w-[8.5rem]">
                        <h2> {article.card}</h2>
                      </div>
                      <div className="text-sm gap-2 text-gray flex flex-col lg:flex-row lg:justify-between lg:items-center w-full">
                        <Image
                          src={"/assets/icon/user-profile.svg"}
                          alt="user"
                          height={15}
                          width={15}
                          className="w-3 h-3 invert"
                        />
                        <span className=" flex text-gray font-[500] text-[12px] gap-2 items-center">
                          {article.cardProfile}
                        </span>
                        <div className="flex lg:ml-auto font-[500] mr-4 text-[12px] text-gray text-right gap-2 items-center">
                          <Image
                            src={"/assets/icon/clock.svg"}
                            alt="user"
                            width={15}
                            height={15}
                          />
                          {article.cardDate}
                        </div>
                        <span className="font-[500]  text-[12px] text-gray flex items-center gap-2">
                          <Image
                            src={"/assets/icon/eye.svg"}
                            alt="views"
                            width={15}
                            height={15}
                          />
                          {article.cardView}
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
  );
}


