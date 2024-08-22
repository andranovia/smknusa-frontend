
import React from 'react'

const FeatureCardItemLoading = () => {
  return (
    <div className="bg-white rounded-lg animate-pulse 1xl:w-[23rem] h-full shadow-md overflow-hidden relative">
      <div className="w-full h-[6rem] xl:h-[11rem] bg-slate-300"></div>
      <div className=" px-3 xl:p-4 flex flex-col items-stretch   gap-2  w-full mb-4 xl:my-0 ">
        <div className="top-0 left-0 absolute p-2 lg:p-0 lg:relative xl:absolute xl:p-2 z-20">
          <div className="h-4 bg-white lg:bg-gray-300 xl:bg-white rounded-[6px] lg:rounded-[10px] xl:rounded-[10px] w-[8rem]  lg:mt-4 xl:mt-0"></div>
        </div>
        <div className="h-2 bg-gray-200 rounded-full w-[90%]  mt-6"></div>
        <div className="h-2 bg-gray-200 rounded-full w-[70%]  mb-2"></div>


      </div>
    </div>
  )
}

export default FeatureCardItemLoading