import Image from "next/image";
import React from "react";
import { Heading } from "../ui/typography";

const NewsHero = () => {
  return (
    <div className="relative h-full xl:w-full xl:h-[80%]">
      <div className="relative xl:pb-6 xl:h-full h-[12rem]">
        <Image
          src={"/assets/smkn1purwosari.svg"}
          alt="smknusa"
          width={1500}
          height={1500}
          className="object-cover w-full h-full xl:rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col px-10 xl:items-center justify-center text-white xl:mt-[11em]">
          <Heading type="h1" className="text-2xl mb-6 xl:text-[46px]">
            Berita-Berita SMK
          </Heading>
          <Heading type="h5" className="text-xs  xl:text-center font-[600] xl:text-[18px]">
            Update informasi terbaru seputar kegiatan-kegiatan yang berlangsung
            pada SMK Negeri 1 Purwosari
          </Heading>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;
