"use client";

import React from "react";
import Image from "next/image";
import YouTube, { YouTubeEvent } from "react-youtube";
import { motion } from "framer-motion";
import useJumbotron from "@/services/api/useQueries/useJumbotron";

const HomeEntrepreneurVideo = () => {
  const { partnersJumbotron, isPartnersJumbotronLoading } = useJumbotron();
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
      controls: 0,
      modestbranding: 1,
      disablekb: 1,
      fs: 0,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
      cc_load_policy: 0,
      hl: "",
      cc_lang_pref: "",
    },
  };

  return !isPartnersJumbotronLoading ? (
    <YouTube
      className="rounded-[10px] overflow-hidden  min-h-52 sm:min-h-60 md:min-h-72 xl:min-h-[30rem] 1xl:min-h-[34rem] 2xl:min-h-[38rem] lg:min-h-[20rem] w-full md:max-w-md-content lg:max-w-lg-content xl:max-w-full 2xl:max-w-max-container"
      videoId={
        (partnersJumbotron &&
          partnersJumbotron[0] &&
          extractVideoId(partnersJumbotron[0].video_url || "")) ||
        ""
      }
      opts={opts}
      onReady={onPlayerReady}
    />
  ) : (
    <motion.div className="h-full flex flex-col justify-center items-center bg-gray-medium rounded-lg  min-h-52 sm:min-h-60 md:min-h-72 xl:min-h-[30rem] 1xl:min-h-[34rem] 2xl:min-h-[38rem] lg:min-h-[20rem] w-full  md:max-w-md-content lg:max-w-lg-content xl:max-w-full 2xl:max-w-max-container">
      <Image
        src={"https://img.icons8.com/fluency-systems-filled/96/FFFFFF/play.png"}
        alt="Play Icon"
        width={100}
        height={100}
        className="animate-pulse"
      />
    </motion.div>
  );
};

export default HomeEntrepreneurVideo;
