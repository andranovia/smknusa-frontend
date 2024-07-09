import React from "react";
import Image from "next/image";
import { Heading, Paragraph } from "@/components/ui/typography";

const CourseWork = () => {
  return (
    <div className="w-full lg:pt-24 px-3 rounded-[10px] text-blue-base">
      <div className="relative  bg-white flex flex-col items-center  pt-10 pb-20">
        <div className="flex flex-col  gap-4 w-[80%]  lg:w-1/2">
            <div className="flex flex-col gap-4 items-center">
          <Heading type="h1">Program Kerja Sekolah</Heading>
          <Heading type="h5" className=" text-gray">
            Mengenai program kerja sekolah yang resmi SMK Negeri 1 Purwosari
          </Heading>
          </div>
          <hr className="border-gray-300" />

          <hr className="bg-white lg:w-[86%]  w-1/2" />

          <div>
            <Image
              src={"/assets/profile/course-work/course-work.png"}
              alt="commit and consist"
              className="w-full rounded-[10px] mt-24"
              width={800}
              height={800}
            />
          </div>

          <div className="mt-10 ">
            <Heading type="h4" className="font-[700] ">Sasaran Mutu</Heading>
            <Paragraph className="font-[400] text-[16px]  ">
              Sasaran mutu Top Manajemen (Sekolah) periode 17 Juli 2020 sampai dengan 16 Juli 2021 adalah:
            </Paragraph>
          </div>    

          <div>
            <Image
              src={"/assets/profile/course-work/Table1.png"}
              alt="commit and consist"
              className="w-full mt-10"
              width={800}
              height={800}
            />
          </div>

          <div className="mt-10">
            <Heading type="h4" className="font-[700] ">
              STRATEGI PENCAPAIAN SASARAN MUTU
            </Heading>
            <Paragraph className="font-[400] text-[16px] ">
            Untuk mencapai sasaran mutu yang telah dicanangkan, diterapkan beberapa strategi pencapaian melalui pemberdayaan sumber daya institusi (5M) sebagai berikut:
            </Paragraph>
          </div>

          <div>
            <Image
              src={"/assets/profile/course-work/Table2.png"}
              alt="commit and consist"
              className="w-full"
              width={800}
              height={800}
            />
          </div>
          <div>
            <Image
              src={"/assets/profile/course-work/Table3.png"}
              alt="commit and consist"
              className="w-full mt-6"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseWork;
