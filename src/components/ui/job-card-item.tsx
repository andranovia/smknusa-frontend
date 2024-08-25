import React from 'react'
import { Heading, Paragraph } from './typography'
import Image from 'next/image'

const JobCardItem = () => {
    return (
        <div className='flex flex-col gap-3 w-full p-6 border rounded-md 1xl:min-w-[36.75rem]'>
            <div className='flex flex-col md:flex-row justify-between gap-3 md:gap-0 md:items-center'>
                <div className='flex items-center gap-2'>
                    <Heading type='h5' className='text-blue-base uppercase font-semibold text-xl'>
                        Teknisi
                    </Heading>
                    <Paragraph className='uppercase font-[320] text-xs'>
                        PT. Madusari Mas
                    </Paragraph>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-1'>
                        <Image src='/assets/icon/time.svg' alt='time' width={15} height={15} className='w-4 h-4' />
                        <Paragraph className='text-xs'>
                            Fulltime
                        </Paragraph>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Image src='/assets/icon/user-filled.svg' alt='user' width={15} height={15} className='w-4 h-4' />
                        <Paragraph className='text-xs'>
                            Siswa Alumni
                        </Paragraph>
                    </div>
                </div>
                
            </div>
            <div className='flex items-center gap-1'>
                    <Image src='/assets/icon/location-filled.svg' alt='location' width={15} height={15} className='w-4 h-4' />
                    <Paragraph className='font-[320] text-xs line-clamp-1'>
                        Polerejo, Purwosari, Kec. Purwosari, Pasuruan
                    </Paragraph>
                </div>
                <Paragraph className='font-[320] text-xs line-clamp-4'>
                    Lorem ipsum dolor sit amet consectetur. Pellentesque in aliquet sed aliquet tellus eu metus. Senectus ut tristique lorem tellus. Viverra tellus sagittis sit sit. Turpis egestas pharetra consequat risus lobortis magnis porta tellus platea.
                </Paragraph>
                <div className="1xl:flex grid grid-cols-2 w-full gap-3 mt-2">
                    <button className="bg-primary w-full text-white py-[10px] rounded-md text-xs font-medium">
                        Detail
                    </button>
                    <button className="bg-yellow-light w-full text-blue-base py-[10px] rounded-md  text-xs font-medium">
                        Lamar
                    </button>
                </div>
        </div>
    )
}

export default JobCardItem