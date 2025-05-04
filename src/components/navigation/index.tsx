"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "@uidotdev/usehooks";
import { usePathname } from "next/navigation";
import { useActivePage } from "@/contexts/ActivePageContext";
import { useActiveToast } from "@/contexts/ActiveToastContext";
import NavigationItem from "./navigation-item";
import NavigationLanguage from "./navigation-language";
import NavigationSearch from "./navigation-search";
import NavigationSearchResult from "./navigation-search-result";
import NavigationHamburger from "./navigation-hamburger";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useMediaQuery("only screen and (max-width : 1023.98px)");
  const { activePage } = useActivePage();
  const pathname = usePathname();
  const [searchToggle, setSearchToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { handleActiveUnavailableToast } = useActiveToast();
  const [currentDropdown, setCurrentDropdown] = useState<string | null>(
    "Akademik"
  );

  useEffect(() => {
    const controlNavbar = () => {
      if (isMobile) {
        if (showMenu) {
          setShow(true);
        } else {
          if (window.scrollY > lastScrollY) {
            setShow(false);
          } else {
            setShow(true);
          }
        }
      } else if (window.scrollY > 0) {
        setShow(true);
      } else {
        setShow(false);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, isMobile, showMenu]);

  const handleToggleMenu = () => {
    if (currentDropdown === null) {
      setCurrentDropdown("Akademik");
    }
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div
        className={`flex items-center  xl:shadow-none  shadow-md  justify-center ${
          showMenu ? "" : "xl:rounded-lg"
        } bg-white xl:bg-transparent  xl:px-2.5   z-40  transition-[padding,max-width,transform] ${
          show
            ? `  text-blue-base pt-0 xl:pt-2 `
            : `  ${
                activePage
                  ? `-translate-y-20 xl:translate-y-0 xl:pt-8 xl:text-white  ${
                      pathname === "/"
                        ? ""
                        : "xl:pt-1 xl:mt-[15px] xl:max-w-[98%]"
                    } before:backdrop-blur-sm before:backdrop-hack `
                  : "xl:translate-y-2 xl:pt-0 "
              }`
        } 
        ${pathname.startsWith("/print") ? "hidden" : ""}
        fixed w-full  delay-0 `}
      >
        <div
          className={`flex  items-center justify-center  xl:shadow-md  md:max-w-md-content lg:max-w-lg-content xl:max-w-full   w-full py-3 transition-all rounded-[10px] px-4 2xl:px-11  ${
            !show && activePage
              ? "xl:bg-opacity-0  bg-white font-[800] xl:font-[900]"
              : `bg-opacity-100 bg-white font-[800] `
          }  `}
        >
          <div className="flex  items-center w-full  2xl:max-w-[1492.8px] ">
            <Link href={"/"} className="2xl:w-[52%] xl:w-[40%] w-full">
              <div className="flex items-center">
                <Image
                  src={"/assets/icon/logo-skansa.svg"}
                  alt=""
                  height={55}
                  width={55}
                  quality={100}
                  className="w-10 xl:w-auto h-auto"
                />

                <h2 className="ml-2 text-sm xl:text-lg  ">
                  SMK NEGERI 1 <br className="block" />
                  PURWOSARI
                </h2>
              </div>
            </Link>
            <div className="flex xl:justify-between  xl:w-full w-auto   font-[600] ">
              <div
                className={`xl:flex hidden  justify-center items-center gap-8 ${
                  !show && activePage ? "text-white" : " text-gray-light"
                }`}
              >
                <NavigationItem
                  name="Profile"
                  show={show}
                  dropdown={true}
                  route="/profile"
                />
                <NavigationItem
                  name="Akademik"
                  show={show}
                  dropdown={true}
                  route="/academic"
                />
                <NavigationItem name="BKK" show={show} route={"/w-bkk"} />
                <NavigationItem
                  name="Info"
                  show={show}
                  dropdown={true}
                  route={"/info"}
                />
                <NavigationItem
                  name="E-Raport"
                  show={show}
                  route={"/e-raport"}
                />
              </div>
              <div className="flex items-center xl:space-x-4 gap-4 xl:gap-0 w-max">
                <NavigationSearch
                  show={show}
                  searchToggle={searchToggle}
                  setSearchToggle={setSearchToggle}
                />
                <NavigationLanguage show={show} />
                <Image
                  src={"/assets/icon/user-profile.svg"}
                  alt="user"
                  onClick={() => handleActiveUnavailableToast()}
                  height={20}
                  width={20}
                  className={`${
                    !show && activePage ? `xl:invert-0 invert` : "invert"
                  } transition-all  w-5 h-5 hidden xl:block cursor-pointer`}
                />
                {isMobile &&
                  (!showMenu ? (
                    <Image
                      src={"/assets/icon/hamburger.svg"}
                      alt="hamburger"
                      width={25}
                      height={25}
                      className="w-6 h-6 "
                      onClick={() => handleToggleMenu()}
                    />
                  ) : (
                    <Image
                      src={"/assets/icon/close-square-blue.svg"}
                      alt="hamburger"
                      width={25}
                      height={25}
                      className="w-6 h-6 "
                      onClick={() => handleToggleMenu()}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMobile && !pathname.startsWith("/print") ? (
        <>
          <NavigationHamburger
            currentDropdown={currentDropdown}
            setCurrentDropdown={setCurrentDropdown}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        </>
      ) : null}
      <NavigationSearchResult
        searchToggle={searchToggle}
        setSearchToggle={setSearchToggle}
      />
    </>
  );
};

export default Navbar;
