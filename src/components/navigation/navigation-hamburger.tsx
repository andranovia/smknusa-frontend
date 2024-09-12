import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Heading, Paragraph } from "../ui/typography";
import { defaultTransition } from "../animation/transition";

type NavigationLinkData = {
  linkDropdownData: {
    text: string;
    description: string;
    linkRef: string;
  };
};

const navbarDropdownData: { [key: string]: NavigationLinkData[] } = {
  Profile: [
    {
      linkDropdownData: {
        text: "Sambutan Kepala Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        linkRef: "/profile/welcome-speech",
      },
    },
    {
      linkDropdownData: {
        text: "Visi dan Misi",
        description: "Berisi sambutan resmi dari kepala sekolah",
        linkRef: "/profile/vision-mision",
      },
    },
    {
      linkDropdownData: {
        text: "Struktur Organisasi Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        linkRef: "/profile/structure",
      },
    },
    {
      linkDropdownData: {
        text: "Program Kerja Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        linkRef: "/profile/course-work",
      },
    },
    {
      linkDropdownData: {
        text: "Komite Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        linkRef: "/profile/school-committe",
      },
    },
    {
      linkDropdownData: {
        text: "Fasilitas Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        linkRef: "/profile/school-facility",
      },
    },
    {
      linkDropdownData: {
        text: "Sejarah Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        linkRef: "/profile/history",
      },
    },
  ],
  Akademik: [
    {
      linkDropdownData: {
        text: "Data Warga Sekolah",
        description: "Berisi sambutan resmi dari kepala sekolah",
        linkRef: "/academic/resident-data",
      },
    },
    {
      linkDropdownData: {
        text: "Ekstrakulikuler",
        description: "Berisi sambutan resmi dari kepala sekolah",

        linkRef: "/academic/extracurricular",
      },
    },
    {
      linkDropdownData: {
        text: "E-Learning",
        description: "Berisi sambutan resmi dari kepala sekolah",
        linkRef: "/academic/e-learn",
      },
    },
    {
      linkDropdownData: {
        text: "PPDB",
        description: "Berisi sambutan resmi dari kepala sekolah",
        linkRef: "https://ppdbjatim.net/",
      },
    },
    {
      linkDropdownData: {
        text: "Jurusan",
        description: "Berisi sambutan resmi dari kepala sekolah",
        linkRef: "/academic/major",
      },
    },
    {
      linkDropdownData: {
        text: "Form Perangkat Ajar",
        description: "Berisi sambutan resmi dari kepala sekolah",
        linkRef: "/academic/device-form",
      },
    },
  ],
  BKK: [
    {
      linkDropdownData: {
        text: "Kemitraan",
        description: "Berisi sambutan resmi dari kepala sekolah",
        linkRef: "/bkk/partnership",
      },
    },
    {
      linkDropdownData: {
        text: "Lowongan Pekerjaan",
        description: "Berisi sambutan resmi dari kepala sekolah",
        linkRef: "/bkk/job",
      },
    },
  ],
  Info: [
    {
      linkDropdownData: {
        text: "Berita",
        description: "Berisi sambutan resmi dari kepala sekolah",
        linkRef: "/info/news",
      },
    },
    {
      linkDropdownData: {
        text: "Article",
        description: "Berisi sambutan resmi dari kepala sekolah",
        linkRef: "/info/article",
      },
    },
  ],
};

const NavigationMenuItem = ({
  name,
  currentDropdown,
  setCurrentDropdown,
  setShowMenu,
}: {
  name: string;
  currentDropdown: string | null;
  setCurrentDropdown: React.Dispatch<React.SetStateAction<string | null>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const isOpen = currentDropdown === name;

  const handleToggleDropdown = () => {
    setCurrentDropdown(isOpen ? null : name);
  };
  return (
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? (name === "BKK" ? "11rem" : "20rem") : "4rem",
      }}
      transition={defaultTransition}
      className={`flex flex-col gap-4 my-3 relative overflow-hidden ${
        name === "BKK" ? "lg:col-span-2" : ""
      }`}
    >
      <div
        className="flex justify-between items-center"
        onClick={() => handleToggleDropdown()}
      >
        <Heading type="h5" className="text-white font-semibold">
          {name}
        </Heading>
        <Image
          src={`/assets/icon/dropdown-white.svg`}
          alt="dropdown"
          height={20}
          width={20}
        />
      </div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 200 }}
        transition={{ ...defaultTransition }}
        className="flex flex-col px-3 sm:px-6 gap-2 absolute bottom-8"
      >
        {navbarDropdownData[name].map((item, index) => (
          <Link
            href={item.linkDropdownData.linkRef}
            key={index}
            onClick={() => setShowMenu(false)}
          >
            <Paragraph className="text-white font-medium text-base">
              {item.linkDropdownData.text}
            </Paragraph>
          </Link>
        ))}
      </motion.div>

      <hr className="border border-white my-2" />
    </motion.div>
  );
};

const NavigationHamburger = ({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [currentDropdown, setCurrentDropdown] = useState<string | null>(null);
  const isMobile = useMediaQuery("only screen and (max-width: 576px)");

  return (
    <motion.div
      initial={{ x: isMobile ? 600 : 1050 }}
      animate={{ x: showMenu ? 0 : isMobile ? 600 : 1050 }}
      transition={{ ...defaultTransition, type: "tween" }}
      className={` fixed top-0 left-0 w-full min-h-screen bg-primary z-40 flex flex-col gap-4 ${
        showMenu ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="left-3 top-3 relative">
        <motion.svg
          width="91"
          height="92"
          viewBox="0 0 91 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setShowMenu(false)}
        >
          <motion.path
            d="M56.5688 57.3139L33.9414 34.6865"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: showMenu ? 1 : 0 }}
            transition={defaultTransition}
          />
          <motion.path
            d="M52.7969 38.4575L56.5681 34.6863"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: showMenu ? 1 : 0 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
          />
          <motion.path
            d="M33.9414 57.3135L44.614 46.6409"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: showMenu ? 1 : 0 }}
            transition={{ ...defaultTransition, delay: 0.4 }}
          />
          <motion.path
            d="M56.5688 57.3139L33.9414 34.6865"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: showMenu ? 1 : 0 }}
            transition={{ ...defaultTransition, delay: 0.6 }}
          />
        </motion.svg>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 px-[34px]">
        <NavigationMenuItem
          name="Akademik"
          currentDropdown={currentDropdown}
          setCurrentDropdown={setCurrentDropdown}
          setShowMenu={setShowMenu}
        />
        <NavigationMenuItem
          name="Profile"
          currentDropdown={currentDropdown}
          setCurrentDropdown={setCurrentDropdown}
          setShowMenu={setShowMenu}
        />
        <NavigationMenuItem
          name="BKK"
          currentDropdown={currentDropdown}
          setCurrentDropdown={setCurrentDropdown}
          setShowMenu={setShowMenu}
        />
        <NavigationMenuItem
          name="Info"
          currentDropdown={currentDropdown}
          setCurrentDropdown={setCurrentDropdown}
          setShowMenu={setShowMenu}
        />
      </div>
      <div className="flex gap-4 flex-col px-4  pb-[22px] fixed bg-primary bottom-0 w-full">
        <hr className="border border-white my-2" />
        <div className="flex items-center">
          {" "}
          <Image
            src={"/assets/icon/logo-skansa.svg"}
            alt=""
            height={55}
            width={55}
            quality={100}
            className="w-10 xl:w-auto h-auto"
          />
          <h2 className="ml-2 text-sm xl:text-lg font-bold  text-white">
            SMK NEGERI 1 <br className="block" />
            PURWOSARI
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default NavigationHamburger;
