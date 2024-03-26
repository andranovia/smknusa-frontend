import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="lg:flex flex-col hidden px-8 py-8 bg-primary rounded-[10px] text-white">
        <div className="flex flex-wrap mt-8 ">
          <div className="flex flex-col items-stretch md:w-1/4 ">
            <h2 className="text-xl font-bold ">Unit Produksi Sekolah</h2>
            <div className="mt-10">
              <p className="mb-4">Tangirelasi </p>
              <p className="">SMK Production</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch  md:w-1/4 ">
            <h2 className="text-xl font-bold ">Aplikasi & Layanan</h2>
            <div className="mt-10">
              <p className="mb-4">LSP SMKN 1 Purwosari</p>
              <p className="mb-4">Virtual School</p>
              <p className="mb-4">CBT(Ujian Sekolah)</p>
              <p className="mb-4">LMS Save The Children</p>
              <p className="mb-4">Kotak Saran</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch md:w-1/4 ">
            <h2 className="text-xl font-bold">Lainnya</h2>
            <div className="mt-10">
              <p className="">Peta Situs (XML)</p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start text-[#081B34] rounded-md md:w-1/4">
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
                  className=" w-full outline-none "
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
        </div>

        <div className="w-full h-full justify-between items-end flex">
          <div className="flex flex-col md:flex-row md:justify-between  ">
            <div className="flex gap-4">
              <Image
                src={"/assets/icon/location.svg"}
                alt="location"
                height={22}
                width={22}
              />
              <p className="">
                Jl. Raya Purwosari No. 1, Kec Purwosari, Kab Pasuruan, Jawa
                Timur 67162
              </p>
            </div>
          </div>

          <div className=" text-white flex flex-col items-start gap-4 justify-start relative -left-8">
            <div className="flex items-center mr-4 mb-2">
              <Image
                src={"/assets/icon/sms.svg"}
                alt="sm"
                width={22}
                height={22}
              />
              <p className="ml-2 mb-0">informasi@smkn1purwosari.sch.id</p>
            </div>
            <div className="flex items-center">
              <Image
                src={"/assets/icon/call.svg"}
                alt="call"
                width={22}
                height={22}
              />
              <p className="ml-2 mb-0">(0343) 613747</p>
            </div>
          </div>
        </div>

        <hr className="mt-10 mb-4" />

        <div className="flex items-center justify-between  text-white ">
          <div className="flex items-center">
            <Image
              src={"/assets/icon/logo-skansa.svg"}
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
            <div className="text-center text-[14] text-[#F8F8F8] font-[500]">
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
