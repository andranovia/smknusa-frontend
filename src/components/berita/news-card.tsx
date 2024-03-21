import React from "react";
import Image from "next/image";

const newsData = [
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/berita_entrepeneur.svg",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
  },
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/berita_entrepeneur.svg",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
  },
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/berita_entrepeneur.svg",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
  },
  {
    card: "Hari Guru Nasional 2023: Bergerak Bersama, Rayakan...",
    cardImg: "/assets/berita_guru.svg",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
  },
  {
    card: "Raih Prestasi Kembali: Dua Siswa SMKN 1 Purwosari Juara...",
    cardImg: "/assets/berita_prestasi.svg",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
  },
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/berita_entrepeneur.svg",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
  },
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/berita_entrepeneur.svg",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
  },
  {
    card: "Hari Guru Nasional 2023: Bergerak Bersama, Rayakan...",
    cardImg: "/assets/berita_guru.svg",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
  },
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/berita_entrepeneur.svg",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
  },
];

const NewsCard = () => {
  return (
    <>
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 gap-8 px-12 pb-12">
        {newsData.map((news, index) => {
          return (
          <React.Fragment key={index}>
            <div className="bg-white rounded-lg w-[23rem] shadow-md overflow-hidden">
              <img
                className="w-full max-h-full object-cover"
                src={news.cardImg}
                alt={news.card}
              />
              <div className="p-4">
                <div className="text-md font-[500] text-[18px] mb-2">{news.card}</div>
                <div className="text-sm text-[#696969] flex justify-between items-center">
                  <span className=" flex text-[#696969] font-[500] text-[12px]">
                    <Image
                     className="mx-1"
                    src={"/assets/user.svg"}
                    alt="user"
                    width={15}
                    height={15}
                    />
                    {news.cardProfile}</span>
                  <div className="flex ml-auto font-[500] mr-4 text-[12px] text-[#696969] text-right">
                  <Image
                   className="mx-1"
                    src={"/assets/clock.svg"}
                    alt="user"
                    width={15}
                    height={15}
                    />
                    {news.cardDate}
                  </div>
                  <span className="font-[500]  text-[12px] text-[#696969] flex items-center">
                    <Image
                     className="mx-1"
                     src={"/assets/eye.svg"}
                     alt="views"
                     width={15}
                     height={15}
                    />
                    {news.cardView}</span>
                </div>
                
              </div>
            </div>
          </React.Fragment>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default NewsCard;
