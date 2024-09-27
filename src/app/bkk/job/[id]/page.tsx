import Image from "next/image";
import React from "react";
import { Heading, Paragraph } from "@/components/ui/typography";
import DetailLayout from "@/layouts/detail-layout";
import { Vacancy } from "@/services/api/useQueries/useVacancies";
import { backendUrl } from "@/utils/backendUrl";

async function fetchVacancy() {
  const response = await fetch(`${backendUrl}api/user/lokers`, {
    cache: "no-store",
  });
  const data: { data: Vacancy[] } = await response.json();
  return data?.data;
}

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const VacancyData = await fetchVacancy();
  const ids = VacancyData?.map((Vacancy: Vacancy) => Vacancy.id_loker);
  return ids?.map((id: number) => ({ id: id.toString() }));
}

async function getVacancyById(id: string) {
  if (!id) throw new Error("ID is required to fetch Vacancy");
  const response = await fetch(`${backendUrl}api/user/lokers/${id}`, {
    cache: "no-store",
  });

  const data = await response.json();
  return data?.data || null;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const Vacancy = await getVacancyById(params?.id);
  return {
    title: Vacancy.loker_type + " | " + Vacancy.kemitraan_id,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  //   const VacancyData = await fetchVacancy();
  const VacancyById: Vacancy = await getVacancyById(id);

  return (
    <DetailLayout detailData={VacancyById} className="!justify-start w-full">
      <div className="flex flex-col gap-[3.5rem] xl:min-h-[20rem] w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center  gap-4 h-full w-full">
          <div className="flex flex-col h-full gap-6 w-full">
            <Heading
              type="h1"
              className="text-blue-base font-bold !leading-none"
            >
              {VacancyById?.loker_type}
            </Heading>
            <div className="flex flex-col sm:flex-row sm:items-center h-full gap-2 md:gap-4 ">
              <Heading
                type="h5"
                className="font-[500]   xl:!text-sm   line-clamp-1 leading-6 text-blue-base"
              >
                PT MADUSARI MAS
              </Heading>
              <div className="flex items-center h-full gap-2">
                <Image
                  src={"/assets/icon/location-filled.svg"}
                  alt={VacancyById?.kemitraan_id}
                  width={14}
                  height={14}
                  className="w-4 h-4"
                />
                <Heading
                  type="h5"
                  className="font-[500]   xl:!text-sm  sm:w-full  line-clamp-1 leading-6 text-blue-base"
                >
                  Pelorejo, Purwosari, dkk
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full gap-6 xl:items-end w-full">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icon/time.svg"
                  alt="time"
                  width={15}
                  height={15}
                  className="w-5 h-5"
                />
                <Paragraph className="text-sm xl:text-lg">Fulltime</Paragraph>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icon/user-filled.svg"
                  alt="user"
                  width={15}
                  height={15}
                  className="w-5 h-5"
                />
                <Paragraph className="text-sm xl:text-lg">
                  Siswa Alumni
                </Paragraph>
              </div>
            </div>
            <button className="bg-yellow-light w-full xl:max-w-[183px] text-blue-base py-[10px] rounded-md  text-xs font-medium">
              Lamar
            </button>
          </div>
        </div>

        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          reiciendis nostrum autem aut, cupiditate corrupti voluptates ad atque
          vel minus eaque deleniti inventore eligendi tempora fugiat harum error
          vitae. Nemo.
        </Paragraph>
        {/* <div className=" flex gap-4 lg:gap-10 flex-col w-full ">
          <h2 className="mt-10 text-2xl lg:text-3xl xl:text-4xl 1xl:text-5xl font-semibold">
            Lowongan Lain
          </h2>
        </div> */}
      </div>
    </DetailLayout>
  );
}
