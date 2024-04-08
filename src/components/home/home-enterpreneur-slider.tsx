import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const sliderEnterpreneur = [
  {
    enterpreneurImg: "/assets/company/yamaha.svg",
  },
  {
    enterpreneurImg: "/assets/company/mayora.svg",
  },
  {
    enterpreneurImg: "/assets/company/otsuka.svg",
  },
  {
    enterpreneurImg: "/assets/company/bakery.svg",
  },
  {
    enterpreneurImg: "/assets/company/satria.svg",
  },
  {
    enterpreneurImg: "/assets/company/daihatsu.svg",
  },
  {
    enterpreneurImg: "/assets/company/kyc.svg",
  },
  {
    enterpreneurImg: "/assets/company/ktg.svg",
  },
];

const HomeEnterpreneurSlider = () => {
  return (
    <>
      <div className="text-[#081B34] w-full flex  justify-center overflow-hidden relative items-center my-4 rounded-md  py-6 ">
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
