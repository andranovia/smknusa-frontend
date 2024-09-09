
import React from 'react'
import { Extra } from '@/services/api/useQueries/useExtracurriculars'
import { Facility } from '@/services/api/useQueries/useFacilities'
import { Majors } from '@/services/api/useQueries/useMajors'
import { Partnership } from '@/services/api/useQueries/usePartnerships'
import { backendUrl } from '@/utils/backendUrl'
import { cn } from '@/utils/cn'

const DetailLayout = ({ children, detailData, className }: { children: React.ReactNode, detailData: Majors | Facility | Extra | Partnership, className?: string }) => {
    return (
        <div className="flex xl:min-h-screen flex-col items-center px-2.5 xl:px-3 gap-3 ">
            <div
                className="relative mt-[72px] xl:mt-24 h-[16rem] w-full p-2 xl:p-2.5 overflow-hidden rounded-[10px] sm:h-[17rem] md:h-[20rem] xl:h-[28rem] 1xl:h-[32.375rem] bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(${'facility_image' in detailData ? backendUrl + detailData.facility_image : 'jurusan_thumbnail' in detailData ? backendUrl + detailData.jurusan_thumbnail : 'extra_image' in detailData ? backendUrl + detailData.extra_image : backendUrl + detailData.kemitraan_thumbnail})`,
                }}
            >
            </div>
            <div className="flex w-full flex-col items-center   bg-gray-base">
                <div className=" w-full gap-10 xl:gap-0 flex flex-col  items-center bg-white py-8 lg:py-14  h-full rounded-lg ">
                    <div className={cn("flex justify-center px-4 xl:px-0 flex-col items-center xl:flex-row gap-[4rem] 1xl:gap-[9.813rem] xl:items-start max-w-[290px] xs:max-w-[330px] sm:max-w-[380px] md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-1xl-content 2xl:max-w-max-[1222px] w-full", className)}>

                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailLayout