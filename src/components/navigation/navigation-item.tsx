import React, { useState } from "react";
import NavigationDropdown from "./navigation-dropdown-icon";
import { MenuItem } from "./navigation-dropdown-menu-item";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

import Link from "next/link";
import { defaultTransition } from "../animation/transition";
import NavigationItemAnimate from "./navigation-item-animate";

export type NavigationLinkData =  {
  linkDropdownData: {
    text: string;
    description: string;
    icon: string;
    linkRef: string;
  };
}

interface NavigationItemProps {
  name: string;
  dropdown?: boolean;
  show: boolean;
  route?: string;
}

const navbarDropdownData: { [key: string]: NavigationLinkData[] } = {
  Profile: [
    {
      linkDropdownData: {
        text: "Sambutan Kepala Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/profile/sambutan-kepsek.svg",
        linkRef: "/profile/welcome-speech",
      },
    },
    {
      linkDropdownData: {
        text: "Visi dan Misi",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/profile/visi-misi.svg",
        linkRef: "/profile/vision-mision",
      },
    },
    {
      linkDropdownData: {
        text: "Struktur Organisasi Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/profile/struktur.svg",
        linkRef: "/profile/structure",
      },
    },
    {
      linkDropdownData: {
        text: "Program Kerja Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/profile/proker.svg",
        linkRef: "/profile/course-work",
      },
    },
    {
      linkDropdownData: {
        text: "Komite Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/profile/komite.svg",
        linkRef: "/profile/school-committe",
      },
    },
    {
      linkDropdownData: {
        text: "Fasilitas Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/profile/fasilitas.svg",
        linkRef: "/profile/school-facility",
      },
    },
    {
      linkDropdownData: {
        text: "Sejarah Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/profile/sejarah.svg",
        linkRef: "/profile/history",
      },
    },
    {
      linkDropdownData: {
        text: "Identitas Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/profile/identitas.svg",
        linkRef: "/profile/welcome-speech",
      },
    },
  ],
  Akademik: [
    {
      linkDropdownData: {
        text: "Data Warga Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/akademik/data-warga.svg",
        linkRef: "/profile/welcome-speech",
      },
    },
    {
      linkDropdownData: {
        text: "Ekstrakulikuler",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/akademik/ekstrakulikuler.svg",
        linkRef: "/profile/welcome-speech",
      },
    },
    {
      linkDropdownData: {
        text: "E-Raport",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/akademik/e-raport.svg",
        linkRef: "/profile/welcome-speech",
      },
    },
    {
      linkDropdownData: {
        text: "E-Learning",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/akademik/e-learning.svg",
        linkRef: "/profile/welcome-speech",
      },
    },
    {
      linkDropdownData: {
        text: "PPDB",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/akademik/ppdb.svg",
        linkRef: "/profile/welcome-speech",
      },
    },
    {
      linkDropdownData: {
        text: "Form Perangkat Ajar",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/akademik/form-pa.svg",
        linkRef: "/profile/welcome-speech",
      },
    },
  ],
  BKK: [
    {
      linkDropdownData: {
        text: "Kemitraan",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/Bkk/kemitraan.svg",
        linkRef: "/profile/welcome-speech",
      },
    },
    {
      linkDropdownData: {
        text: "Alumni - Alumni Hebat",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/Bkk/alumni.svg",
        linkRef: "/profile/welcome-speech",
      },
    },
    {
      linkDropdownData: {
        text: "Lowongan Pekerjaan",
        description: "Berisi sambutan resmi dari kepala sekolah",
        icon: "/assets/nav-dropdown-icon/Bkk/lowongan.svg",
        linkRef: "/profile/welcome-speech",
      },
    },
  ],
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
    dropdownControls.start("animate");
    setShowDropdown(true);
    setCurrentDropdown(name);
  };

  const handleCloseDropdown = () => {
    setCurrentDropdown(null);
    setShowDropdown(false);
  };

  return (
    <>
      <div
        className="flex justify-start cursor-pointer"
        onMouseLeave={() => handleCloseDropdown()}
      >
        <li
          onMouseEnter={() => handleOpenDropdown()}
          className={`relative flex justify-center items-center cursor-po gap-1   rounded-md  w-min-content
          before:border-0 before:absolute before:bottom-0 before:right-0 before:border-transparent before:transition-colors before:duration-500
          before:w-full hover:before:border-[1px] hover:before:left-0 hover:before:border-[#F5C451] cursor-pointer z-20`}
        >
          {route ? <Link href={route}>{name}</Link> : name}

          {dropdown && (
            <motion.div animate={{ rotate: showDropdown ? 180 : 0 }}>
              <NavigationDropdown show={show} />
            </motion.div>
          )}
        </li>
        <AnimatePresence>
          {showDropdown && (
            <div className="absolute">
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={{
                  initial: { opacity: 0.5, scale: 0.85, y: 10 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, y: 10 },
                }}
                className="w-[24rem] mt-14 z-20 rounded-b-[10px] rounded-r-[10px] bg-white overflow-hidden"
              >
                {dropdownData?.map((data, index) => (
                  <div key={index}>
                    <MenuItem
                      active={currentDropdown}
                      item={name}
                      transition={defaultTransition}
                    >
                      <NavigationItemAnimate itemData={data}/>
                    </MenuItem>
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NavigationItem;
