import React, { useState } from "react";
import NavigationDropdown from "./navigation-dropdown-icon";
import Link from "next/link";
import { MenuItem } from "./navigation-dropdown-menu-item";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

interface navLink {
  headName: string;
  linkDropdownData: {
    text: string;
    description: string;
    icon: string;
  };
}

interface NavigationItemProps {
  name: string;
  dropdown?: boolean;
  show: boolean;
  route: string;
}

const navbarDropdownData: { [key: string]: navLink[] } = {
  Profile: [
    {
      headName: "Profile",
      linkDropdownData: {
        text: "Sambutan Kepala Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/sambutan-kepsek.svg",
      },
    },
    {
      headName: "Profile",
      linkDropdownData: {
        text: "Visi dan Misi",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/visi-misi.svg",
      },
    },
    {
      headName: "Profile",
      linkDropdownData: {
        text: "Struktur Organisasi Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/struktur.svg",
      },
    },
    {
      headName: "Profile",
      linkDropdownData: {
        text: "Program Kerja Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/proker.svg",
      },
    },
    {
      headName: "Profile",
      linkDropdownData: {
        text: "Fasilitas Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/building.svg",
      },
    },
    {
      headName: "Profile",
      linkDropdownData: {
        text: "Sejarah Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/brush.svg",
      },
    },
    {
      headName: "Profile",
      linkDropdownData: {
        text: "Identitas Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/personalcard.svg",
      },
    },
  ],
  Akademik: [
    {
      headName: "Profile",
      linkDropdownData: {
        text: "Sambutan Kepala Sekolahsss",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/sambutan-kepsek.svg",
      },
    },
    {
      headName: "Profile",
      linkDropdownData: {
        text: "Visi dan Misisss",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/visi-misi.svg",
      },
    },
    {
      headName: "Profile",
      linkDropdownData: {
        text: "Struktur Organisasi Sekolahssss",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/struktur.svg",
      },
    },
    {
      headName: "Profile",
      linkDropdownData: {
        text: "Program Kerja Sekolahssssss",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/proker.svg",
      },
    },
    {
      headName: "Profile",
      linkDropdownData: {
        text: "Fasilitas Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/building.svg",
      },
    },
    {
      headName: "Profile",
      linkDropdownData: {
        text: "Sejarah Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/brush.svg",
      },
    },
    {
      headName: "Profile",
      linkDropdownData: {
        text: "Identitas Sekolahs",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/personalcard.svg",
      },
    },
  ],
};

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const NavigationItem = ({
  name,
  dropdown,
  show,
  route,
}: NavigationItemProps) => {
  const [currentDropdown, setCurrentDropdown] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownControls = useAnimation();

  const dropdownData = currentDropdown
    ? navbarDropdownData[currentDropdown]
    : null;

  const handleOpenDropdown = () => {
    setShowDropdown(true);
    setCurrentDropdown(name);
    dropdownControls.start("animate");
  };

  const handleCloseDropdown = () => {
    setCurrentDropdown(null);
    dropdownControls.start("initial");
  };

  return (
    <>
      <div
        className="flex justify-start"
        onMouseLeave={() => handleCloseDropdown()}
      >
        <li
          onMouseEnter={() => handleOpenDropdown()}
          className={`relative flex justify-center items-center cursor-po gap-1 ${
            show ? "text-[#9DA5B1]" : "text-white"
          } > `}
        >
          <Link href={route} className="flex items-center">
            {name}
          </Link>
          {dropdown && <NavigationDropdown show={show} />}
        </li>

        {showDropdown ? (
          <div className="absolute  ">
            <motion.div
              initial={"initial"}
              animate={dropdownControls}
              variants={{
                initial: { opacity: 0, scale: 0.85, y: 10 },
                animate: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={transition}
              className=" mt-14  z-20 rounded-b-[10px] rounded-r-[10px] bg-white"
            >
              {dropdownData?.map((data, index) => (
                <div key={index}>
                  <MenuItem
                    active={currentDropdown}
                    item={name}
                    transition={transition}
                  >
                    <div className="flex  gap-4 pr-14 pl-4 py-2">
                      <Image
                        src={data.linkDropdownData.icon}
                        alt={data.linkDropdownData.icon}
                        width={40}
                        height={40}
                        className="w-5 h-5 opacity-50"
                      />
                      <div className="flex flex-col items-start">
                        <h2 className="text-[#9DA5B1] font-[600] text-[16px]">
                          {data.linkDropdownData.text}
                        </h2>
                      </div>
                    </div>
                  </MenuItem>
                </div>
              ))}
            </motion.div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default NavigationItem;
