import { useMediaQuery } from "@uidotdev/usehooks";
import Image from "next/image";

import React from "react";
import { useActivePage } from "@/contexts/ActivePageContext";

type NavigationDropdownProps = {
  show: boolean;
};

const NavigationDropdownIcon = ({ show }: NavigationDropdownProps) => {
  const { activePage } = useActivePage();
  const isMobile = useMediaQuery("only screen and (max-width: 1023.98px)");
  return (
    <Image
      src={`${
        !show && activePage && !isMobile
          ? `/assets/icon/dropdown-white.svg`
          : "/assets/icon/dropdown.svg"
      }`}
      alt="dropdown"
      height={20}
      width={20}
      className="w-5 h-5 xl:invert-0"
    />
  );
};

export default NavigationDropdownIcon;
