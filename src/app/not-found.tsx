import { Heading } from '@/components/ui/typography'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className={"w-full flex bg-gray-base justify-center  xl:pt-24 px-2  xl:px-2.5 min-h-screen rounded-[10px] text-blue-base"}>
            <div className="relative bg-white  rounded-md lg:min-h-screen px-3 pt-10 pb-20 w-full flex justify-center">
                <div className="max-w-max  md:max-w-md-content lg:max-w-lg-content  flex flex-col items-center w-full xl:max-w-xl-content 2xl:max-w-max-container">
                    <div className="flex flex-col items-center gap-4 w-[90%] xl:text-center ">
                        <Heading type="h1" className="text-5xl">
                        Opps... Konten Tidak Tersedia
                        </Heading>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}