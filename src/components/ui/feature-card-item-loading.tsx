
import React from 'react'

const FeatureCardItemLoading = () => {
  return (
    <div className="bg-white rounded-lg animate-pulse lg:w-[23rem] h-full shadow-md overflow-hidden relative">
    <div className="w-full h-[6rem] lg:h-[11rem] bg-slate-300"></div>
    <div className=" px-3 lg:p-4 flex flex-col items-stretch   gap-2  w-full mb-4 lg:my-0 ">
      <div className="top-0 left-0 lg:absolute lg:p-2 z-20">
        <div className="h-4 bg-white rounded-full w-[6rem]"></div>
      </div>
      <div className="h-3 bg-gray-400 rounded-full w-[5rem] lg:w-[10rem]"></div>
      <div className="h-2 bg-gray-300 rounded-full w-[5rem] lg:w-[16rem] mt-4"></div>
      <div className="h-2 bg-gray-300 rounded-full w-1/2 lg:w-[10rem] "></div>

      
    </div>
  </div>
  )
}

export default FeatureCardItemLoading