import Image from "next/image";
import React from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { backendUrl } from "@/utils/backendUrl";
import { Article } from "@/services/api/useQueries/useArticles";
import InfoCardItem from "@/components/ui/info-card-item";
import ArticleShare from "@/components/article/article-share";


export const dynamic = 'force-static'
export const dynamicParams = false;

async function fetchArticles() {
  const response = await fetch(`${backendUrl}api/user/articles`, { cache: 'no-store' });
  const data: { data: Article[] } = await response.json();
  return data?.data;
}


export async function generateStaticParams() {
  const articlesData = await fetchArticles();
  const ids = articlesData?.map((articles: Article) => articles.id_pemberitahuan);

  return ids?.map((id: string) => ({ id: id.toString() }));
}

async function getArticleById(id: string) {
  if (!id) throw new Error("ID is required to fetch article");
  const response = await fetch(`${backendUrl}api/user/articles/${id}`, { cache: 'no-store' });

  const data = await response.json();
  return data?.data || null;
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const articlesData = await fetchArticles();
  let articleById;
  articleById = await getArticleById(id);

  if (articleById === 'Data tidak ditemukan' || !articleById) {
    redirect('/404');
  }

  // const parsedHtml = parse(articleById?.text);
  // const dom = new JSDOM(articleById?.text || '');
  // const document = dom.window.document;

  // const imgElements = document.querySelectorAll('img');
  // imgElements.forEach(img => img.remove());

  // const styleElements = document.querySelectorAll('style');
  // styleElements.forEach(style => style.remove());

  // const allElements = document.querySelectorAll('*');
  // allElements.forEach(element => element.removeAttribute('style'));

  // const sanitizedHtml = document.body.innerHTML;

  const date = new Date(articleById?.created_at || Date.now());
  const normalDate = date.toLocaleDateString();



  return (
    <div className="pt-[4.5rem] xl:pt-24 px-2 xl:px-3 flex justify-center items-center w-full">
      <div className="w-full  bg-white rounded-[10px]  text-blue-base flex justify-center ">
        <div className="relative  bg-white rounded-[10px] flex flex-col items-center xl:gap-20 pt-4 lg:pt-10 pb-20 px-4 gap-0  max-w-full md:max-w-md-content lg:max-w-lg-content xl:max-w-full 2xl:max-w-max-content w-full">
          <div className="flex flex-col gap-0 xl:gap-6 w-full xl:w-[82%] ">
            <h1 className="font-[700] lg:text-4xl xl:text-[46px] xl:leading-[3rem] text-2xl">
              {articleById?.nama}
            </h1>
            <div className="flex xl:flex-row flex-col xl:my-0 my-6 gap-4 xl:gap-8 justify-between items-start w-full">
              <div className="flex flex-wrap items-center gap-2 xl:w-1/4 2xl:w-1/6">
                {articleById?.level === "0" || articleById?.level === 0 ? (
                  <div className="bg-[#FFE7AF] px-2 py-1.5 lg:py-1 rounded-[10px]">
                    <p className="font-[500] text-[10px] text-gray text-center">
                      Penting
                    </p>
                  </div>
                ) : null}
                <div
                  style={{ backgroundColor: articleById?.category.color }}
                  className="px-2 py-1.5 lg:py-1 rounded-[10px]"
                >
                  <p className="font-[500] text-[10px] text-gray text-center">
                    {articleById?.category.nama}
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full xl:w-4/5 gap-8 !font-[500] !text-[18px]  ">
                <p  className="relative !text-gray line-clamp-3 ">
                {(articleById?.text)}
                </p>
                <hr className="w-full border " />
                <div className="w-full justify-between flex lg:flex-row flex-col lg:items-center gap-4">
                  <h4 className="text-[12px]">Diposting pada : {normalDate}</h4>
                  <div className="flex flex-row justify-between lg:justify-center xl:items-center grayscale my-4 gap-4 xl:gap-10 text-[10px]">
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
                      <h4>{articleById?.viewer}</h4>
                    </div>
                    <ArticleShare/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 w-full xl:w-[82%] ">
            <Image
              src={backendUrl + articleById?.thumbnail}
              alt="article-image"
              className="w-full rounded-[10px]"
              width={800}
              height={800}
            />
            <div className="flex xl:flex-row flex-col justify-between items-start gap-10 xl:gap-20 w-full">
              <div className="w-full flex flex-col items-start gap-10 ">
                <div className="flex flex-col items-start gap-10 font-[500] text-[18px] text-blue-base w-full">
                  <span className="flex flex-col items-start gap-4">
                  {(articleById?.text)}
                  </span>

                  <span>Jurnalis: -</span>
                </div>
                <hr className="w-full border " />
                <div className="w-full rounded-[10px] p-4 flex justify-start items-center gap-4 bg-gray-base">
                  <div className="p-2 xs:p-4 bg-gray-medium rounded-[10px]">
                    <Image
                      src={"/assets/icon/ethic-logo.png"}
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
                    <h4 className="font-semibold text-[18px]">Ethics</h4>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start w-full xl:max-w-[360.59px] relative  xl:sticky xl:top-1/4 z-10">
                <div className="flex gap-2 items-center w-full border-2 bg-white z-10 border-[#F5C451] py-3 px-4 xs:px-8 rounded-[10px]">
                  <Image
                    width={20}
                    height={20}
                    src={"/assets/icon/filter.svg"}
                    alt="share"
                  />
                  <h4 className="font-[500] text-base xs:text-[18px]">
                    Cari Artikel Berdasarkan
                  </h4>
                </div>
                <div className="grid grid-cols-2 w-full gap-4 py-6 -mt-2 px-4 xs:px-6 border rounded-b-[10px]">
                  <div className="flex flex-col gap-4 w-full col-span-2">
                    <label
                      htmlFor="title"
                      className="font-medium text-[13px] xl:text-lg text-blue-base"
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
                      className="font-medium  text-[13px] xs:text-sm xl:text-lg  text-blue-base"
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
                      className=" font-medium  text-[13px] xs:text-sm xl:text-lg  text-blue-base "
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
                      className=" font-medium  text-[13px] xs:text-sm xl:text-lg  text-blue-base "
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
          <div className=" flex gap-4 lg:gap-10 flex-col w-full xl:w-[82%]">
            <h2 className="mt-10 text-2xl lg:text-3xl xl:text-4xl 1xl:text-5xl font-semibold">
              Artikel Lain yang tak kalah menarik
            </h2>
            <div className="grid grid-cols-1 bg-[#F1F5F9] lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 px-2 py-2 md:py-6 md:px-6  2xl:px-12 2xl:py-9  rounded-[10px] w-full">
              {articlesData
                ?.slice(0, 3)
                .map((article, index) => {
                  const date = new Date(article.created_at);
                  const normalDate = date.toLocaleDateString();

                  return (
                    <React.Fragment key={index}>
                      <Link
                        href={`/article/${article.id_pemberitahuan}`}
                        className="flex justify-center"
                      >
                        <InfoCardItem infoCardData={article} normalDate={normalDate} />
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
