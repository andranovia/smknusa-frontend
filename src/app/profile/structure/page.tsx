import { Heading } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";

const ProfileHistory = () => {
  return (
    <div className="w-full lg:pt-24 px-3 rounded-[10px] text-blue-base">
      <div className="relative  bg-white flex flex-col items-center  pt-10 pb-20">
        <div className="flex flex-col lg:items-center gap-4 w-[80%] lg:w-2/3 lg:text-center">
          <Heading type="h1">
            Struktur Organisasi Sekolah
          </Heading>
          <Heading type="h5" className=" text-gray">
            Memberitahu dan Memperkenalkan struktur organisasi sekolah
          </Heading>
          <hr className="w-full border mt-8" />
        </div>
        <div className="flex flex-col items-center gap-8 w-[80%]">
          <Image
            src={"/assets/profile/structure/profile-structure.png"}
            alt=""
            className="w-full rounded-[10px]"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileHistory;
