"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import NavigationItem from "./navigation-item";
import NavigationLanguage from "./navigation-language";
import { usePathname } from "next/navigation";
import NavigationSearch from "./navigation-search";
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const pathname = usePathname();
  const isActivePage =
    pathname === "/" ||
    pathname === "/news" ||
    pathname === "/profile/school-facility";

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 0) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      <div
        className={`flex items-center  lg:justify-between z-40  transition-transform ${
          show
            ? ` text-blue-base translate-y-2 shadow-lg`
            : `  ${
                isActivePage
                  ? "lg:translate-y-8 lg:text-white "
                  : "lg:translate-y-2 "
              }`
        } lg:fixed w-full px-3 delay-0`}
      >
        <div
          className={`flex  items-center  w-full py-3 transition-all rounded-[10px] lg:px-11  ${
            !show && isActivePage
              ? "bg-opacity-0 font-[900]"
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
      <div className="w-full  p-2 flex justify-center  fixed lg:hidden bottom-2 z-50">
        <div className="bg-white flex gap-3  shadow-lg items-center px-2 w-[90%]  py-2 rounded-full">
          <Image
            src={"/assets/icon/rounded-arrow-up.svg"}
            alt="arrow-up"
            height={20}
            width={20}
            className="w-8 h-8"
          />

          <div className="flex justify-center items-center gap-4 ">
            <NavigationItem name="Profile" show={show} dropdown={false} />
            <NavigationItem name="Akademik" show={show} dropdown={false} />
            <NavigationItem name="BKK" show={show} dropdown={false} />
            <NavigationItem name="News" show={show} dropdown={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
