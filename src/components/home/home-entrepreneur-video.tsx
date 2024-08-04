"use client";

import { useMediaQuery } from "@uidotdev/usehooks";
import React from "react";
import YouTube, { YouTubeEvent } from "react-youtube";

const HomeEntrepreneurVideo = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 1024px)");
  const onPlayerReady = (event: YouTubeEvent<any>) => {
    event.target.pauseVideo();
  };

  const opts = {
      height: "100%",
      width: "100%",
      playerVars: {
      autoplay: 0,
      rel: 0,
      modestbranding: 1,
      fs: 1,
      cc_load_policy: 0,
      iv_load_policy: 3,
      start: 0,
      end: 0,
      playsinline: 1,
    },
  };

  return (
    <YouTube
      className="min-h-48 sm:min-h-60 md:min-h-72 xl:min-h-96 2xl:min-h-[38rem] max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content lg:min-h-[20rem] xl:max-w-xl-content 2xl:w-[90%] 2xl:max-w-[1080px] w-full"
      videoId="oknvOlg6EeE"
      opts={opts}
      onReady={onPlayerReady}
    />
  );
};

export default HomeEntrepreneurVideo;
