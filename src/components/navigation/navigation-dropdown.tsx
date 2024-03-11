import Image from "next/image";
import React from "react";

interface NavigationDropdownProps {
  show: boolean;
}

const NavigationDropdown = ({ show }: NavigationDropdownProps) => {
  return (
    <Image
      src={"/assets/dropdown.svg"}
      alt="dropdown"
      className={`${show ? `invert-0` : "invert"} transition-all `}
      height={5}
      width={20}
    />
  );
};

export default NavigationDropdown;
