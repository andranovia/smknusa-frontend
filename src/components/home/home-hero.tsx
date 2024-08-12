import React from "react";

const HomeHero = () => {
  return (
    <section className="flex justify-center items-center xl:p-0 p-2 bg-gray-base mt-[4.5rem] xl:mt-0">
      <div className="absolute top-0 bg-gradient-to-b w-full from-black opacity-40 to-transparent  p-10"></div>
      <div className="overflow-hidden ">
        <video
          width={1600}
          src="/video/home-hero-video.mp4"
          autoPlay
          loop
          playsInline
          muted
          className="w-screen"
        />
      </div>
    </section>
  );
};

export default HomeHero;
