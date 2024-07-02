"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import NavigationItem from "./navigation-item";
import NavigationLanguage from "./navigation-language";
import { usePathname } from "next/navigation";
import NavigationSearch from "./navigation-search";
import Link from "next/link";
import { useMediaQuery } from "@uidotdev/usehooks";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");
  const pathname = usePathname();
  const isActivePage =
    pathname === "/" ||
    pathname === "/news" ||
    pathname === "/profile/school-facility";

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
        className={`flex items-center  lg:justify-between z-40  transition-transform ${
          show
            ? ` text-blue-base translate-y-0 lg:translate-y-2 shadow-lg`
            : `  ${
                isActivePage
                  ? "-translate-y-20 lg:translate-y-8 lg:text-white "
                  : "lg:translate-y-2 "
              }`
        } fixed w-full lg:px-3 delay-0 `}
      >
        <div
          className={`flex  items-center  w-full py-3 transition-all rounded-[10px] px-4 lg:px-11  ${
            !show && isActivePage
              ? "lg:bg-opacity-0 bg-white font-[800] lg:font-[900]"
              : "bg-opacity-100 bg-white  font-[800]"
          }  `}
        >
          <Link href={"/"} className="lg:w-[52%] w-full">
            <div className="flex items-center">
              <Image
                src={"/assets/icon/logo-skansa.svg"}
                alt=""
                height={55}
                width={55}
                quality={100}
                className="w-[20%] lg:w-auto h-auto"
              />

              <h2 className="ml-2 text-sm lg:text-[18px]  ">
                SMK NEGERI 1 <br className="hidden lg:block" />
                PURWOSARI
              </h2>
            </div>
          </Link>
          <div className="flex lg:justify-between  lg:w-full w-1/2   font-[600] ">
            <div
              className={`lg:flex hidden  justify-center items-center gap-8 ${
                !show && isActivePage ? "text-white" : " text-gray-light"
              }`}
            >
              <NavigationItem name="Profile" show={show} dropdown={true} />
              <NavigationItem name="Akademik" show={show} dropdown={true} />
              <NavigationItem name="BKK" show={show} dropdown={true} />
              <NavigationItem name="Berita" show={show} route={"/news"} />
              <NavigationItem name="Artikel" show={show} route={"/article"} />
            </div>
            <div className="flex items-center lg:space-x-4 gap-2">
              <NavigationSearch isActivePage={isActivePage} show={show} />
              <NavigationLanguage show={show} />
              <Image
                src={"/assets/icon/user-profile.svg"}
                alt="user"
                height={20}
                width={20}
                className={`${
                  !show && isActivePage ? `lg:invert-0 invert` : "invert"
                } transition-all  w-5 h-5`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <Image
        src={"/assets/icon/rounded-arrow-up.svg"}
        alt="arrow-up"
        height={20}
        width={20}
        className="w-10 h-10 p-[1px] fixed lg:hidden bottom-20 right-8 z-50 bg-white rounded-full"
      /> */}

      <div className="w-full  p-2 flex justify-center  fixed lg:hidden bottom-2 z-50">
        <div className="bg-white flex gap-5 lg:gap-4 shadow-lg items-center justify-between px-8 w-[90%]  py-2 rounded-[10px]">
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
    </>
  );
};

export default Navbar;
