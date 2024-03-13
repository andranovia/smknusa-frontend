import React, { useRef } from "react";
import {
  MotionValue,
  PanInfo,
  motion,
  useAnimation,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";

interface HomeMajorSliderProps {
  majorData: {
    major: string;
    majorDesc: string;
    majorImg: string;
  }[];
  offsetX: MotionValue<number>;
  animatedX: any;
}

const HomeMajorSlider = ({
  majorData,
  offsetX,
  animatedX,
}: HomeMajorSliderProps) => {
  const startIndex = 0;
  const dragThreshold = 50;
  const fallbackWidth = 100;
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const canScrollPrev = startIndex > 0;
  const canScrollNext = startIndex < majorData.length - 1;
  const controls = useAnimation();
  const maxLeftSlide = -280;
  const maxRightSlide = -20;

  function handleDragSnap(
    _: MouseEvent,
    { offset: { x: dragOffset } }: PanInfo
  ) {
    containerRef.current?.removeAttribute("data-dragging");

    animatedX.stop();

    const currentOffset = animatedX.get();

    if (
      Math.abs(dragOffset) < dragThreshold ||
      (!canScrollPrev && dragOffset > 0) ||
      (!canScrollNext && dragOffset < 0)
    ) {
      if (currentOffset > maxRightSlide) {
        animatedX.set(maxRightSlide);
      } else {
        animatedX.set(currentOffset);
      }
    } else {
      animatedX.set(maxLeftSlide);
    }
  }

  return (
    <>
      <motion.div
        ref={containerRef}
        style={{
          x: animatedX,
        }}
        drag="x"
        onDragStart={() => {
          containerRef.current?.setAttribute("data-dragging", "true");
        }}
        onDragEnd={handleDragSnap}
        dragConstraints={{
          left: -(fallbackWidth * (majorData.length - 1)),
          right: fallbackWidth,
        }}
        className="flex justify-end items-end gap-8    relative "
      >
        {majorData.map((data, index) => {
          return (
            <React.Fragment key={index}>
              <motion.div
                layout
                transition={{
                  ease: "easeInOut",
                  duration: 0.4,
                }}
                animate={controls}
                ref={(el) => (itemsRef.current[index] = el)}
                className="flex justify-end items-center flex-col relative bg-black rounded-[10px]  w-[18.75rem] h-[25rem]"
              >
                <Image
                  src={data.majorImg}
                  alt="rpl-major"
                  width={300}
                  height={400}
                  className="w-full h-full opacity-70"
                  draggable={false}
                />
                <div className="absolute text-center pb-4 text-white">
                  <h2 className="font-[600] text-[18px]">{data.major}</h2>
                  <p className="font-[500] text-[14px]">{data.majorDesc}</p>
                </div>
              </motion.div>
            </React.Fragment>
          );
        })}
      </motion.div>
    </>
  );
};

export default HomeMajorSlider;
