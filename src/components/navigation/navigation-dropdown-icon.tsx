import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

interface NavigationDropdownProps {
  show: boolean;
}

const NavigationDropdownIcon = ({ show }: NavigationDropdownProps) => {
  const pathname = usePathname();

  return (
    <Image
      src={`${
        !show && pathname === "/"
          ? `/assets/icon/dropdown-white.svg`
          : "/assets/icon/dropdown.svg"
      }`}
      alt="dropdown"
      height={5}
      width={20}
    />
  );
};

export default NavigationDropdownIcon;
