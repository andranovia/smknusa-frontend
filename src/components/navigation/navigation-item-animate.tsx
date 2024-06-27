import React from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { NavigationLinkData } from "./navigation-item";
import { useMediaQuery } from "@uidotdev/usehooks";

type NavigationItemAnimateProps = {
  itemData: NavigationLinkData;
};

const NavigationItemAnimate = ({ itemData }: NavigationItemAnimateProps) => {
  const hoverControls = useAnimation();
  const isMobile = useMediaQuery("only screen and (max-width: 768px)");

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

  const getLinkMobile = (text: string) => {
    if (text === "Sambutan Kepala Sekolah" || text === "Lowongan Pekerjaan") {
      return text.split(" ")[0];
    } else if (text === "Visi dan Misi") {
      return text;
    }
    const words = text.split(" ");
    return words.slice(0, 2).join(" ");
  };

  return (
    
      <motion.div
        whileHover={{
          opacity: 1,
          backgroundColor: "#F7F7F7",
          height: 60,
        }}
        initial={{
          opacity: isMobile ? 1 : 0.5,
          backgroundColor: "#FFFFFF",
          height: 40,
        }}
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleHoverLeave()}
        className="flex lg:flex-row   flex-col lg:items-start items-center lg:text-start text-center  gap-4 lg:pr-14 w-full rounded-[10px] lg:pl-4 py-2  text-blue-base"
      >
        <Image
          src={itemData.linkDropdownData.icon}
          alt={itemData.linkDropdownData.icon}
          width={40}
          height={40}
          className="w-6 h-6 lg:w-5 lg:h-5 lg:mt-[2px]"
        />
        <div className="lg:flex flex-col items-start w-full">
          <h2 className=" font-[600] text-xs lg:text-[16px] line-clamp-1">
            {isMobile
              ? getLinkMobile(itemData.linkDropdownData.text)
              : itemData.linkDropdownData.text}
          </h2>

          <motion.p
            initial={{
              y: 10,
              opacity: 0,
            }}
            animate={hoverControls}
            className="absolute text-xs hidden lg:block text-nowrap"
          >
            {itemData.linkDropdownData.description}
          </motion.p>
        </div>
  
      </motion.div>
    
  );
};

export default NavigationItemAnimate;
