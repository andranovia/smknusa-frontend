import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { useActivePage } from "@/contexts/ActivePageContext";
import { defaultTransition } from "../animation/transition";

interface NavigationSearchProps {
  show: boolean;
  searchToggle: boolean;
  setSearchToggle: Dispatch<SetStateAction<boolean>>;
}

const NavigationSearch = ({
  show,
  searchToggle,
  setSearchToggle,
}: NavigationSearchProps) => {
  const { activePage } = useActivePage();

  return (
    <>
      <motion.div
        className="cursor-pointer"
        transition={defaultTransition}
        onClick={() => setSearchToggle(!searchToggle)}
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
    </>
  );
};

export default NavigationSearch;
