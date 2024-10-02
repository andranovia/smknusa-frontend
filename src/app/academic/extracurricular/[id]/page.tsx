import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProfileCardItem from "@/components/ui/profile-card-item";
import { Heading, Paragraph } from "@/components/ui/typography";
import DetailLayout from "@/layouts/detail-layout";
import { Extra } from "@/services/api/useQueries/useExtracurricular";
import { backendUrl } from "@/utils/backendUrl";

async function fetchExtracurricular() {
  const response = await fetch(`${backendUrl}api/user/profile/ekstras`, {
    cache: "no-store",
  });
  const data: { data: Extra[] } = await response.json();
  return data?.data;
}

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const extracurricularData = await fetchExtracurricular();
  const ids = extracurricularData?.map(
    (extracurricular: Extra) => extracurricular.id_extra
  );
  return ids?.map((id: string) => ({ id: id.toString() }));
}

async function getExtacurricularById(id: string) {
  if (!id) throw new Error("ID is required to fetch extras");
  const response = await fetch(`${backendUrl}api/user/profile/ekstras/${id}`, {
    cache: "no-store",
  });

  const data = await response.json();
  return data?.data || null;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const extracurricular = await getExtacurricularById(params?.id);
  return {
    title: extracurricular.extra_name,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const extraData = await fetchExtracurricular();
  const extracurricularById = await getExtacurricularById(id);

  // if (extracurricularById === 'Data tidak ditemukan' || !extracurricularById) {
  //     redirect('/404');
  // }

  return (
    <DetailLayout detailData={extracurricularById} className="justify-start">
      <div className="flex flex-col gap-[3.5rem] xl:min-h-[20rem] w-full lg:w-fit">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start  gap-4 h-full w-full">
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
              {extracurricularById?.extra_name}
            </Heading>
          </div>
        </div>

        <Paragraph>{extracurricularById?.extra_text}</Paragraph>
        <div className=" flex gap-4 lg:gap-10 flex-col w-full ">
          <h2 className="mt-10 text-2xl lg:text-3xl xl:text-4xl 1xl:text-5xl font-semibold">
            Extrakurikuler Lain
          </h2>
          <div className="grid grid-cols-1 bg-[#F1F5F9] lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 px-2 py-2 md:py-6 md:px-6  2xl:py-9  rounded-[10px] w-full">
            {extraData?.slice(0, 3).map((extracurricular, index) => {
              return (
                <React.Fragment key={index}>
                  <Link
                    href={`/academic/extracurricular/${extracurricular.id_extra}`}
                  >
                    <ProfileCardItem profileCardData={extracurricular} />
                  </Link>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </DetailLayout>
  );
}
