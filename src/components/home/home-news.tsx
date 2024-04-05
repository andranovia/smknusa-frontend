import Image from "next/image";
import React, { useState } from "react";

interface NewsItem {
  title: string;
  content: string;
  image: string;
}

const newsData: NewsItem[] = [
  {
    title: "Berita",
    content:
      'Pengoptimalan Gerakan Literasi Sekolah dengan Program "Pustaka Keliling" di SMK Negeri 1 Purwosari',
    image: "/assets/berita/berita_entrepeneur.svg",
  },
  {
    title: "Berita",
    content:
      "SMKN 1 Purwosari Merebut Juara 1 dan 3 Lomba Karya Tulis Ilmiah (KTI) Inovasi Teknologi",
    image: "/assets/samplemurid.png",
  },
  {
    title: "Berita",
    content:
      "SMKN 1 Purwosari Mendapatkan Penghargaan Bintang 5 Apresiasi SMK BISA 2023",
    image: "/assets/berita/berita_guru.svg",
  },
];

const HomeNews = () => {
  const [activeNewsIndex, setActiveNewsIndex] = useState<number | null>(1);
  const [selectedNewsImage, setSelectedNewsImage] = useState<string | null>("");

  const handleNewsClick = (index: number, newsImage: string) => {
    setActiveNewsIndex(index);
    setSelectedNewsImage(newsImage);
  };
  return (
    <>
      <div className="w-full h-[62rem] bg-white rounded-[10px]">
        <div className="flex flex-col items-center justify-center bg-primary  rounded-md text-white pt-10 pb-48">
          <h1 className="font-[700] text-[36px]">
            Papan Pengumuman Informasi <br />
            <span className="block text-center">SMK Negeri 1 Purwosari</span>
          </h1>

          <p className="font-[500] text-[18px] mt-[12px]">
            Papan Pengumuman ini berisi segala informasi mengenai pembaruan
            agenda, berita, artikel atau yang lainnya
          </p>

          <hr className="bg-white w-[95%] mt-[58px]" />

          <div className="flex justify-between items-start w-full left-8 mt-12 px-10">
            <div className=" flex justify-between items-center px-4 gap-8 ">
              <h1 className="font-[600] text-[16px] text-[#9DA5B1]">
                Pengumuman
              </h1>
              <h1 className="font-[600] text-[16px] text-[#9DA5B1]">Agenda</h1>
              <h1
                className="font-[600] text-[16px] p-1 rounded-md relative transition-all w-min-content
                        before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-[#F5C451] before:transition-all before:duration-500
                        before:w-full hover:before:left-0 hover:before:bg-primary cursor-pointer"
              >
                Berita
              </h1>
              <h1 className="font-[600] text-[16px] text-[#9DA5B1]">Artikel</h1>
            </div>

            <div className="flex justify-center items-center ">
              <div className="btn bg-[#F5C451] hover:bg-[#F5C451] text-[#081B34] font-[500] py-2.5 px-5 rounded">
                <button>Selengkapnya </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative  px-8  -top-36  w-full">
          <div className="flex justify-start items-end relative w-full h-[32rem] bg-[#F2F3F4] rounded-[10px] ">
            <div className="flex flex-row justify-between items-center w-full h-full p-8">
              <div className="flex justify-start items-center gap-8 h-full">
                <div className="bg-[#F5C451] p-1 rounded-md h-1/4 absolute top-0 mt-8"></div>
                <div className="bg-gray-200  p-1 rounded-md h-full"></div>
                <div className="flex flex-col items-start gap-8">
                  {newsData.map((news, index) => (
                    <React.Fragment key={index}>
                      <div className="flex flex-col items-start gap-2 w-2/3">
                        <h2 className="font-[600]  text-[18px]">
                          {news.title}
                        </h2>
                        <p className="font-[500] text-[16px]">{news.content}</p>
                        <div className="flex justify-start items-center gap-2">
                          <h3 className="font-[500] text-[16px]">
                            Lihat Selengkapnya
                          </h3>
                          <Image
                            src={"assets/icon/line-arrow-right.svg"}
                            alt="arrow-right"
                            width={40}
                            height={40}
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <Image
                src={"/assets/announcement/announcment-1.png"}
                alt="announcement-1"
                width={400}
                height={400}
                className="w-1/2 h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNews;
