import React from "react";

const HomeHero = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="overflow-hidden rounded-[10px]">
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
    </div>
  );
};

export default HomeHero;
