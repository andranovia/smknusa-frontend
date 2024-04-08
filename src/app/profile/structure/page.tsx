import Image from "next/image";
import React from "react";

const ProfileHistory = () => {
  return (
    <div className="w-full pt-24 px-3 rounded-[10px]">
      <div className="relative  bg-white flex flex-col items-center  pt-10 pb-20">
        <div className="flex flex-col items-center gap-4  w-2/3 text-center">
          <h1 className="font-[700] text-[46px] text-[#081B34]">
            Struktur Organisasi Sekolah
          </h1>
          <p className="font-[500] text-[18px] text-[#696969]">
            Memberitahu dan Memperkenalkan struktur organisasi sekolah
          </p>
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
