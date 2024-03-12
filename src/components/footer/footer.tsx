import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col gap-10 px-8 py-10 bg-primary rounded-[10px] text-white">
        <div className="flex flex-wrap mt-8 ">
          <div className="flex flex-col items-stretch md:w-1/4 ">
            <h2 className="text-xl font-bold ">Unit Produksi Sekolah</h2>
            <div className="mt-4">
              <p className="mb-4">Tangirelasi </p>
              <p className="">SMK Production</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch  md:w-1/4 ">
            <h2 className="text-xl font-bold ">Aplikasi & Layanan</h2>
            <div className="mt-4">
              <p className="mb-4">Virtual School</p>
              <p className="mb-4">CBT(Ujian Sekolah)</p>
              <p className="mb-4">LMS Save The Childr</p>
              <p className="mb-4">Kotak Saran</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch md:w-1/4 ">
            <h2 className="text-xl font-bold">Lainnya</h2>
            <div className="mt-4">
              <p className="">Peta Situs (XML)</p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start  text-[#081B34] rounded-md md:w-1/4">
            <div className="flex flex-col bg-white rounded-md w-full">
              <div className="rounded-md bg-yellow-300 p-4">
                <h2 className="text-[14px] font-[600]">
                  Dapatkan Informasi Terbaru Kami
                </h2>
              </div>
              <div className="p-4 font-[500]">
                Kami akan memberikan notifikasi kepada anda, jika ada pembaruan
                dari kami.
              </div>
              <div className="rounded-[10px] m-4 border-2 p-2 flex justify-between items-center">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Masukkan alamat email anda"
                  className=" w-full  "
                />
                <Image
                  src={"/assets/round-arrow-right.svg"}
                  alt="sm"
                  width={30}
                  height={30}
                />
              </div>
            </div>

            <div className="mt-4 pt-4 text-white flex flex-col items-start gap-4 justify-start">
              <div className="flex items-center mr-4 mb-2">
                <Image
                  src={"/assets/sms.svg"}
                  alt="sm"
                  width={22}
                  height={22}
                />
                <p className="ml-2 mb-0">informasi@smkn1purwosari.sch.id</p>
              </div>
              <div className="flex items-center">
                <Image
                  src={"/assets/call.svg"}
                  alt="call"
                  width={22}
                  height={22}
                />
                <p className="ml-2 mb-0">(0343) 613747</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between ">
          <div>
            <p className="">
              Jl. Raya Purwosari No. 1, Kec Purwosari, Kab Pasuruan, Jawa Timur
              67162
            </p>
          </div>
        </div>

        <hr />

        <div className="flex items-center justify-between  text-white ">
          <div className="flex items-center">
            <Image
              src={"/assets/logo-skansa.svg"}
              alt=""
              height={55}
              width={55}
            />
            <div className="ml-2 font-[900] text-[18px] ">
              SMK NEGERI 1 <br />
              PURWOSARI
            </div>
          </div>

          <div className="flex-grow flex justify-center  ">
            <div className="text-center mt-8 text-gray-500">
              <p>
                Hak Cipta &copy; 2024 SMK Negeri 1 Purwosari. Dikembangkan oleh
                TPW SMK
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Image
              src={"/assets/tiktok.svg"}
              alt="tiktok"
              width={22}
              height={22}
            />
            <Image
              src={"/assets/instagram.svg"}
              alt="instagram"
              width={22}
              height={22}
            />
            <Image
              src={"/assets/facebook.svg"}
              alt="facebook"
              width={22}
              height={22}
            />
            <Image
              src={"/assets/twitter.svg"}
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
