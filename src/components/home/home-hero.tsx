"use client";

import React from "react";
import YouTube, { YouTubeEvent } from "react-youtube";

const HomeHero = () => {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      controls: 0,
      modestbranding: 1,
      disablekb: 1,
      fs: 0,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
    },
  };
  return (
    <section className="flex justify-center items-center bg-gray-base mt-[4.2rem] xl:mt-0 overflow-hidden relative w-full h-full">
      <div className="absolute hidden xl:block top-0 bg-gradient-to-b w-full from-black opacity-40 to-transparent p-10"></div>

      <div className="relative w-full h-[180px] xs:h-[230px] sm:h-[270px] md:h-[320px] lg:h-[400px] xl:h-[720px] 1xl:h-[800px] 2xl:h-[900px] aspect-w-16 aspect-h-9">
        <YouTube
          videoId="QFmzVPw8pOs"
          opts={videoOptions}
          onEnd={(event: YouTubeEvent) => event.target.playVideo()}
          className="w-full h-full"
          iframeClassName={"w-full h-full"}
        />
      </div>
    </section>
  );
};

export default HomeHero;
