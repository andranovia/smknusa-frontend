import Image from 'next/image'
import React from 'react'

const CardItemLoading = () => {
  return (
    <div className="bg-white rounded-lg animate-pulse lg:w-[23rem] h-full shadow-md overflow-hidden relative">
    <div className="w-full h-[6rem] lg:h-[11rem] bg-slate-300"></div>
    <div className=" px-3 lg:p-4 flex flex-col items-stretch   gap-2  w-full mb-4 lg:my-0 ">
      <div className="grid grid-cols-2   items-center gap-2 top-0 left-0 lg:absolute lg:p-2 z-20">
        <div className="h-4 bg-white rounded-full w-[6rem]"></div>
      </div>
      <div className="h-2 bg-gray-300 rounded-full w-[5rem] lg:w-[16rem]"></div>
      <div className="h-2 bg-gray-300 rounded-full w-1/2 lg:w-[10rem] "></div>
      <div className="h-2 bg-gray-300 rounded-full w-[6rem] lg:w-[13rem]"></div>
      <div className="text-sm gap-2 text-gray flex mt-6 flex-col lg:flex-row lg:justify-between lg:items-center w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/assets/icon/user-profile.svg"}
            alt="user"
            height={15}
            width={15}
            className="w-3 h-3 invert"
          />
          <div className="h-2 bg-gray-400 rounded-full w-[4rem]"></div>
        </div>
        <div className="flex lg:ml-auto font-[500] mr-4 text-[12px] text-gray text-right gap-2 items-center">
          <Image
            src={"/assets/icon/clock.svg"}
            alt="user"
            width={15}
            height={15}
          />
          <div className="h-2 bg-gray-300 rounded-full w-[3rem]"></div>
        </div>
        <span className="font-[500]  text-[12px] text-gray flex items-center gap-2">
          <Image
            src={"/assets/icon/eye.svg"}
            alt="views"
            width={15}
            height={15}
          />
          <div className="h-2 bg-gray-300 rounded-full w-[3rem] "></div>
        </span>
      </div>
    </div>
  </div>
  )
}

export default CardItemLoading