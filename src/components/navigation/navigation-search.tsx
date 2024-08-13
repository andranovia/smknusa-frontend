import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { defaultTransition } from "../animation/transition";
import { useActivePage } from "@/contexts/ActivePageContext";

interface NavigationSearchProps {
  show: boolean;
  searchToggle: boolean;
  setSearchToggle: Dispatch<SetStateAction<boolean>>
}

const NavigationSearch = ({ show, searchToggle, setSearchToggle }: NavigationSearchProps) => {

  const { activePage } = useActivePage();


  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: searchToggle ? 1 : 0, pointerEvents: searchToggle ? "auto" : "none" }} className="z-40 fixed w-screen left-0 bottom-0 h-screen bg-opacity-40 bg-primary backdrop-blur-sm" />

      <motion.div
        transition={defaultTransition}
        onClick={() => setSearchToggle(!searchToggle)}
      >
        <Image
          src={"/assets/icon/search.svg"}
          alt="search"
          className={`${!show && activePage
            ? searchToggle
              ? `invert-0`
              : "xl:invert-0 invert"
            : "invert"
            } transition-all w-5 h-5 `}
          width={22}
          height={22}
        />
      </motion.div>

    </>
  );
};

export default NavigationSearch;
