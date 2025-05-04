"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useActiveToast } from "@/contexts/ActiveToastContext";
import { FooterItem, useFooters } from "@/services/api/useQueries/useFooters";

export default function Footer() {
  const { handleActiveUnavailableToast } = useActiveToast();
  const { footers } = useFooters();
  const pathname = usePathname();

  const renderFooterSection = (sectionName: string, items: FooterItem[]) => {
    return (
      <div className="flex flex-col items-stretch 1xl:w-1/4">
        <h2 className="text-lg lg:text-2xl font-bold">{sectionName}</h2>
        <div className="mt-4 lg:mt-10 w-fit">
          {Array.isArray(items) && items.length > 0 ? (
            items.map((item) => (
              <Link href={item.url} key={item.id}>
                <p className="mb-4 hover:text-yellow cursor-pointer transition-colors">
                  {item.label}
                </p>
              </Link>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className={`flex flex-col items-center 1xl:justify-center  1xl:px-8 py-8 bg-primary  text-white mt-3 ${
          pathname.startsWith("/print") ? "hidden" : ""
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 1xl:flex 1xl:flex-wrap flex-col 1xl:flex-row flex-nowrap mt-0 lg:mt-8 px-4 md:px-0  1xl:gap-0 gap-10 xl:max-w-xl-content  md:max-w-md-content lg:max-w-lg-content 1xl:max-w-1xl-content 2xl:max-w-max-content">
          {footers &&
            footers.map((section, index) => {
              const sectionName = section["1"] || section["2"] || section["3"];
              const data = Array.isArray(section.data) ? section.data : [];

              return (
                <React.Fragment
                  key={section.id?.toString() || index.toString()}
                >
                  {renderFooterSection(sectionName as string, data)}
                </React.Fragment>
              );
            })}

          <div className="flex flex-col items-start justify-start text-blue-base rounded-md 1xl:w-1/4 md:col-span-2">
            <div className="flex flex-col bg-white rounded-md w-full">
              <div className="flex items-center gap-1 rounded-md bg-yellow p-4">
                <Image
                  alt="sms_notification"
                  src={"/assets/icon/sms-notification.svg"}
                  width={"22"}
                  height={"22"}
                />
                <h2 className="text-xs 1xl:text-[14px] font-[600]">
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
                  className=" w-full outline-none placeholder:text-xs 1xl:placeholder:text-base"
                />
                <Image
                  onClick={() => handleActiveUnavailableToast()}
                  src={"/assets/icon/round-arrow-right.svg"}
                  alt="sm"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="w-full  h-full 1xl:justify-between 1xl:items-end flex flex-col 1xl:flex-row text-xs 1xl:text-base gap-4 1xl:gap-0">
            <div className="flex flex-row 1xl:justify-between gap-4">
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

            <div className="text-white flex flex-col items-start gap-4 justify-start relative ">
              <div className="flex items-center mr-4 mb-2 gap-4">
                <Image
                  src={"/assets/icon/sms.svg"}
                  alt="sm"
                  width={22}
                  height={22}
                />
                <p className="mb-0">informasi@smkn1purwosari.sch.id</p>
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

        <hr className="mt-10 mb-4 w-full" />

        <div className="flex 1xl:items-center px-4 md:px-0 md:w-full md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-1xl-content 2xl:max-w-max-content  1xl:px-0 flex-col 1xl:flex-row  justify-between gap-8 my-4 1xl:my-0 1xl:gap-0 text-white ">
          <Link href={"/"} className="flex items-center">
            <Image
              src={"/assets/icon/logo-skansa.svg"}
              alt=""
              height={55}
              width={55}
              quality={100}
              className="w-10 xl:w-auto h-auto"
            />
            <div className="ml-2 font-[900] text-sm xl:text-lg ">
              SMK NEGERI 1 <br />
              PURWOSARI
            </div>
          </Link>

          
          <div className="md:flex-grow flex 1xl:justify-center">
            <div className="1xl:text-center text-white font-[500]">
              <p className="text-xs 1xl:text-base">
                Hak Cipta &copy; 2024 SMK Negeri 1 Purwosari. Dikembangkan oleh
                <a href="https://var-site.vercel.app/"><b>&nbsp; Varcretife</b></a>
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
          <Link href={"https://www.tiktok.com/@smkn1purwosari_official"}>
              <Image
                src={"/assets/icon/tiktok.svg"}
                alt="tiktok"
                width={22}
                height={22}
              />
            </Link>
            <Link href={"https://www.instagram.com/smkn1purwosari_official/"}>
              <Image
                src={"/assets/icon/instagram.svg"}
                alt="instagram"
                width={22}
                height={22}
              />
            </Link>
            <Link href={"https://www.facebook.com/profile.php?id=100064545915738"}>
              <Image
                src={"/assets/icon/facebook.svg"}
                alt="facebook"
                width={22}
                height={22}
              />
            </Link>
            <Link href={"https://x.com/smkn1purwosari"}>
              <Image
                src={"/assets/icon/twitter.svg"}
                alt="twitter"
                width={22}
                height={22}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
