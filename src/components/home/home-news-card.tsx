import Image from "next/image";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimationControls, motion } from "framer-motion";

type HomeNewsCardProps = {
  currentNewsData?: {
    title: string;
    content: string;
    image: string;
  }[];
  dragControls: AnimationControls;
  currentNewsHighlightIndex: number;
  setcurrentNewsHighlightIndex: Dispatch<SetStateAction<number>>;
};

const HomeNewsCard = ({
  currentNewsData,
  dragControls,
  currentNewsHighlightIndex,
  setcurrentNewsHighlightIndex,
}: HomeNewsCardProps) => {
  const sliderPositionYRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "style"
        ) {
          const targetElement = mutation.target as HTMLElement;
          if (targetElement instanceof HTMLElement) {
            const transformStyle = targetElement.style.transform;
            const translateYRegex = /translateY\(([-+]?\d+)px\)/;
            const match = translateYRegex.exec(transformStyle);
            if (match && match[1]) {
              const translateYValue = parseInt(match[1]);

              if (translateYValue <= 16) {
                setcurrentNewsHighlightIndex(0);
              } else if (translateYValue >= 16 && translateYValue < 304) {
                setcurrentNewsHighlightIndex(1);
              } else if (translateYValue >= 304) {
                setcurrentNewsHighlightIndex(2);
              }
            }
          }
        }
      });
    });

    const sliderElement = sliderPositionYRef.current;
    if (sliderElement) {
      observer.observe(sliderElement, { attributes: true });
    }

    return () => observer.disconnect();
  }, [currentNewsData]);

  return (
    <div className="flex justify-start items-end relative w-full h-[32rem] bg-[#F2F3F4] rounded-[10px] ">
      <div className="flex flex-row justify-between items-center w-full h-full p-8">
        <div className="flex justify-start items-center gap-8 h-full">
          <motion.div
            drag="y"
            dragElastic={0}
            dragMomentum={false}
            dragConstraints={sliderContainerRef}
            ref={sliderPositionYRef}
            animate={dragControls}
            className="bg-[#F5C451] cursor-grab p-1 rounded-md h-1/4 absolute top-0 mt-8"
          ></motion.div>
          <div
            ref={sliderContainerRef}
            className="bg-gray-200  p-1 rounded-md lg:h-[26rem]"
          ></div>
          <div className="flex flex-col items-start gap-8">
            {currentNewsData?.map((news, index) => (
              <React.Fragment key={index}>
                <div
                  className={`flex flex-col items-start gap-2 w-2/3 ${
                    currentNewsHighlightIndex === index
                      ? "text-gray-900"
                      : "text-gray-400"
                  }`}
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
                </div>
              </React.Fragment>
            ))}
          </div>
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
