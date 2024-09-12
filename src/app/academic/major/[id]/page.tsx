import Image from "next/image";
import React from "react";
import { Heading, Paragraph } from "@/components/ui/typography";
import DetailLayout from "@/layouts/detail-layout";
import { Major } from "@/services/api/useQueries/useMajors";
import { backendUrl } from "@/utils/backendUrl";

async function fetchMajors() {
  const response = await fetch(`${backendUrl}api/user/profile/majors`, {
    cache: "no-store",
  });
  const data: { data: Major[] } = await response.json();
  return data?.data;
}

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const majorData = await fetchMajors();
  const ids = majorData?.map((major: Major) => major.id_jurusan);
  return ids?.map((id: number) => ({ id: id.toString() }));
}

async function getMajorById(id: string) {
  if (!id) throw new Error("ID is required to fetch majors");
  const response = await fetch(`${backendUrl}api/user/profile/majors/${id}`, {
    cache: "no-store",
  });

  const data = await response.json();
  return data?.data || null;
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const majorById = await getMajorById(id);

  const getCategoryColor = (icon: string) => {
    switch (icon) {
      case "Teknologi Informatika":
        return "bg-orange-400";
      case "Agribisnis dan Agroteknologi":
        return "bg-green-500";
      case "Teknologi dan Rekayasa":
        return "bg-blue-500";
      case "Teknologi Elektronika":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <DetailLayout detailData={majorById} className="justify-start">
      <div className="flex flex-col gap-[3.5rem] xl:min-h-[20rem]">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 h-full">
          <div className="px-8 py-6 w-full lg:w-fit flex justify-center items-center bg-gray-medium rounded-[10px]">
            <Image
              src={"/assets/icon/logo-skansa.svg"}
              alt="smknusa-icon"
              width={50}
              height={50}
              className="w-14 h-14 "
            />
          </div>
          <div className="flex flex-col h-full gap-6 lg:gap-8">
            <Heading
              type="h1"
              className="text-blue-base font-bold !leading-none"
            >
              {majorById?.jurusan_nama}
            </Heading>
            <div
              className={`${getCategoryColor(
                majorById.prodi.nama_prodi
              )} text-center lg:text-start px-2 py-1 rounded-[6px] 1xl:rounded-[10px] w-full lg:w-auto lg:max-w-fit`}
            >
              <Heading
                type="h5"
                className="font-medium !text-sm text-white line-clamp-1 xl:line-clamp-none"
              >
                {majorById.prodi.nama_prodi}
              </Heading>
            </div>
          </div>
        </div>

        <Paragraph>{majorById?.major_text}</Paragraph>
      </div>
    </DetailLayout>
  );
}
