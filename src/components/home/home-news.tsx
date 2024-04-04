import React, { useState, useEffect } from "react";
import Image from "next/image";

const HomeNews: React.FC = () => {
  const [activeNewsIndex, setActiveNewsIndex] = useState<string | null>(null);
  const [selectedNewsImage, setSelectedNewsImage] = useState<string | null>(
    null
  );

  interface NewsItem {
    title: string;
    content: string;
    image: string;
  }

  const newsItems: NewsItem[] = [
    {
      title: "Berita",
      content:'Pengoptimalan Gerakan Literasi Sekolah dengan Program "Pustaka Keliling" di SMK Negeri 1 Purwosari',
      image: "/assets/berita/berita_entrepeneur.svg",
    },
    {
      title: "Berita",
      content:"SMKN 1 Purwosari Merebut Juara 1 dan 3 Lomba Karya Tulis Ilmiah (KTI) Inovasi Teknologi",
      image: "/assets/samplemurid.png",
    },
    {
      title: "Berita",
      content:
        "SMKN 1 Purwosari Mendapatkan Penghargaan Bintang 5 Apresiasi SMK BISA 2023",
      image: "/assets/berita/berita_guru.svg",
    },
  ];

  useEffect(() => {
    if (newsItems.length > 0) {
      setSelectedNewsImage(newsItems[1].image);
      setActiveNewsIndex("1");
    }
  }, []);

  const handleNewsClick = (index: number, newsImage: string) => {
    setActiveNewsIndex(index.toString());
    setSelectedNewsImage(newsImage);
  };

  return (
    <>
      <div className="w-full h-[62rem] bg-white rounded-[10px] mt-3">
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

        <div className="relative px-8 -top-36">
          <div className="flex items-center justify-between p-8 bg-[#F2F3F4] rounded-lg">
            <div className="px-3 ml-3">
              {newsItems.map((item, index) => (
                <div
                  key={index}
                  className={`py-5 ${
                    activeNewsIndex === index.toString()
                      ? "text-[#0D1C2E]"
                      : "text-[#081B3480]"
                  } hover:text-[#0D1C2E] cursor-pointer`}
                  onClick={() => handleNewsClick(index, item.image)}
                >
                  <h2 className="text-lg mb-2 font-[600] text-[18px] ">
                    {item.title}
                  </h2>
                  <p className="font-[500] text-[16px]">{item.content}</p>
                  <div className="flex items-center mt-3">
                  <button>Lihat Selengkapnya</button>
                    <Image
                      src="/assets/icon/linearrow-right.svg"
                      alt="Arrow Right"
                      width={16}
                      height={16}
                      className="mt-[2px] ml-1"
                    />
                  </div>
                </div>
              ))}

              {/* 
              <div className="py-5">
                <h2 className="text-lg mb-2 font-[600] text-[18px] text-[#081B3480]">Berita</h2>
                <p className="font-[500] text-[16px] text-[#081B3480]">
                  Pengoptimalan Gerakan Literasi Sekolah dengan Program <br />
                  "Pustaka Keliling" di SMK Negeri 1 Purwosari
                </p>
                <h3 className="flex mt-3 font-[500] text-[16px] text-[#081B3480]">
                  Lihat Selengkapnya
                  <Image
                    alt="arrow-right"
                    src={"/assets/icon/linearrow-right.svg"}
                    className="ml-1 mt-1"
                    width={15}
                    height={15}
                  />
                </h3>
              </div>

              <div className="py-5">
                <h2 className="text-lg mb-2 text-[#0D1C2E] font-bold">Berita</h2>
                <p className="font-[500] text-[16px] text-[#0D1C2E]">
                  SMKN 1 Purwosari Merebut Juara 1 dan 3 Lomba Karya Tulis
                  Ilmiah <br />
                  (KTI) Inovasi Teknologi
                </p>
                <h3 className="flex mt-3 font-[500] text-[16px] text-[#0D1C2E]">
                  Lihat Selengkapnya
                  <Image
                    alt="arrow-right"
                    src={"/assets/icon/linearrow-right.svg"}
                    className="ml-1 mt-1"
                    width={15}
                    height={15}
                  />
                </h3>
              </div>

              <div className="py-5"> 
                <h2 className="text-lg mb-2 text-[#081B3480]">Berita</h2>
                <p className="font-[500] text-[16px] text-[#081B3480]">
                  SMKN 1 Purwosari Mendapatkan Penghargaan Bintang 5 <br />
                  Apresiasi SMK BISA 2023
                </p>
                <h3 className="flex mt-3 font-[500] text-[16px] text-[#081B3480]" >
                  Lihat Selengkapnya
                  <Image
                    alt="arrow-right"
                    src={"/assets/icon/linearrow-right.svg"}
                    className="ml-1 mt-1"
                    width={15}
                    height={15}
                  />
                </h3>
              </div>*/}
            </div>
            <div className="w-80% h-auto ml-6">
              {selectedNewsImage && (
                <Image
                  src={selectedNewsImage}
                  alt="Selected News Image"
                  width={850}
                  height={850}
                  className="w-80% h-auto"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNews;
