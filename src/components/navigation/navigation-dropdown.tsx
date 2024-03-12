import Image from "next/image";
import React from "react";

interface NavigationDropdownProps {
  show: boolean;
}

const NavigationDropdown = ({ show }: NavigationDropdownProps) => {
  return (
    <Image
      src={`${show ? `/assets/dropdown.svg` : "/assets/dropdown-white.svg"}`}
      alt="dropdown"
      height={5}
      width={20}
    />
  );
};

export default NavigationDropdown;
