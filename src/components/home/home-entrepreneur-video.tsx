"use client";

import React from "react";
import YouTube, { YouTubeEvent } from "react-youtube";
import useJumbotron from "@/services/api/useQueries/useJumbotron";

const HomeEntrepreneurVideo = () => {
  const { partnersJumbotron } = useJumbotron();
  const onPlayerReady = (event: YouTubeEvent<unknown>) => {
    event.target.pauseVideo();
  };

  const extractVideoId = (url: string): string | null => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
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
      className="rounded-[10px] overflow-hidden  min-h-40 sm:min-h-60 md:min-h-72 xl:min-h-[30rem] 1xl:min-h-[34rem] 2xl:min-h-[38rem] lg:min-h-[20rem] w-full  md:max-w-md-content lg:max-w-lg-content xl:max-w-full 2xl:max-w-max-container"
      videoId={
        (partnersJumbotron &&
          partnersJumbotron[0] &&
          extractVideoId(partnersJumbotron[0].video_url || "")) ||
        ""
      }
      opts={opts}
      onReady={onPlayerReady}
    />
  );
};

export default HomeEntrepreneurVideo;
