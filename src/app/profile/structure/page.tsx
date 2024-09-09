
import Image from "next/image";
import React from "react";
import ProfileLayout from "@/layouts/profile-layout";

const ProfileHistory = () => {
  return (
    <ProfileLayout
      title="Struktur Organisasi Sekolah"
      subtitle="Struktur Organisasi Sekolah SMK Negeri 1 Purwosari"
       classNameWrapper="pt-[76px]"
    >
      <Image
        src={"/assets/profile/structure/profile-structure.png"}
        alt=""
        className="w-full rounded-[10px]"
        width={1000}
        height={1000}
      />
    </ProfileLayout>
  );
};

export default ProfileHistory;
