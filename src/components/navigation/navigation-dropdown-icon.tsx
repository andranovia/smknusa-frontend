import Image from "next/image";
import React from "react";

interface NavigationDropdownProps {
  show: boolean;
}

const NavigationDropdownIcon = ({ show }: NavigationDropdownProps) => {
  return (
    <Image
      src={`${
        show ? `/assets/icon/dropdown.svg` : "/assets/icon/dropdown-white.svg"
      }`}
      alt="dropdown"
      height={5}
      width={20}
    />
  );
};

export default NavigationDropdownIcon;
