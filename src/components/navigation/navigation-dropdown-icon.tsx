import { useActivePage } from "@/contexts/ActivePageContext";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

type NavigationDropdownProps = {
  show: boolean;
}

const NavigationDropdownIcon = ({ show }: NavigationDropdownProps) => {
  const {activePage} = useActivePage()
  return (
    <Image
      src={`${
        !show && activePage
          ? `/assets/icon/dropdown-white.svg`
          : "/assets/icon/dropdown.svg"
      }`}
      alt="dropdown"
      height={20}
      width={20}
      className="w-5 h-5 invert xl:invert-0"
    />
  );
};

export default NavigationDropdownIcon;
