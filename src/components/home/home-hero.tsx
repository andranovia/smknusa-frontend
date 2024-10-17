"use client";

import React from "react";
import YouTube, { YouTubeEvent, YouTubePlayer } from "react-youtube";
import useJumbotron from "@/services/api/useQueries/useJumbotron";

const extractVideoId = (url: string): string | null => {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};
const HomeHero = () => {
  const { jumbotron } = useJumbotron();

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
      cc_load_policy: 0,
      hl: "",
      cc_lang_pref: "",
      playlist: jumbotron && jumbotron[0] ? [extractVideoId(jumbotron[0].video_url || "")] : [],
    },
  };

  const onPlayerStateChange = (event: YouTubeEvent) => {
    const player = event.target as YouTubePlayer;
    if (event.data === 2) {
      player.playVideo()
    }
  } 

  return (
    <section className="flex justify-center items-center bg-gray-base mt-[4.2rem] xl:mt-0 overflow-hidden relative w-full h-full">
      <div className="absolute hidden xl:block top-0 bg-gradient-to-b w-full from-black opacity-40 to-transparent p-10"></div>

      <div className="relative w-full h-[180px] xs:h-[230px] sm:h-[270px] md:h-[320px] lg:h-[400px] xl:h-[720px] 1xl:h-[800px] 2xl:h-[900px] aspect-w-16 aspect-h-9">

        {jumbotron && jumbotron[0] && (
            <YouTube
              opts={videoOptions}
              onStateChange={onPlayerStateChange}
              onEnd={(event: YouTubeEvent) => event.target.playVideo()}
              videoId={extractVideoId(jumbotron[0].video_url || "") || ""}
              className="w-full h-full pointer-events-none"
              iframeClassName="w-full h-full pointer-events-none"
            />
          )}
      </div>
    </section>
  );
};

export default HomeHero;
