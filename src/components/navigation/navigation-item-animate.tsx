import React from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { NavigationLinkData } from "./navigation-item";

type NavigationItemAnimateProps = {
  itemData: NavigationLinkData;
};

const NavigationItemAnimate = ({ itemData }: NavigationItemAnimateProps) => {
  const hoverControls = useAnimation();

  const handleHover = () => {
    hoverControls.start({
      y: 25,
      opacity: 1,
    });
  };

  const handleHoverLeave = () => {
    hoverControls.start({
      y: 10,
      opacity: 0,
    });
  };

  return (
    <motion.div
      whileHover={{
        opacity: 1,
        backgroundColor: "#F7F7F7",

        height: 60,
      }}
      initial={{
        opacity: 0.5,
        backgroundColor: "#FFFFFF",
        height: 40,
      }}
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHoverLeave()}
      className="flex  gap-4 pr-14 w-full rounded-[10px] pl-4 py-2  text-blue-base"
    >
      <Image
        src={itemData.linkDropdownData.icon}
        alt={itemData.linkDropdownData.icon}
        width={40}
        height={40}
        className="w-5 h-5 mt-[2px]"
      />
      <div className="flex flex-col items-start">
        <Link href={itemData.linkDropdownData.linkRef}>
          <h2 className=" font-[600] text-[16px]">
            {itemData.linkDropdownData.text}
          </h2>
        </Link>
        <motion.p
          initial={{
            y: 10,
            opacity: 0,
          }}
          animate={hoverControls}
          className="absolute text-xs"
        >
          {itemData.linkDropdownData.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default NavigationItemAnimate;
