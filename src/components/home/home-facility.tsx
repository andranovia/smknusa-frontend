import React, { useState } from "react";
import { HomeFacilityCardStack } from "./home-facillity-card-stack";
import { useAnimation, motion, animate } from "framer-motion";

const cardData = [
  [
    {
      id: 0,
      name: "Laboratorium Komputer",
      designation: "Dilengkapi dengan setup yang bagus",
      contentImg: "/assets/lab-kom.png",
    },
    {
      id: 1,
      name: "Laboratorium Komputer",
      designation: "Dilengkapi dengan setup yang bagus",
      contentImg: "/assets/lab-pertanian.png",
    },
    {
      id: 2,
      name: "Laboratorium Komputer",
      designation: "Dilengkapi dengan setup yang bagus",
      contentImg: "/assets/lab-mesin.png",
    },
  ],
  [
    {
      id: 0,
      name: "Laboratorium Komputer 2",
      designation: "Dilengkapi dengan setup yang bagus",
      contentImg: "/assets/lab-pertanian.png",
    },
    {
      id: 1,
      name: "Laboratorium Komputer",
      designation: "Dilengkapi dengan setup yang bagus",
      contentImg: "/assets/lab-mesin.png",
    },
  ],
  [
    {
      id: 0,
      name: "Laboratorium Komputer 3",
      designation: "Dilengkapi dengan setup yang bagus",
      contentImg: "/assets/lab-pertanian.png",
    },
    {
      id: 1,
      name: "Laboratorium Komputer",
      designation: "Dilengkapi dengan setup yang bagus",
      contentImg: "/assets/lab-mesin.png",
    },
  ],
];
const facilityLinkData = [
  {
    text: "Informatika dan Elektronika",
    majorFacilityIndex: 0,
  },
  {
    text: "Agribisnis dan Agroteknologi",
    majorFacilityIndex: 1,
  },
  {
    text: "Teknologi dan Rekayasa",
    majorFacilityIndex: 2,
  },
];

const HomeFacility = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const facilityCardData = cardData[currentSlide];
  const controls = useAnimation();
  const handleSlideChange = (key: number) => {
    setTimeout(() => {
      setCurrentSlide(key);
    }, 500);

    controls.start("animate");
  };

  return (
    <>
      <div className="w-full h-fit bg-white rounded-[10px]  ">
        <div className="flex flex-col items-center justify-center bg-primary  rounded-md text-white pt-10 pb-48">
          <h1 className="font-[700] text-[36px]">
            Kenapa Harus SMK Negeri 1 Purwosari
          </h1>

          <p className="font-[500] text-[18px] mt-[12px]">
            Di SMK Negeri 1 Purwosari, kami akan memberikan pengalaman terbaik
            dalam kegiatan belajar mengajar <br />
            <span className="block text-center">
              yang menyongsong kurikulum merdeka belajar. Dengan dilengkapi
              fasilitas yang berqualitas,
            </span>
            <span className="block text-center">
              mampu menyongsong kebutuhan siswa untuk belajar
            </span>
          </p>

          <hr className="bg-white w-[95%] mt-[4rem]" />

          <div className="flex justify-between items-start w-full left-8 mt-12 px-10">
            <div className=" flex justify-between items-center px-4 gap-8 ">
              {facilityLinkData.map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    <h1
                      onClick={() => handleSlideChange(data.majorFacilityIndex)}
                      className={`font-[600]  cursor-pointer transition-colors text-[16px]  ${
                        cardData[currentSlide] ===
                        cardData[data.majorFacilityIndex]
                          ? `p-1 rounded-md relative  w-min-content before:border-[1px] before:absolute before:bottom-0 text-white before:right-0 before:border-[#F5C451] before:w-full before:opacity-100 `
                          : "p-1 rounded-md relative  w-min-content before:h-0 before:absolute before:bottom-0 text-[#9DA5B1] before:right-0 before:bg-[#F2F3F4] before:opacity-0 "
                      } `}
                    >
                      {data.text}
                    </h1>
                  </React.Fragment>
                );
              })}
            </div>

            <div className="flex justify-center items-center ">
              <div className="btn bg-[#F5C451] hover:bg-[#F5C451] text-[#081B34] font-[600] py-2.5 px-5 rounded">
                <button className="text-[16px] ">Selengkapnya </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative  px-8  -top-36  -mb-20">
          <div className="flex justify-center items-end relative overflow-hidden bg-[#F2F3F4] rounded-[10px] ">
            <motion.div
              variants={{
                initial: {
                  y: 0,
                },
                animate: {
                  y: [0, 800, 0],
                  opacity: [1, 0, 1],
                  transition: {
                    duration: 1.2,
                    ease: "easeInOut",
                  },
                },
              }}
              animate={controls}
              initial={"initial"}
              className="h-[38rem] flex items-end justify-center w-full px-20 pt-20"
            >
              <HomeFacilityCardStack items={facilityCardData} />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFacility;
