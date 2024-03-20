import React from "react";

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
    <div className="flex justify-center items-center">
      <div className="grid grid-flow-col grid-cols-9 gap-5">
        {newsData.map((news, index) => {
          return (
          <React.Fragment key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-40 object-cover"
                src={news.cardImg}
                alt={news.card}
              />
              <div className="p-4">
                <div className="text-base font-bold mb-2">{news.card}</div>
                <div className="text-sm text-gray-500 flex items-center">
                  <span className="text-gray-600">{news.cardProfile}</span>
                  <div className="ml-auto text-gray-600 text-right">
                    {news.cardDate}
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600 flex items-center">
                  <span className="text-gray-600">Views: {news.cardView}</span>
                </div>
              </div>
            </div>
          </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default NewsCard;
