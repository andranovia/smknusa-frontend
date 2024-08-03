import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col items-center 2xl:justify-center  2xl:px-8 py-8 bg-primary rounded-t-lg text-white mt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:flex 2xl:flex-wrap flex-col 2xl:flex-row flex-nowrap mt-8 mx-12 2xl:mx-0  2xl:gap-0 gap-10 xl:max-w-xl-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content 2xl:max-w-max-content">
          <div className="flex flex-col items-stretch 2xl:w-1/4 ">
            <h2 className="text-2xl font-bold ">Unit Produksi Sekolah</h2>
            <div className="mt-10">
              <p className="mb-4">Tangirelasi </p>
              <p className="">SMK Production</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch  2xl:w-1/4 ">
            <h2 className="text-2xl font-bold ">Aplikasi & Layanan</h2>
            <div className="mt-10">
              <p className="mb-4">LSP SMKN 1 Purwosari</p>
              <p className="mb-4">Virtual School</p>
              <p className="mb-4">CBT(Ujian Sekolah)</p>
              <p className="mb-4">LMS Save The Children</p>
              <p className="mb-4">Kotak Saran</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch 2xl:w-1/4 md:col-span-2">
            <h2 className="text-2xl font-bold">Lainnya</h2>
            <div className="mt-10">
              <p className="">Peta Situs (XML)</p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start text-blue-base rounded-md 2xl:w-1/4 md:col-span-2">
            <div className="flex flex-col bg-white rounded-md w-full">
              <div className="flex items-center gap-1 rounded-md bg-yellow p-4">
                <Image
                  alt="sms_notification"
                  src={"/assets/icon/sms-notification.svg"}
                  width={"22"}
                  height={"22"}
                />
                <h2 className="text-xs 2xl:text-[14px] font-[600]">
                  Dapatkan Informasi Terbaru Kami
                </h2>
              </div>
              <div className="p-4 text-[14px] font-[500]">
                Kami akan memberikan notifikasi kepada anda, jika ada pembaruan
                dari kami.
              </div>
              <div className="rounded-[10px] m-4 border-2 p-2 flex justify-between items-center">
                <input
                  type="text"
                  name="user-email"
                  id="user-email"
                  placeholder="Masukkan alamat email anda"
                  className=" w-full outline-none placeholder:text-xs 2xl:placeholder:text-base"
                />
                <Image
                  src={"/assets/icon/round-arrow-right.svg"}
                  alt="sm"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>

          <div className="w-full  h-full 2xl:justify-between 2xl:items-end flex flex-col 2xl:flex-row text-xs 2xl:text-base gap-4 2xl:gap-0">
            <div className="flex flex-row 2xl:justify-between gap-4">
              <Image
                src={"/assets/icon/location.svg"}
                alt="location"
                height={22}
                width={22}
              />
              <p>
                Jl. Raya Purwosari No. 1, Kec Purwosari, Kab Pasuruan, Jawa
                Timur 67162
              </p>
            </div>

            <div className=" text-white flex flex-col items-start gap-4 justify-start relative ">
              <div className="flex items-center mr-4 mb-2 gap-4">
                <Image
                  src={"/assets/icon/sms.svg"}
                  alt="sm"
                  width={22}
                  height={22}
                />
                <p className=" mb-0">informasi@smkn1purwosari.sch.id</p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={"/assets/icon/call.svg"}
                  alt="call"
                  width={22}
                  height={22}
                />
                <p className=" mb-0">(0343) 613747</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-10 mb-4" />

        <div className="flex 2xl:items-center  md:w-full sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 2xl:max-w-max-content  2xl:px-0 flex-col 2xl:flex-row  justify-between gap-8 my-4 2xl:my-0 2xl:gap-0 text-white ">
          <div className="flex items-center">
            <Image
              src={"/assets/icon/logo-skansa.svg"}
              alt=""
              height={55}
              width={55}
              className="w-auto h-auto"
            />
            <div className="ml-2 font-[900] text-[18px] ">
              SMK NEGERI 1 <br />
              PURWOSARI
            </div>
          </div>

          <div className="flex-grow flex 2xl:justify-center  ">
            <div className="2xl:text-center text-[14] text-white font-[500]">
              <p>
                Hak Cipta &copy; 2024 SMK Negeri 1 Purwosari. Dikembangkan oleh
                TPW SMK
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Image
              src={"/assets/icon/tiktok.svg"}
              alt="tiktok"
              width={22}
              height={22}
            />
            <Image
              src={"/assets/icon/instagram.svg"}
              alt="instagram"
              width={22}
              height={22}
            />
            <Image
              src={"/assets/icon/facebook.svg"}
              alt="facebook"
              width={22}
              height={22}
            />
            <Image
              src={"/assets/icon/twitter.svg"}
              alt="twitter"
              width={22}
              height={22}
            />
          </div>
        </div>
      </div>
    </>
  );
}
