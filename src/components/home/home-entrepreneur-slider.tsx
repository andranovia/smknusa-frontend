import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const sliderEntrepreneur = [
  {
    entrepreneurImg: "/assets/home/company/yamaha.svg",
  },
  {
    entrepreneurImg: "/assets/home/company/mayora.svg",
  },
  {
    entrepreneurImg: "/assets/home/company/otsuka.svg",
  },
  {
    entrepreneurImg: "/assets/home/company/bakery.svg",
  },
  {
    entrepreneurImg: "/assets/home/company/satria.svg",
  },
  {
    entrepreneurImg: "/assets/home/company/daihatsu.svg",
  },
  {
    entrepreneurImg: "/assets/home/company/kyc.svg",
  },
  {
    entrepreneurImg: "/assets/home/company/ktg.svg",
  },
];

const HomeEntrepreneurSlider = () => {
  return (
    <>
      <div className="text-blue-base w-full flex  justify-center  relative items-center my-4  rounded-md  py-6 ">
        <div className="absolute left-0 z-10 mix-blend-darken bg-gradient-to-r from-[#081B34] to-transparent py-20 px-4"></div>

        <Marquee autoFill={true} speed={60}>
          {sliderEntrepreneur.map((data, index) => (
            <React.Fragment key={index}>
              <Image
                src={data.entrepreneurImg}
                alt="entrepreneur-icon"
                width={110}
                height={110}
                className="lg:w-32 w-20 p-2 lg:p-3 "
              />
            </React.Fragment>
          ))}
        </Marquee>
        <div className="absolute right-0 z-10 mix-blend-darken bg-gradient-to-l from-[#081B34] to-transparent py-20 px-4"></div>
      </div>
    </>
  );
};

export default HomeEntrepreneurSlider;
