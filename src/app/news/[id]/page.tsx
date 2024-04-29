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
    <div className="w-full lg:pt-24 px-2 lg:px-3 rounded-[10px] text-blue-base">
      <div className="relative  bg-white flex flex-col items-center lg:gap-20 pt-10 pb-20">
        <div className="flex flex-col lg:items-center gap-4 w-[80%] ">
          <h1 className="font-[700] lg:text-[46px] text-[24px] ">
            Pembelajaran Entrepreneur dari PT. Indobismar
          </h1>
          <div className="flex lg:flex-row flex-col lg:my-0 my-8 lg:gap-0 gap-8 justify-between items-start w-full">
            <div className="grid grid-cols-2 items-center gap-2">
              <div className="bg-[#FFE7AF] px-2 py-1 rounded-[10px]">
                <p className="font-[500] text-[10px] text-gray">Penting</p>
              </div>
              <div className="bg-[#CDFFAF] px-2 py-1 rounded-[10px]">
                <p className="font-[500] text-[10px] text-gray">Informasi</p>
              </div>
            </div>
            <div className="flex flex-col lg:w-4/5 gap-8 font-[500] text-[18px]  ">
              <p className=" text-gray">
                PT. INDO BISMAR merupakan Perusahaan swasta yang bergerak dalam
                bidang telekomunikasi, yang menyediakan Handphone, Laptop, PC,
                dll., selain itu juga mempunya divisi lain seperti, Rental
                Mobil, percetakan, Restoran dan tempat rekreasi. Hadir dalam
                kegiatan ini, Bpk. DR. Siswanto, S.Sos, MM selaku CEO PT. INDO
                BISMAR. Beliau yang juga merupakan alumni SMK, tepatnya dari
                SMKN 1 Glagah, [...]
              </p>
              <hr className="w-full border " />
              <div className="w-full justify-between flex lg:flex-row flex-col lg:items-center gap-4">
                <h4 className="text-[12px]">Diposting pada : 17 Maret 2024</h4>
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
        <div className="flex flex-col items-center gap-8 w-[90%] lg:w-[80%] ">
          <Image
            src={"/assets/berita/view/news-view.png"}
            alt=""
            className="w-full rounded-[10px]"
            width={800}
            height={800}
          />
          <div className="flex lg:flex-row flex-col justify-between items-start gap-10 lg:gap-20 w-full">
            <div className="lg:w-full flex flex-col items-start gap-10 ">
              <p className="flex flex-col items-start gap-10 font-[500] text-[18px] text-blue-base w-full">
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

            <div className="flex flex-col items-start lg:w-2/4 ">
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
                    className="font-medium text-sm lg:text-[18px] text-blue-base"
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
                    className="font-medium text-sm lg:text-[18px]  text-blue-base"
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
                    className=" font-medium text-sm lg:text-[18px]  text-blue-base "
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
                    className=" font-medium text-sm lg:text-[18px]  text-blue-base "
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
            Berita Lain yang tak kalah menarik
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-10 lg:mt-10 bg-white rounded-[10px]">
            {newsData.map((news, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="bg-white rounded-lg lg:w-[23rem] h-full shadow-md overflow-hidden relative">
                    <Image
                      className="w-full max-h-full object-cover"
                      src={news.cardImg}
                      alt={news.card}
                      width={800}
                      height={800}
                    />
                    <div className=" px-3 lg:p-4 flex flex-col items-start gap-4 w-full my-4 lg:my-0 ">
                      <div className="grid grid-cols-2 items-center gap-2 top-0 left-0 lg:absolute lg:p-2 z-20">
                        {news.cardCategory.map((category, index) => (
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
                        <h2> {news.card}</h2>
                      </div>
                      <div className="text-sm gap-2 text-gray flex flex-col lg:flex-row lg:justify-between lg:items-center w-full">
                        <span className=" flex text-gray font-[500] text-[12px] gap-2 items-center">
                          <Image
                            src={"/assets/icon/user.svg"}
                            alt="user"
                            width={15}
                            height={15}
                          />
                          {news.cardProfile}
                        </span>
                        <div className="flex lg:ml-auto font-[500] mr-4 text-[12px] text-gray text-right gap-2 items-center">
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
  );
}
