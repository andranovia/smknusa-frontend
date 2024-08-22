import React from 'react'
import { Heading } from '@/components/ui/typography'

const MajorHeader = () => {
  return (
    <div className="flex xl:justify-between lg:flex-row flex-col items-center  my-6 w-full px-6 1xl:px-14  place-self-center max-w-[1264px] ">
      <Heading type="h5" className="xl:w-1/3  xl:my-10 text-[#081B34]">
        Kami memiliiki beberapa jurusan yang dapat menunjang kebutuhan siswa.
      </Heading>
      <div className="xl:w-1/3 w-full mt-4 xl:mt-0 flex justify-end">
        <input
          type="text"
          placeholder="Semua Prodi"
          className="border border-gray-300 rounded-lg p-2 w-full sm:w-full lg:w-64 xl:w-80"
        />
      </div>
    </div>
  )
}

export default MajorHeader