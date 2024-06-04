import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

type NavigationDropdownProps = {
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
      height={20}
      width={20}
      className="w-5 h-5"
    />
  );
};

export default NavigationDropdownIcon;
