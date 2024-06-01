"use client";

import React from "react";
import { useMediaQuery } from "react-responsive";
import YouTube, { YouTubeEvent } from "react-youtube";

const HomeEntrepreneurVideo = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const onPlayerReady = (event: YouTubeEvent<any>) => {
    event.target.pauseVideo();
  };

  const opts = {
    height: isMobile ? "200" : "540" ,
    width:  isMobile ?  "340" : "1080"  ,
  };
                         
  return <YouTube videoId="oknvOlg6EeE" opts={opts} onReady={onPlayerReady} />;
};

export default HomeEntrepreneurVideo;
