import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import {} from "swiper/modules";
import { Major, useMajors } from "@/services/api/useQueries/useMajors";
import { backendUrl } from "@/utils/backendUrl";

interface HomeMajorSliderProps {
  majorData: Major[] | undefined | null;
}

const HomeMajorSlider = ({ majorData }: HomeMajorSliderProps) => {
  const { isMajorsLoading } = useMajors();

  return (
    <div className="w-full !flex gap-8">
      {!isMajorsLoading ? (
        <>
          <Swiper
            spaceBetween={15}
            slidesPerView={"auto"}
            modules={[Autoplay, FreeMode]}
            className="flex justify-center items-center  w-full xl:min-h-[24rem] px-4 1xl:ml-5"
          >
            {majorData?.map((data, index) => (
              <SwiperSlide key={index} className="flex w-full  ">
                <Link href={"/academic/major/" + data.id_jurusan} key={index}>
                  <div className="flex justify-end items-center flex-col relative bg-black rounded-[10px] overflow-hidden w-[13rem] h-[18rem] xl:w-[18.75rem] xl:h-[25rem]">
                    <Image
                      src={backendUrl + data.jurusan_thumbnail}
                      alt="rpl-major"
                      width={300}
                      height={400}
                      className="w-full h-full opacity-70 object-cover"
                      draggable={false}
                    />
                    <div className="absolute text-center pb-4 text-white">
                      <h2 className="font-[600] text-[18px]">
                        {data.jurusan_short}
                      </h2>
                      <p className="font-[500] text-[14px] hidden xl:block">
                        {data.jurusan_nama}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
            {majorData &&
              majorData.length < 4 &&
              [...Array(4 - majorData.length)].map((_, index) => (
                <SwiperSlide key={`dummy-${index}`} className="flex w-full ">
                  <div className=" flex justify-end items-center flex-col relative bg-gray-300 rounded-[10px] overflow-hidden w-[13rem] h-[18rem] xl:w-[18.75rem] xl:h-[25rem]">
                    <div className="absolute text-center pb-4 w-full flex justify-center items-center flex-col gap-4">
                      <div className="w-2/4 bg-gray-100 p-2 rounded-md"></div>
                      <div className="w-3/4 hidden xl:block p-2 bg-gray-200 rounded-md"></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </>
      ) : (
        [...Array(4)].map((_, index) => (
          <div
            key={`dummy-${index}`}
            className="flex justify-end animate-pulse items-center flex-col relative bg-gray-300 rounded-[10px] overflow-hidden w-[13rem] h-[18rem] xl:w-[18.75rem] xl:h-[25rem]"
          >
            <div className="absolute text-center pb-4 w-full flex justify-center items-center flex-col gap-4">
              <div className="w-2/4 bg-gray-100 p-2 rounded-md"></div>
              <div className="w-3/4 hidden xl:block p-2 bg-gray-200 rounded-md"></div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default HomeMajorSlider;
