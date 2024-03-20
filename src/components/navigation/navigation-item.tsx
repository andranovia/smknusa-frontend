import React from "react";
import NavigationDropdown from "./navigation-dropdown";
import Link from "next/link";

interface NavigationItemProps {
  name: string;
  dropdown?: boolean;
  show: boolean;
  route: string
}

const NavigationItem = ({ name, dropdown, show, route }: NavigationItemProps) => {
  return (
    <>
      <li
        className={`relative flex justify-center items-center gap-1 ${
          show ? "text-[#9DA5B1]" : "text-white"
        } > `}
      >
        <Link href={route} className="flex items-center">
          {name}
        </Link>
        {dropdown && <NavigationDropdown show={show} />}
      </li>
    </>
  );
};

export default NavigationItem;
