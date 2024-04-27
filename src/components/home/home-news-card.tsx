import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import {
  AnimationControls,
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useAnimation,
  useMotionValue,
} from "framer-motion";
import { defaultTransition } from "../animation/transition";

import { useMediaQuery } from "react-responsive";

type HomeNewsCardProps = {
  currentNewsData?: {
    title: string;
    content: string;
    image: string;
  }[];
  currentNewsHighlightIndex: number;
  newsHighlightControls: AnimationControls;
  setCurrentNewsHighlightIndex: Dispatch<SetStateAction<number>>;
  homeNewsEndRef: React.MutableRefObject<null>;
};

const HomeNewsCard = ({
  currentNewsData,
  currentNewsHighlightIndex,
  newsHighlightControls,
  setCurrentNewsHighlightIndex,
  homeNewsEndRef,
}: HomeNewsCardProps) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const sliderPositionYRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const dragControls = useAnimation();

  const scrollMobile = useMotionValue(0);

  const { scrollYProgress: homeNewsScrollProgress } = useScroll({
    target: homeNewsEndRef,
    offset: ["start", "end"],
    layoutEffect: false,
  });

  const sliderY = useTransform(
    isMobile ? scrollMobile : homeNewsScrollProgress,
    [0, 0.5, 1],
    [0, 80, 300]
  );

  const newsY = useTransform(
    isMobile ? scrollMobile : homeNewsScrollProgress,
    [0, 1],
    [
      0,
      currentNewsData
        ? currentNewsData?.length <= 3
          ? -4
          : -54 * currentNewsData.length
        : 1,
    ]
  );

  useMotionValueEvent(sliderY, "change", (latest) => {
    if (currentNewsData) {
      const segmentSize = 250 / (currentNewsData.length - 1);
      const index = Math.floor(latest / segmentSize);
      setCurrentNewsHighlightIndex(Math.min(index, currentNewsData.length - 1));
    }
  });

  const newsHighlightVariant = {
    hidden: {
      y: 0,
    },
    after: {
      y: 0,
    },
    visible: {
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  useEffect(() => {
    newsHighlightControls.start("visible");
  }, [currentNewsData]);

  const listVariant = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    after: {
      y: 80,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const NewsHighlightDefault = (children: React.ReactNode) => {
    return (
      <motion.div
        variants={newsHighlightVariant}
        animate={newsHighlightControls}
        initial="hidden"
        style={{ y: newsY }}
        transition={defaultTransition}
        className="flex flex-col items-start gap-8 lg:mt-10 lg:pb-0 pb-10"
      >
        {children}
      </motion.div>
    );
  };

  const currentNews = () => {
    return (
      <>
        {currentNewsData?.map((news, index) => (
          <React.Fragment key={index}>
            <motion.div
              variants={listVariant}
              animate={{
                color:
                  currentNewsHighlightIndex === index ? "#111827" : "#9ca3af",
                scale:
                  currentNewsHighlightIndex === index && !isMobile ? 1 : 0.9,
              }}
              className={`flex flex-col items-start gap-2 lg:w-2/3 `}
            >
              <h2 className="font-[600]   text-[18px] ">{news.title}</h2>
              <p className="font-[500] text-sm lg:text-[16px]">
                {news.content}
              </p>
              <div className="flex justify-start items-center gap-2">
                <h3 className="font-[500] text-[16px]">Lihat Selengkapnya</h3>
                <Image
                  src={"assets/icon/line-arrow-right.svg"}
                  alt="arrow-right"
                  width={40}
                  height={40}
                  className="w-4 h-4"
                />
              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <div className="flex justify-start overflow-hidden items-end relative w-full lg:h-[34rem] bg-white lg:bg-gray-base  rounded-[10px] ">
      <div className="flex flex-col  lg:flex-row-reverse justify-between items-center w-full h-full lg:p-8 gap-6">
        <Image
          src={"/assets/announcement/announcment-1.png"}
          alt="announcement-1"
          width={400}
          height={400}
          className="lg:w-1/2 h-full"
        />
        <div className="flex justify-start items-start gap-8 h-full">
          <div className="hidden lg:block">
            <motion.div
              dragConstraints={sliderContainerRef}
              ref={sliderPositionYRef}
              style={{ y: sliderY }}
              animate={dragControls}
              transition={defaultTransition}
              className="bg-yellow cursor-grab p-1 rounded-md h-1/4 absolute top-0 mt-8"
            ></motion.div>
            <div
              ref={sliderContainerRef}
              className="bg-gray-base  p-1 rounded-md lg:h-[26rem]"
            ></div>
          </div>

          {NewsHighlightDefault(currentNews())}
        </div>
      </div>
    </div>
  );
};

export default HomeNewsCard;
