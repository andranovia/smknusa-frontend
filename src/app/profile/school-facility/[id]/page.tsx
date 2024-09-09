import Link from 'next/link';
import { redirect } from "next/navigation";
import React from 'react'
import FeatureCardItem from '@/components/ui/feature-card-item';
import { Heading, Paragraph } from '@/components/ui/typography';
import DetailLayout from '@/layouts/detail-layout'
import { Facility } from '@/services/api/useQueries/useFacilities';
import { backendUrl } from '@/utils/backendUrl';

async function fetchFacility() {
    const response = await fetch(`${backendUrl}api/user/profile/facilities`, { cache: 'no-store' });
    const data: { data: Facility[] } = await response.json();
    return data?.data;
}

export const dynamicParams = false;

export async function generateStaticParams() {
    const facilityData = await fetchFacility();
    const ids = facilityData?.map((facility: Facility) => facility.id_facility);

    return ids?.map((id: number) => ({ id: id.toString() }));
}

async function getFacilityById(id: string) {
    if (!id) throw new Error("ID is required to fetch facility");
    const response = await fetch(`${backendUrl}api/user/profile/facilities/${id}`, { cache: 'no-store' });

    const data = await response.json();
    return data?.data || null;
}

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;
    const facilityData = await fetchFacility();
    let facilityById;
    facilityById = await getFacilityById(id);

    // if (facilityById === 'Data tidak ditemukan' || !facilityById) {
    //     redirect('/404');
    // }

    return (
        <DetailLayout detailData={facilityById} >
            <div className='flex flex-col items-center gap-[3.5rem] xl:min-h-[20rem]'>
                <div className='flex flex-col items-center gap-6'>
                    <Heading type="h1" className="text-blue-base font-bold text-center">
                        {facilityById?.facility_name}
                    </Heading>
                    <div className={`bg-[#007AFF] px-2 py-1 rounded-[6px] 1xl:rounded-[10px]`}>
                        <Heading
                            type="h5"
                            className="font-medium !text-sm text-white line-clamp-1 xl:line-clamp-none"
                        >
                            {facilityById.prodi.nama_prodi}
                        </Heading>
                    </div>

                </div>
                <Paragraph>
                    {facilityById?.facility_text}
                </Paragraph>

                <div className=" flex gap-4 lg:gap-10 flex-col w-full ">
                    <h2 className="mt-10 text-2xl lg:text-3xl xl:text-4xl 1xl:text-5xl font-semibold">
                        Berita Lain yang tak kalah menarik
                    </h2>
                    <div className="grid grid-cols-1 bg-[#F1F5F9] lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 px-2 py-2 md:py-6 md:px-6  2xl:py-9  rounded-[10px] w-full">
                        {facilityData
                            ?.slice(0, 3)
                            .map((facility, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Link href={`/profile/school-facility/${facility.id_facility}`}>
                                            <FeatureCardItem featureCardData={facility} />
                                        </Link>
                                    </React.Fragment>
                                );
                            })}
                    </div>
                </div>
            </div>
        </DetailLayout>
    )
}