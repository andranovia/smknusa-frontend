import React from "react";
import NavigationDropdown from "./navigation-dropdown";

interface NavigationItemProps {
  name: string;
  dropdown?: boolean;
  show: boolean;
}

const NavigationItem = ({ name, dropdown, show }: NavigationItemProps) => {
  return (
    <>
      <li
        className={`relative flex justify-center items-center gap-1 ${
          show ? "text-[#9DA5B1]" : "text-white"
        } > `}
      >
        <a href="#" className="flex items-center">
          {name}
        </a>
        {dropdown && <NavigationDropdown show={show} />}
      </li>
    </>
  );
};

export default NavigationItem;
