import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import {
  AnimationControls,
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useAnimation,
} from "framer-motion";
import { defaultTransition } from "../animation/transition";

type HomeNewsCardProps = {
  currentNewsData?: {
    title: string;
    content: string;
    image: string;
  }[];
  currentNewsHighlightIndex: number;
  newsHighlightControls: AnimationControls;
  setcurrentNewsHighlightIndex: Dispatch<SetStateAction<number>>;
  homeNewsEndRef: React.MutableRefObject<null>;
};

const HomeNewsCard = ({
  currentNewsData,
  currentNewsHighlightIndex,
  newsHighlightControls,
  setcurrentNewsHighlightIndex,
  homeNewsEndRef,
}: HomeNewsCardProps) => {
  const sliderPositionYRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const dragControls = useAnimation();
  const { scrollYProgress: homeNewsScrollProgress } = useScroll({
    target: homeNewsEndRef,
    offset: ["start", "end"],
  });

  const sliderY = useTransform(
    homeNewsScrollProgress,
    [0, 0.5, 1],
    [0, 80, 300]
  );
  const newsY = useTransform(
    homeNewsScrollProgress,
    [0, 1],
    [
      0,
      currentNewsData
        ? currentNewsData?.length <= 3
          ? -64
          : -64 * currentNewsData.length
        : 1,
    ]
  );

  useMotionValueEvent(sliderY, "change", (latest) => {
    if (currentNewsData) {
      const segmentSize = 250 / (currentNewsData.length - 1);
      const index = Math.floor(latest / segmentSize);
      setcurrentNewsHighlightIndex(Math.min(index, currentNewsData.length - 1));
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

  return (
    <div className="flex justify-start overflow-hidden items-end relative w-full h-[32rem] bg-[#F2F3F4] rounded-[10px] ">
      <div className="flex flex-col  lg:flex-row justify-between items-center w-full h-full p-8">
        <div className="flex justify-start items-start gap-8 h-full">
          <motion.div
            dragConstraints={sliderContainerRef}
            ref={sliderPositionYRef}
            style={{ y: sliderY }}
            animate={dragControls}
            transition={defaultTransition}
            className="bg-[#F5C451] cursor-grab p-1 rounded-md h-1/4 absolute top-0 mt-8"
          ></motion.div>
          <div
            ref={sliderContainerRef}
            className="bg-gray-200  p-1 rounded-md lg:h-[26rem]"
          ></div>

          <motion.div
            variants={newsHighlightVariant}
            animate={newsHighlightControls}
            initial="hidden"
            style={{ y: newsY }}
            transition={defaultTransition}
            className="flex flex-col items-start gap-8 mt-10"
          >
            {currentNewsData?.map((news, index) => (
              <React.Fragment key={index}>
                <motion.div
                  variants={listVariant}
                  animate={{
                    color:
                      currentNewsHighlightIndex === index
                        ? "#111827"
                        : "#9ca3af",
                    scale: currentNewsHighlightIndex === index ? 1 : 0.9,
                  }}
                  className={`flex flex-col items-start gap-2 w-2/3 `}
                >
                  <h2 className="font-[600] text-[18px] ">{news.title}</h2>
                  <p className="font-[500] text-[16px]">{news.content}</p>
                  <div className="flex justify-start items-center gap-2">
                    <h3 className="font-[500] text-[16px]">
                      Lihat Selengkapnya
                    </h3>
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
          </motion.div>
        </div>
        <Image
          src={"/assets/announcement/announcment-1.png"}
          alt="announcement-1"
          width={400}
          height={400}
          className="w-1/2 h-full"
        />
      </div>
    </div>
  );
};

export default HomeNewsCard;
