import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const sliderEnterpreneur = [
  {
    enterpreneurImg: "/assets/home/company/yamaha.svg",
  },
  {
    enterpreneurImg: "/assets/home/company/mayora.svg",
  },
  {
    enterpreneurImg: "/assets/home/company/otsuka.svg",
  },
  {
    enterpreneurImg: "/assets/home/company/bakery.svg",
  },
  {
    enterpreneurImg: "/assets/home/company/satria.svg",
  },
  {
    enterpreneurImg: "/assets/home/company/daihatsu.svg",
  },
  {
    enterpreneurImg: "/assets/home/company/kyc.svg",
  },
  {
    enterpreneurImg: "/assets/home/company/ktg.svg",
  },
];

const HomeEnterpreneurSlider = () => {
  return (
    <>
      <div className="text-blue-base w-full flex  justify-center overflow-hidden relative items-center my-4 rounded-md  py-6 ">
        <div className="absolute left-0 z-10 mix-blend-darken bg-gradient-to-r from-[#081B34] to-transparent py-20 px-4"></div>

        <Marquee autoFill={true} speed={60}>
          {sliderEnterpreneur.map((data, index) => (
            <React.Fragment key={index}>
              <Image
                src={data.enterpreneurImg}
                alt="enterpreneur-icon"
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

export default HomeEnterpreneurSlider;
