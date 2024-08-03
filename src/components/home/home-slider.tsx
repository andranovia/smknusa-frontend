import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const sliderData = [
  {
    text: "Pengajar yang kompeten",
  },
  {
    text: "Akreditasi A",
  },
  {
    text: "SMK bintang lima",
  },
  {
    text: "Alumni berkualitas",
  },
  {
    text: "Berprestasi",
  },
  {
    text: "Fasilitas lengkap",
  },
];

const HomeSlider = () => {
  return (
    <section className="text-blue-base w-full flex justify-center overflow-hidden relative  items-center  rounded-md bg-white py-4 ">
      <div className="absolute left-0 bg-gradient-to-r from-white to-transparent z-10 p-10"></div>
      <Marquee autoFill={true} speed={80}>
        {sliderData.map((data, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center ">
              <Image
                src={"/assets/icon/star.svg"}
                alt="star"
                width={70}
                height={70}
                className="mx-10 xl:w-18 w-12"
              />
              <h2 className="font-[500] xl:text-[22px]">{data.text}</h2>
            </div>
          </React.Fragment>
        ))}
      </Marquee>
      <div className="absolute right-0 bg-gradient-to-l from-white to-transparent z-10 p-10"></div>
    </section>
  );
};

export default HomeSlider;
