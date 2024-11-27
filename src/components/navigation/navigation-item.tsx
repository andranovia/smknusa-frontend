import React, { useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

import Link from "next/link";
import { useMediaQuery } from "@uidotdev/usehooks";
import { usePathname } from "next/navigation";
import { useActivePage } from "@/contexts/ActivePageContext";
import { cn } from "@/utils/cn";
import NavigationItemAnimate from "./navigation-item-animate";
import { defaultTransition } from "../animation/transition";
import { NavigationDropdownMenuItem } from "./navigation-dropdown-menu-item";
import NavigationDropdown from "./navigation-dropdown-icon";

export type NavigationLinkData = {
  linkDropdownData: {
    text: string;
    description: string;
    icon: string;
    linkRef: string;
  };
};

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
        description: "Berisi Informasi Visi dan Misi SMK",
        icon: "/assets/nav-dropdown-icon/profile/visi-misi.svg",
        linkRef: "/profile/vision-mision",
      },
    },
    {
      linkDropdownData: {
        text: "Struktur Organisasi Sekolah",
        description: "Berisi Tatanan Struktur Organisasi SMK",
        icon: "/assets/nav-dropdown-icon/profile/struktur.svg",
        linkRef: "/profile/structure",
      },
    },
    {
      linkDropdownData: {
        text: "Program Kerja Sekolah",
        description: "Berisi Tatanan Program Kerja SMK",
        icon: "/assets/nav-dropdown-icon/profile/proker.svg",
        linkRef: "/profile/course-work",
      },
    },
    {
      linkDropdownData: {
        text: "Komite Sekolah",
        description: "Berisi Tatanan Komite SMK",
        icon: "/assets/nav-dropdown-icon/profile/komite.svg",
        linkRef: "/profile/school-committe",
      },
    },
    {
      linkDropdownData: {
        text: "Fasilitas Sekolah",
        description: "Berisi Detail Kelengkapan Fasilitas SMK",
        icon: "/assets/nav-dropdown-icon/profile/fasilitas.svg",
        linkRef: "/profile/school-facility",
      },
    },
    {
      linkDropdownData: {
        text: "Sejarah Sekolah",
        description: "Berisi Informasi Mengenai Sejarah Berdirinya SMK",
        icon: "/assets/nav-dropdown-icon/profile/sejarah.svg",
        linkRef: "/profile/history",
      },
    },
  ],
  Akademik: [
    {
      linkDropdownData: {
        text: "Data Warga Sekolah",
        description: "Berisi Data Warga SMK Negeri 1 Purwosari",
        icon: "/assets/nav-dropdown-icon/akademik/data-warga.svg",
        linkRef: "/academic/resident-data",
      },
    },
    {
      linkDropdownData: {
        text: "Ekstrakulikuler",
        description: "Berisi Data Ekstrakulikuler SMK Negeri 1 Purwosari",
        icon: "/assets/nav-dropdown-icon/akademik/ekstrakulikuler.svg",
        linkRef: "/academic/extracurricular",
      },
    },
    {
      linkDropdownData: {
        text: "E-Learning",
        description: "Berisi Informasi E-Learning yang di Gunakan SMK",
        icon: "/assets/nav-dropdown-icon/akademik/e-learning.svg",
        linkRef: "/academic/e-learn",
      },
    },
    {
      linkDropdownData: {
        text: "PPDB",
        description: "Berisi Link untuk Menuju ke Website PPDB",
        icon: "/assets/nav-dropdown-icon/akademik/ppdb.svg",
        linkRef: "https://ppdbjatim.net/",
      },
    },
    {
      linkDropdownData: {
        text: "Jurusan",
        description: "Berisi Data Jurusan SMK Negeri 1 Purwosari",
        icon: "/assets/nav-dropdown-icon/akademik/jurusan.svg",
        linkRef: "/academic/major",
      },
    },
    {
      linkDropdownData: {
        text: "Form Perangkat Ajar",
        description: "Berisi Data Perangkat Ajar SMK Negeri 1 Purwosari",
        icon: "/assets/nav-dropdown-icon/akademik/form-pa.svg",
        linkRef: "/academic/device-form",
      },
    },
  ],
  // BKK: [
  //   {
  //     linkDropdownData: {
  //       text: "Kemitraan",
  //       description: "Berisi Data Kemitraan SMK Negeri 1 Purwosari",
  //       icon: "/assets/nav-dropdown-icon/bkk/kemitraan.svg",
  //       linkRef: "/bkk/partnership",
  //     },
  //   },
  //   {
  //     linkDropdownData: {
  //       text: "Lowongan Pekerjaan",
  //       description: "Berisi Data Loker SMK Negeri 1 Purwosari",
  //       icon: "/assets/nav-dropdown-icon/bkk/lowongan.svg",
  //       linkRef: "/bkk/job",
  //     },
  //   },
  // ],
  Info: [
    {
      linkDropdownData: {
        text: "Berita",
        description: "Berisi Informasi Mengenai Berita yang Ada di SMK",
        icon: "/assets/nav-dropdown-icon/info/info.svg",
        linkRef: "/info/news",
      },
    },
    {
      linkDropdownData: {
        text: "Artikel",
        description: "Berisi Informasi Mengenai Artikel Yang Ada di SMK",
        icon: "/assets/nav-dropdown-icon/info/info.svg",
        linkRef: "/info/article",
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
  const basePathname = usePathname();
  const pathname = "/" + basePathname.split("/")[1];
  const isMobile = useMediaQuery("only screen and (max-width: 1023.98px)");
  const { activePage } = useActivePage();
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
        <span
          onMouseEnter={() => handleOpenDropdown()}
          className={`font-semibold  relative flex justify-center items-center  gap-1   rounded-md  w-min-content
          before:border-0 before:absolute before:bottom-0 before:right-0 before:border-transparent before:transition-colors before:duration-500
          before:w-full hover:before:border-[1px] hover:before:left-0 hover:before:border-[#F5C451] cursor-pointer z-20 ${
            route === pathname
              ? "opacity-100 before:border-[1px] "
              : pathname === "/"
              ? "opacity-100"
              : "opacity-60"
          } `}
        >
          <span
            className={`hidden xl:block ${
              show || !activePage ? "text-blue-base" : "text-white"
            }`}
          >
            {route === "/e-raport" ? (
              <Link href="http://36.93.85.150:8154/">{name}</Link>
            ) : route === "/w-bkk" ? (
              <Link href="https://bkk.smkn1purwosari.sch.id/">{name}</Link>
            ) : (
              name
            )}
          </span>
          {dropdown && (
            <motion.div animate={{ rotate: showDropdown ? 180 : 0 }}>
              <NavigationDropdown show={show} />
            </motion.div>
          )}
        </span>
        {route === "/e-raport" || route === "/w-bkk" ? null : (
          <AnimatePresence>
            {showDropdown && (
              <div className="absolute left-0 xs:left-4 md:left-14  xl:left-auto xl:ml-6  xl:top-auto h-[25rem] xl:h-auto xl:justify-start xl:items-start flex flex-col items-end justify-end">
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={{
                    initial: { opacity: 0.5, scale: 0.85, y: 10 },
                    animate: { opacity: 1, scale: 1, y: isMobile ? -420 : 0 },
                    exit: { opacity: 0, y: 10 },
                  }}
                  transition={defaultTransition}
                  className={cn(`min-w-[17rem] xs:min-w-[19rem] border-none max-h-[calc(80vh-4rem)] overflow-y-auto sm:min-w-[20rem] relative w-[90%] xl:w-[26rem] items-center justify-center grid grid-cols-2 xl:gap-0 h-fit xl:h-full xl:grid-cols-1 xl:mt-14 z-20 rounded-tl-[10px] xl:rounded-b-[10px] rounded-r-[10px] bg-white bg-opacity-100 shadow-lg xl:top-5 before:border-b-white xl:pb-0 pb-8 
                    before:content-[''] xl:before:block before:hidden before:absolute before:border-l-[10px] before:border-l-transparent before:border-r-[10px] before:border-r-transparent before:border-b-[14px] before:top-[-13.6px]  before:left-2
                  scrollbar scrollbar-w-[6px] scrollbar-thumb-[#F5C451] scrollbar-track-yellow-100`)}
                >
                  {dropdownData?.map((data, index) => (
                    <React.Fragment key={index}>
                      <Link
                        href={data.linkDropdownData.linkRef}
                        className="w-full h-[6rem] xl:h-auto"
                      >
                        <NavigationDropdownMenuItem
                          show={show}
                          active={currentDropdown}
                          item={name}
                          transition={defaultTransition}
                        >
                          <NavigationItemAnimate itemData={data} show={show} />
                        </NavigationDropdownMenuItem>
                      </Link>
                    </React.Fragment>
                  ))}
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        )}
      </div>
    </>
  );
};

export default NavigationItem;
