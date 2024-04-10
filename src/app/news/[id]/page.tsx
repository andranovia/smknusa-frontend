import Image from "next/image";
import React from "react";

const newsData = [
  {
    card: "Pembelajaran Entrepeneur Dari PT.Indobismar",
    cardImg: "/assets/berita/berita_entrepeneur.svg",
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
    cardImg: "/assets/berita/berita_entrepeneur.svg",
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
    cardImg: "/assets/berita/berita_entrepeneur.svg",
    cardProfile: "Humas",
    cardDate: "17/03/2024",
    cardView: "99999",
    cardCategory: [
      { categoryName: "Penting", CategoryColor: "#FFE7AF" },
      { categoryName: "Informasi", CategoryColor: "#CDFFAF" },
    ],
  },
];

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="w-full lg:pt-24 px-3 rounded-[10px] text-[#081B34]">
      <div className="relative  bg-white flex flex-col items-center gap-20 pt-10 pb-20">
        <div className="flex flex-col lg:items-center gap-4 w-[80%] ">
          <h1 className="font-[700] lg:text-[46px] text-[24px] ">
            Pembelajaran Entrepreneur dari PT. Indobismar
          </h1>
          <div className="flex justify-between items-start w-full">
            <div className="grid grid-cols-2 items-center gap-2">
              <div className="bg-[#FFE7AF] px-2 py-1 rounded-[10px]">
                <p className="font-[500] text-[10px] text-[#696969]">Penting</p>
              </div>
              <div className="bg-[#CDFFAF] px-2 py-1 rounded-[10px]">
                <p className="font-[500] text-[10px] text-[#696969]">
                  Informasi
                </p>
              </div>
            </div>
            <div className="flex flex-col w-4/5 gap-8 font-[500] text-[18px]  ">
              <p className=" text-[#696969]">
                PT. INDO BISMAR merupakan Perusahaan swasta yang bergerak dalam
                bidang telekomunikasi, yang menyediakan Handphone, Laptop, PC,
                dll., selain itu juga mempunya divisi lain seperti, Rental
                Mobil, percetakan, Restoran dan tempat rekreasi. Hadir dalam
                kegiatan ini, Bpk. DR. Siswanto, S.Sos, MM selaku CEO PT. INDO
                BISMAR. Beliau yang juga merupakan alumni SMK, tepatnya dari
                SMKN 1 Glagah, [...]
              </p>
              <hr className="w-full border " />
              <div className="w-full justify-between flex ">
                <h4 className="text-[12px]">Diposting pada : 17 Maret 2024</h4>
                <div className="flex justify-center items-center grayscale gap-10 text-[12px]">
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
                    <h4>99999</h4>
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
        <div className="flex flex-col items-center gap-8 w-[80%] ">
          <Image
            src={"/assets/berita/view/news-view.png"}
            alt=""
            className="w-full rounded-[10px]"
            width={800}
            height={800}
          />
          <div className="flex justify-between items-start gap-10 w-full">
            <div className="w-full flex flex-col items-start gap-10 w-3/5">
              <p className="flex flex-col items-start gap-10 font-[500] text-[18px] text-[#081B34] w-full">
                <span>
                  Pada hari Rabu tanggal 25 Januari 2023, siswa kelas XII SMKN 1
                  Purwosari mendapatkan kesempatan untuk mengikuti pembelajaran
                  entrepreneur dari PT. INDO BISMAR.
                </span>
                <span>
                  PT. INDO BISMAR merupakan Perusahaan swasta yang bergerak
                  dalam bidang telekomunikasi, yang menyediakan Handphone,
                  Laptop, PC, dll., selain itu juga mempunya divisi lain
                  seperti, Rental Mobil, percetakan, Restoran dan tempat
                  rekreasi. Hadir dalam kegiatan ini, Bpk. DR. Siswanto, S.Sos,
                  MM selaku CEO PT. INDO BISMAR. Beliau yang juga merupakan
                  alumni SMK, tepatnya dari SMKN 1 Glagah, dengan sangat
                  bersemangat memberikan motivasi kepada siswa SMKN 1 Purwosari
                  untuk menjadi wirausahawan tangguh, pantang menyerah dan
                  sukses luar biasa.
                </span>
                <span>
                  Dalam kesempatan ini, juga dilaksanakan penandatanganan MoU
                  antara SMKN 1 Purwosari dengan PT. INDO BISMAR.
                </span>
                <span>
                  Bpk. Rudi Trisantoso, S.Pd, M.Pd selaku Kepala SMKN 1
                  Purwosari dalam sambutannya menyampaikan ucapan terima kasih
                  kepada PT. INDO BISMAR untuk pembelajaran entrepreneur yang
                  telah diberikan kepada siswa SMKN 1 Purwosari serta berharap
                  agar kerja sama yang telah terjalin semakin erat dan
                  memberikan kontribusi yang positif bagi kedua belah pihak.
                </span>
                <span>Jurnalis: -</span>
              </p>
              <hr className="w-full border " />
              <div className="w-full rounded-[10px] p-4 flex justify-start items-center gap-4 bg-[#F1F5F9]">
                <div className="p-4 bg-[#E2E8F0] rounded-[10px]">
                  <Image
                    src={"/assets/icon/logo-skansa.svg"}
                    alt="smknusa-icon"
                    width={50}
                    height={50}
                    className="w-14 h-14 "
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <h3 className="font-medium text-sm text-[#696969]">
                    DIPUBLIKASIKAN OLEH
                  </h3>
                  <h4 className="font-semibold text-[18px]">Humas</h4>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start w-1/3 ">
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
                <div className="flex flex-col gap-4 w-full col-span-2">
                  <label
                    htmlFor="Title"
                    className="font-medium text-[18px] text-[#081B34]"
                  >
                    Judul Berita
                  </label>
                  <input
                    type="text"
                    id="Title"
                    name="Title"
                    className="border border-gray-300 rounded-lg p-2 focus:ring-[#F5C451] focus:border-[#F5C451] focus:outline-none focus:ring-1"
                  />
                </div>

                <div className="flex flex-col gap-4 w-full col-span-2">
                  <label
                    htmlFor="Category"
                    className="font-medium text-[18px]  text-[#081B34] "
                  >
                    Kategori Berita
                  </label>
                  <input
                    type="text"
                    id="Category"
                    name="Category"
                    className="border border-gray-300 rounded-lg p-2 focus:ring-[#F5C451] focus:border-[#F5C451] focus:outline-none focus:ring-1"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full col-span-1">
                  <label
                    htmlFor="From"
                    className=" font-medium text-[18px]  text-[#081B34] "
                  >
                    Dari tanggal
                  </label>
                  <input
                    type="text"
                    id="From"
                    name="From"
                    className="border border-gray-300 rounded-lg p-2 focus:ring-[#F5C451] focus:border-[#F5C451] focus:outline-none focus:ring-1"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full col-span-1">
                  <label
                    htmlFor="To Date"
                    className=" font-medium text-[18px]  text-[#081B34] "
                  >
                    Sampai tanggal
                  </label>
                  <input
                    type="text"
                    id="To Date"
                    name="To Date"
                    className="border border-gray-300 rounded-lg p-2 focus:ring-[#F5C451] focus:border-[#F5C451] focus:outline-none focus:ring-1"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full col-span-2 mt-2">
                  <button className=" font-medium text-[18px] bg-[#FFD980]  py-2 rounded-[10px] ">
                    Cari
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-10 flex-col w-[80%]">
          <h2 className="mt-10 text-5xl font-semibold">
            Berita Lain yang tak kalah menarik
          </h2>
          <div className="grid grid-cols-3 items-center gap-10 p-8 bg-[#F1F5F9] rounded-[10px]">
            {newsData.map((news, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="bg-white rounded-lg  ">
                    <div className="grid grid-cols-2 items-center gap-2 absolute p-2">
                      {news.cardCategory.map((category, index) => (
                        <div
                          key={index}
                          className={`bg-[${category.CategoryColor}] px-2 py-1 rounded-[10px]`}
                        >
                          <p className="font-[500] text-[10px] text-[#696969]">
                            {category.categoryName}
                          </p>
                        </div>
                      ))}
                    </div>
                    <img
                      className="w-full max-h-full object-cover"
                      src={news.cardImg}
                      alt={news.card}
                    />
                    <div className="p-4">
                      <div className="text-md font-[500] text-[18px] mb-2">
                        {news.card}
                      </div>
                      <div className="text-sm text-[#696969] flex justify-between items-center">
                        <span className=" flex text-[#696969] font-[500] text-[12px]">
                          <Image
                            className="mx-1"
                            src={"/assets/icon/user.svg"}
                            alt="user"
                            width={15}
                            height={15}
                          />
                          {news.cardProfile}
                        </span>
                        <div className="flex ml-auto font-[500] mr-4 text-[12px] text-[#696969] text-right">
                          <Image
                            className="mx-1"
                            src={"/assets/icon/clock.svg"}
                            alt="user"
                            width={15}
                            height={15}
                          />
                          {news.cardDate}
                        </div>
                        <span className="font-[500]  text-[12px] text-[#696969] flex items-center">
                          <Image
                            className="mx-1"
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
  );
}
