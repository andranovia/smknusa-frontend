import React, { useRef } from "react";
import { motion, MotionValue, PanInfo, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Major } from "@/services/api/useQueries/useMajors";
import { backendUrl } from "@/utils/backendUrl";

interface HomeMajorSliderProps {
  majorData: Major[] | undefined;
  animatedX: MotionValue<number>;
}

const HomeMajorSlider = ({ majorData, animatedX }: HomeMajorSliderProps) => {
  const dragThreshold = 0;
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const maxLeftSlide = -250;
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
      animatedX.set(Math.max(Math.min(newOffset, maxRightSlide), maxLeftSlide));
    } else {
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
      {majorData?.map((data, index) => (
        <Link href={"/academic/major/" + data.id_jurusan} key={index}>
          <motion.div
            layout
            transition={{ ease: "easeInOut", duration: 0.4 }}
            animate={controls}
            className="flex justify-end items-center flex-col relative bg-black rounded-[10px] overflow-hidden w-[13rem] h-[18rem] xl:w-[18.75rem] xl:h-[25rem]"
          >
            <Image
              src={backendUrl + data.jurusan_thumbnail}
              alt="rpl-major"
              width={300}
              height={400}
              className="w-full h-full opacity-70 object-cover"
              draggable={false}
            />
            <div className="absolute text-center pb-4 text-white">
              <h2 className="font-[600] text-[18px]">{data.jurusan_short}</h2>
              <p className="font-[500] text-[14px] hidden xl:block">
                {data.jurusan_nama}
              </p>
            </div>
          </motion.div>
        </Link>
      ))}
      {majorData &&
        majorData.length < 4 &&
        [...Array(4 - majorData.length)].map((_, index) => (
          <motion.div
            key={`dummy-${index}`}
            layout
            transition={{ ease: "easeInOut", duration: 0.4 }}
            animate={controls}
            className="flex justify-end items-center flex-col relative bg-gray-300 rounded-[10px] overflow-hidden w-[13rem] h-[18rem] xl:w-[18.75rem] xl:h-[25rem]"
          >
            <div className="absolute text-center pb-4 w-full flex justify-center items-center flex-col gap-4">
              <div className="w-2/4 bg-gray-100 p-2 rounded-md"></div>
              <div className="w-3/4 hidden xl:block p-2 bg-gray-200 rounded-md"></div>
            </div>
          </motion.div>
        ))}
    </motion.div>
  );
};

export default HomeMajorSlider;
