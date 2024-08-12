import React from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { NavigationLinkData } from "./navigation-item";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useActivePage } from "@/contexts/ActivePageContext";

type NavigationItemAnimateProps = {
  itemData: NavigationLinkData;
  show: boolean
};

const NavigationItemAnimate = ({ itemData, show }: NavigationItemAnimateProps) => {
  const hoverControls = useAnimation();
  const isMobile = useMediaQuery("only screen and (max-width: 1024px)");
  const {activePage} = useActivePage() 
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
          backgroundColor: show ? "#F7F7F7" : '',
          height: 60,
        }}
        initial={{
          opacity: isMobile ? 1 : show || !activePage ? 0.5 : 0.8,
          backgroundColor: "",
          height: 40,
        }}
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleHoverLeave()}
        className={`flex xl:flex-row   flex-col xl:items-start items-center xl:text-start text-center  gap-4 xl:pr-14 w-full rounded-[10px] xl:pl-4 py-2   ${show || !activePage  ? 'text-blue-base opacity-50 ': 'text-white opacity-80'}`}
      >
        <Image
          src={itemData.linkDropdownData.icon}
          alt={itemData.linkDropdownData.icon}
          width={40}
          height={40}
          className={`w-6 h-6 xl:w-5 xl:h-5 xl:mt-[2px] ${show || !activePage ? "invert-0" : "invert"}`}
        />
        <div className="xl:flex flex-col items-start w-full">
          <h2 className=" font-[600] text-xs xl:text-[16px] line-clamp-1">
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
            className="absolute text-xs hidden xl:block text-nowrap"
          >
            {itemData.linkDropdownData.description}
          </motion.p>
        </div>
  
      </motion.div>
    
  );
};

export default NavigationItemAnimate;
