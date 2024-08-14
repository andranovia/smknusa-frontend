"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import NavigationItem from "./navigation-item";
import NavigationLanguage from "./navigation-language";
import NavigationSearch from "./navigation-search";
import Link from "next/link";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useActivePage } from "@/contexts/ActivePageContext";
import { usePathname } from "next/navigation";
import NavigationSearchResult from "./navigation-search-result";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useMediaQuery("only screen and (max-width : 1023.98px)");
  const { activePage } = useActivePage()
  const pathname = usePathname();
  const [searchToggle, setSearchToggle] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (isMobile) {
        if (window.scrollY > lastScrollY) {
          setShow(false);
        } else {
          setShow(true);
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
  }, [lastScrollY, isMobile]);
  return (
    <>
      
      <div
        className={`flex items-center  justify-center rounded-lg bg-white xl:bg-transparent   z-40  transition-[padding,max-width] ${show
          ? ` text-blue-base pt-0 xl:pt-2  xl:px-2.5`
          : `  ${activePage
            ? `-pt-20 xl:pt-5 xl:text-white ${pathname === "/" ? "w-screen" : "xl:mt-3 xl:max-w-[98.4%] rounded-t-md overflow-hidden"} before:backdrop-blur-sm before:backdrop-hack`
            : "xl:pt-2 "
          }`
          } fixed w-full  delay-0 `}
      >
        <div
          className={`flex  items-center 2xl:max-w-[1472.8px]  md:max-w-md-content lg:max-w-lg-content xl:max-w-full   w-full py-3 transition-all rounded-[10px] px-4 2xl:px-11  ${!show && activePage
            ? "xl:bg-opacity-0  bg-white font-[800] xl:font-[900]"
            : "bg-opacity-100 bg-white  font-[800] xl:shadow-lg"
            }  `}
        >
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
              className={`xl:flex hidden  justify-center items-center gap-8 ${!show && activePage ? "text-white" : " text-gray-light"
                }`}
            >
              <NavigationItem name="Profile" show={show} dropdown={true} route="/profile" />
              <NavigationItem name="Akademik" show={show} dropdown={true} route="/academic" />
              <NavigationItem name="BKK" show={show} dropdown={true} route="/bkk" />
              <NavigationItem name="Berita" show={show} route={"/news"} />
              <NavigationItem name="Artikel" show={show} route={"/article"} />
            </div>
            <div className="flex items-center xl:space-x-4 gap-3 xl:gap-0 w-max">
              <NavigationSearch show={show} searchToggle={searchToggle} setSearchToggle={setSearchToggle} />
              <NavigationLanguage show={show} />
              <Image
                src={"/assets/icon/user-profile.svg"}
                alt="user"
                height={20}
                width={20}
                className={`${!show && activePage ? `xl:invert-0 invert` : "invert"
                  } transition-all  w-5 h-5 hidden xl:block`}
              />
            </div>
          </div>
        </div>
      </div>
      {isMobile ? (
        <div className="w-full  p-2 flex justify-center  fixed xl:hidden bottom-2 z-50 ">
          <div className="bg-white flex gap-5 xl:gap-4 shadow-lg items-center justify-between px-8 w-[90%]  py-2 rounded-[10px] sm:max-w-[368px] md:max-w-[430px] relative">
            <NavigationItem
              name="Profile"
              show={show}
              dropdown={false}
              icon="https://img.icons8.com/?size=100&id=EOn31zjdfgcn&format=png&color=000000"
            />
            <NavigationItem
              name="Akademik"
              show={show}
              dropdown={false}
              icon="https://img.icons8.com/?size=100&id=83308&format=png&color=000000"
            />
            <Image
              src={
                "https://img.icons8.com/?size=100&id=83326&format=png&color=FFFFFF"
              }
              alt="arrow-up"
              height={20}
              width={20}
              className="w-10 h-10 p-2 bg-primary rounded-full"
            />
            <NavigationItem
              name="BKK"
              show={show}
              dropdown={false}
              icon="https://img.icons8.com/?size=100&id=86119&format=png&color=000000"
            />
            <NavigationItem
              name="Info"
              show={show}
              dropdown={false}
              icon="https://img.icons8.com/?size=100&id=83308&format=png&color=000000"
            />
          </div>
        </div>
      ) : null}
      <NavigationSearchResult searchToggle={searchToggle} setSearchToggle={setSearchToggle} />

      {/* <Image
        src={"/assets/icon/rounded-arrow-up.svg"}
        alt="arrow-up"
        height={20}
        width={20}
        className="w-10 h-10 p-[1px] fixed xl:hidden bottom-20 right-8 z-50 bg-white rounded-full"
      /> */}


    </>
  );
};

export default Navbar;
