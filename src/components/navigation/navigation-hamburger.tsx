import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
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
        description: "Berisi Informasi Visi dan Misi SMK",
        linkRef: "/profile/vision-mision",
      },
    },
    {
      linkDropdownData: {
        text: "Struktur Organisasi Sekolah",
        description: "Berisi Tatanan Struktur Organisasi SMK",
        linkRef: "/profile/structure",
      },
    },
    {
      linkDropdownData: {
        text: "Program Kerja Sekolah",
        description: "Berisi Tatanan Program Kerja SMK",
        linkRef: "/profile/course-work",
      },
    },
    {
      linkDropdownData: {
        text: "Komite Sekolah",
        description: "Berisi Tatanan Komite SMK",
        linkRef: "/profile/school-committe",
      },
    },
    {
      linkDropdownData: {
        text: "Fasilitas Sekolah",
        description: "Berisi Detail Kelengkapan Fasilitas SMK",
        linkRef: "/profile/school-facility",
      },
    },
    {
      linkDropdownData: {
        text: "Sejarah Sekolah",
        description: "Berisi Informasi Mengenai Sejarah Berdirinya SMK",
        linkRef: "/profile/history",
      },
    },
  ],
  Akademik: [
    {
      linkDropdownData: {
        text: "Data Warga Sekolah",
        description: "Berisi  Data Warga SMK Negeri 1 Purwosari",
        linkRef: "/academic/resident-data",
      },
    },
    {
      linkDropdownData: {
        text: "Ekstrakulikuler",
        description: "Berisi Data Ekstrakulikuler SMK Negeri 1 Purwosari",
        linkRef: "/academic/extracurricular",
      },
    },
    {
      linkDropdownData: {
        text: "E-Learning",
        description: "Berisi Informasi E-Learning yang di Gunakan SMK",
        linkRef: "/academic/e-learn",
      },
    },
    {
      linkDropdownData: {
        text: "PPDB",
        description: "Berisi Link untuk Menuju ke Website PPDB",
        linkRef: "https://ppdbjatim.net/",
      },
    },
    {
      linkDropdownData: {
        text: "Jurusan",
        description: "Berisi Data Jurusan SMK Negeri 1 Purwosari",
        linkRef: "/academic/major",
      },
    },
    {
      linkDropdownData: {
        text: "Form Perangkat Ajar",
        description: "Berisi Data Perangkat Ajar SMK Negeri 1 Purwosari",
        linkRef: "/academic/device-form",
      },
    },
  ],
  Info: [
    {
      linkDropdownData: {
        text: "Berita",
        description: "Berisi Informasi Mengenai Berita yang Ada di SMK",
        linkRef: "/info/news",
      },
    },
    {
      linkDropdownData: {
        text: "Artikel",
        description: "Berisi Informasi Mengenai Artikel Yang Ada di SMK",
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
  const pathname = usePathname();

  const handleToggleDropdown = () => {
    setCurrentDropdown(isOpen ? null : name);
  };
  return (
    <motion.div
      initial={false}
      animate={{
        height: isOpen
          ? name === "Profile"
            ? "21rem"
            : name === "Info"
            ? "9.5rem"
            : "18rem"
          : "4rem",
      }}
      transition={defaultTransition}
      className={`flex flex-col gap-4 my-3 relative overflow-hidden `}
    >
      <div
        className="flex justify-between items-center bg-white"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleToggleDropdown();
        }}
      >
        <div className="flex justify-between items-center w-full">
          <Heading type="h5" className="text-primary font-semibold">
            {name}
          </Heading>
          <Image
            src={`/assets/icon/dropdown.svg`}
            alt="dropdown"
            height={20}
            width={20}
            className={`w-5 h-5 xl:invert-0 transition-transform ${
              name === currentDropdown ? "-rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 0 }}
        transition={{ ...defaultTransition }}
        className="flex flex-col gap-4 absolute top-16 "
      >
        {navbarDropdownData[name]?.map((item, index) => (
          <Link
            href={item.linkDropdownData.linkRef}
            key={index}
            onClick={() => setShowMenu(false)}
          >
            <Paragraph
              className={` font-medium text-base ${
                pathname === item.linkDropdownData.linkRef
                  ? "text-primary"
                  : "text-gray-light"
              }`}
            >
              {item.linkDropdownData.text}
            </Paragraph>
          </Link>
        ))}
      </motion.div>

      <hr
        className={`border  ${
          currentDropdown === name ? "border-[#F5C451]" : "border-[#E2E8F0]"
        } my-2`}
      />
    </motion.div>
  );
};

const NavigationHamburger = ({
  showMenu,
  setShowMenu,
  currentDropdown,
  setCurrentDropdown,
}: {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  currentDropdown: string | null;
  setCurrentDropdown: React.Dispatch<React.SetStateAction<string | null>>;
}) => {

  return (
    <motion.div
      initial={{ y: -1400 }}
      animate={{ y: showMenu ? 0 : -1400 }}
      transition={{ ...defaultTransition, type: "tween" }}
      className={` fixed  left-0 w-full  min-h-screen bg-white top-[64px] z-30 flex flex-col items-center gap-4 ${
        showMenu ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 px-6 mt-6 md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-1xl-content 2xl:max-w-max-[1222px] w-full  ">
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
          name="Info"
          currentDropdown={currentDropdown}
          setCurrentDropdown={setCurrentDropdown}
          setShowMenu={setShowMenu}
        />
        <div
          className={`flex flex-col gap-4 my-3 relative overflow-hidden h-[4rem]`}
        >
          <div className="flex justify-between items-center bg-white">
            <Link
              href="https://bkk.smkn1purwosari.sch.id/"
              className="flex justify-between items-center w-full"
            >
              <Heading type="h5" className="text-primary font-semibold">
                BKK
              </Heading>
            </Link>
          </div>

          <hr className={`border-[#E2E8F0] border`} />
        </div>
        <div
          className={`flex flex-col gap-4 my-3 relative overflow-hidden h-[4rem]`}
        >
          <div className="flex justify-between items-center bg-white">
            <Link
              href="http://36.93.85.150:8154/"
              className="flex justify-between items-center w-full"
            >
              <Heading type="h5" className="text-primary font-semibold">
                E-Raport
              </Heading>
            </Link>
          </div>

          <hr className={`border-[#E2E8F0] border `} />
        </div>
      </div>
    </motion.div>
  );
};

export default NavigationHamburger;
