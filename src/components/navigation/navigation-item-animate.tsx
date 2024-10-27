import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useActivePage } from "@/contexts/ActivePageContext";
import { cn } from "@/utils/cn";
import { NavigationLinkData } from "./navigation-item";

type NavigationItemAnimateProps = {
  itemData: NavigationLinkData;
  show: boolean;
};

const NavigationItemAnimate = ({
  itemData,
  show,
}: NavigationItemAnimateProps) => {
  const hoverControls = useAnimation();
  const isMobile = useMediaQuery("only screen and (max-width: 1024px)");
  const { activePage } = useActivePage();

  useEffect(() => {
    if (!isMobile && activePage) {
      hoverControls.start("initial");
    }
  }, [show, activePage, isMobile, hoverControls]);

  const handleHover = () => {
    hoverControls.start("hover");
  };

  const handleHoverLeave = () => {
    hoverControls.start("initial");
  };

  const wrapperVariant = {
    initial: {
      height: 40,
    },
    hover: {
      height: 60,
    },
  };

  const titleVariant = {
    initial: {
      y: 2,
    },
    hover: {
      y: 0,
    },
  };

  const descVariant = {
    initial: {
      y: -10,
      opacity: 0,
    },
    hover: {
      y: 8,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial={"initial"}
      variants={wrapperVariant}
      animate={hoverControls}
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHoverLeave()}
      className={cn(
        `transition-[backgroundColor,opacity] group-hover:translate-y-0 flex xl:flex-row flex-col items-start xl:text-start text-center  gap-4  bg-white hover:bg-[#F7F7F7] xl:opacity-50 xl:hover:opacity-100  relative xl:pr-14 w-full rounded-[10px] xl:pl-4 py-2  text-blue-base `
      )}
    >
      <Image
        src={itemData.linkDropdownData.icon}
        alt={itemData.linkDropdownData.icon}
        width={40}
        height={40}
        className={`w-6 h-6 xl:w-5 xl:h-5 xl:mt-[2px] xl:invert-0`}
      />
      <div className="relative xl:flex flex-col items-start w-full">
        <motion.h2
          initial={"initial"}
          animate={hoverControls}
          variants={titleVariant}
          className=" font-[600] text-xs xl:text-[16px] line-clamp-1"
        >
          {itemData.linkDropdownData.text}
        </motion.h2>

        <motion.p
          initial={"initial"}
          animate={hoverControls}
          variants={descVariant}
          className="relative font-medium text-xs  hidden xl:block text-nowrap"
        >
          {itemData.linkDropdownData.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default NavigationItemAnimate;
