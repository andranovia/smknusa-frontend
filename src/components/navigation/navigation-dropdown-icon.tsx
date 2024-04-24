import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

interface NavigationDropdownProps {
  show: boolean;
}

const NavigationDropdownIcon = ({ show }: NavigationDropdownProps) => {
  const pathname = usePathname();
  const isActivePage =
    pathname === "/" ||
    pathname === "/news" ||
    pathname === "/profile/school-facility";

  return (
    <Image
      src={`${
        !show && isActivePage
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
