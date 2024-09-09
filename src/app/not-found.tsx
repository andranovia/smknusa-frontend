import Image from 'next/image'
import Link from 'next/link'
import { Heading, Paragraph } from '@/components/ui/typography'

export default function NotFound() {
    return (
        <div className={"w-full flex bg-gray-base justify-center  pt-[4.5rem] xl:pt-24 px-2  xl:px-2.5 min-h-screen rounded-[10px] text-blue-base"}>
            <div className="relative bg-white  rounded-md lg:min-h-screen px-3 pt-10 pb-20 w-full flex justify-center">
                <div className="max-w-max  md:max-w-md-content lg:max-w-lg-content  flex flex-col items-center justify-center w-full xl:max-w-xl-content 2xl:max-w-max-container">
                    <div className="flex flex-col items-center gap-[30px] w-[90%] text-center ">
                        <Heading type="h1" className="!text-2xl lg:!text-4xl xl:!text-5xl">
                            Opps... Konten Tidak Tersedia
                        </Heading>
                        <Paragraph className='!text-sm lg:!text-base xl:!text-lg'>
                            Kami mohon maaf, Pencarian tidak ada yang cocok.
                        </Paragraph>
                        <Image src={'/assets/icon/404.svg'} alt='404' width={500} height={500} className='w-[20rem] lg:w-[25rem] xl:w-[31rem] my-4' />
                        <Link
                            href={'/'}
                            className="w-fit py-[10px] px-10 border-2 border-primary  text-blue-base bg-yellow-light rounded-md"
                        >
                            Kembali ke Beranda
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}