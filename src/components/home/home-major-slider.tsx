import React, { useRef } from "react";
import { MotionValue, PanInfo, motion, useAnimation } from "framer-motion";
import Image from "next/image";

interface HomeMajorSliderProps {
  majorData: {
    major: string;
    majorDesc: string;
    majorImg: string;
  }[];
  animatedX: MotionValue<number>;
}

const HomeMajorSlider = ({ majorData, animatedX }: HomeMajorSliderProps) => {
  const dragThreshold = 0; 
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const maxLeftSlide = -450;
  const maxRightSlide = 250;

  function handleDragSnap(
    _: MouseEvent,
    { offset: { x: dragOffset } }: PanInfo
  ) {
  containerRef.current?.removeAttribute("data-dragging");

    animatedX.stop();
    const currentOffset = animatedX.get();

    if (Math.abs(dragOffset) > dragThreshold) {
      const newOffset = currentOffset + dragOffset;
      animatedX.set(
        Math.max(Math.min(newOffset, maxRightSlide), maxLeftSlide)
      );
    } else {
      // Smoothly return to the nearest boundary if the threshold isn't met
      animatedX.set(currentOffset);
    }
  }

  return (
    <motion.div
      ref={containerRef}
      style={{ x: animatedX }}
      drag="x"
      onDragStart={() => {
        containerRef.current?.setAttribute("data-dragging", "true");
      }}
      onDragEnd={handleDragSnap}
      dragConstraints={{
        left: maxLeftSlide,
        right: maxRightSlide,
      }}
      className="flex gap-8 relative"
    >
      {majorData.map((data, index) => (
        <motion.div
          key={index}
          layout
          transition={{ ease: "easeInOut", duration: 0.4 }}
          animate={controls}
          className="flex justify-end items-center flex-col relative bg-black rounded-[10px] w-[13rem] h-[18rem] xl:w-[18.75rem] xl:h-[25rem]"
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
            <p className="font-[500] text-[14px] hidden xl:block">
              {data.majorDesc}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};


export default HomeMajorSlider;
