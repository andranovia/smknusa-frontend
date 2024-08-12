import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { defaultTransition } from "../animation/transition";
import { useActivePage } from "@/contexts/ActivePageContext";

interface NavigationSearchProps {
  show: boolean;

}

const NavigationSearch = ({ show }: NavigationSearchProps) => {
  const [searchToggle, setSearchToggle] = useState(false);
  const {activePage} = useActivePage()
  return (
    <div
      className={`flex justify-center items-center overflow-hidden bg-[#F7F7F7] ${
        searchToggle ? "bg-opacity-100" : "bg-opacity-0"
      } transition-all rounded-[10px]  p-2 gap-2 ${show && searchToggle || !activePage && searchToggle ? 'bg-opacity-100' : searchToggle ? 'bg-opacity-40 bg-primary backdrop-blur-sm' : ''}`}
    >
      <motion.input
        transition={defaultTransition}
        animate={{
          x: 40,
          opacity: searchToggle ? 1 : 0,
          y: searchToggle ? 0 : 40,
        }}
        type="text"
        name="search"
        id="search"
        placeholder="Ketikkan kata kunci"
        className={`focus:outline-none hidden 2xl:block placeholder:font-[500] placeholder:text-sm ${show || !activePage ? '' : 'placeholder:text-white'} bg-transparent`}
      />
      <motion.div
        transition={defaultTransition}
        onClick={() => setSearchToggle(!searchToggle)}
        animate={{ x: searchToggle ? -200 : 0, scale: searchToggle ? 0.8 : 1 }}
      >
        <Image
          src={"/assets/icon/search.svg"}
          alt="search"
          className={`${
            !show && activePage
              ? searchToggle
                ? `invert-0`
                : "xl:invert-0 invert"
              : "invert"
          } transition-all w-5 h-5 `}
          width={22}
          height={22}
        />
      </motion.div>
    </div>
    
  );
};

export default NavigationSearch;
