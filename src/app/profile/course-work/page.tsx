import React from "react";
import Image from "next/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import ProfileLayout from "@/layouts/profile-layout";

export const metadata = {
  title: "Course Work",
  description: "SMKN 1 Purwosari Course Work",
};

const ProfileCourseWork = () => {
  return (
    <ProfileLayout
      title="Program Kerja Sekolah"
      subtitle="Program Kerja Sekolah SMK Negeri 1 Purwosari"
      classNameWrapper="pt-[70px]"
    >
      <div className="flex flex-col items-start xl:w-[60%] gap-4">
        <Image
          src={"/assets/profile/course-work/course-work.png"}
          alt="commit and consist"
          draggable={false}
          className="w-full rounded-[10px] mt-24"
          width={800}
          height={800}
        />

        <div className="mt-10 ">
          <Heading type="h4" className="font-[700] ">
            Sasaran Mutu
          </Heading>
          <Paragraph className="font-[400] text-[16px]  ">
            Sasaran mutu Top Manajemen (Sekolah) periode 17 Juli 2020 sampai
            dengan 16 Juli 2021 adalah:
          </Paragraph>
        </div>

        <Image
          src={"/assets/profile/course-work/Table1.png"}
          alt="commit and consist"
          draggable={false}
          className="w-full mt-10"
          width={800}
          height={800}
        />

        <div className="mt-10">
          <Heading type="h4" className="font-[700] ">
            STRATEGI PENCAPAIAN SASARAN MUTU
          </Heading>
          <Paragraph className="font-[400] text-[16px] ">
            Untuk mencapai sasaran mutu yang telah dicanangkan, diterapkan
            beberapa strategi pencapaian melalui pemberdayaan sumber daya
            institusi (5M) sebagai berikut:
          </Paragraph>
        </div>

        <Image
          src={"/assets/profile/course-work/Table2.png"}
          alt="commit and consist"
          draggable={false}
          className="w-full"
          width={800}
          height={800}
        />

        <Image
          src={"/assets/profile/course-work/Table3.png"}
          alt="commit and consist"
          draggable={false}
          className="w-full mt-6"
          width={800}
          height={800}
        />
      </div>
    </ProfileLayout>
  );
};

export default ProfileCourseWork;
