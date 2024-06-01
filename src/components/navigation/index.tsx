"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import NavigationItem from "./navigation-item";
import NavigationLanguage from "./navigation-language";
import { usePathname } from "next/navigation";
import NavigationSearch from "./navigation-search";

const Navbar = () => {
  const [show, setShow] = useState(false);
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
    <div
      className={`lg:flex items-center  justify-between z-40 hidden transition-transform ${
        show
          ? ` text-blue-base translate-y-2 shadow-lg`
          : `  ${isActivePage ? "translate-y-8 text-white " : "translate-y-2 "}`
      } fixed w-full px-3 delay-0`}
    >
      <div
        className={`flex  items-center    justify-between w-full py-3 transition-all rounded-[10px] px-11  ${
          !show && isActivePage
            ? "bg-opacity-0 font-[900]"
            : "bg-opacity-100 bg-white  font-[800]"
        }  `}
      >
        <div className="flex items-center">
          <Image
            src={"/assets/icon/logo-skansa.svg"}
            alt=""
            height={55}
            width={55}
            quality={100}
            className="w-auto h-auto"
          />

          <div className="ml-2  text-[18px]  ">
            SMK NEGERI 1 <br />
            PURWOSARI
          </div>
        </div>
        <div className=" flex justify-start gap-[5rem] font-[600] ">
          <ul
            className={`flex justify-center items-center gap-8 ${
              !show && isActivePage ? "text-white" : " text-gray-light"
            }`}
          >
            <NavigationItem name="Profile" show={show} dropdown={true} />
            <NavigationItem name="Akademik" show={show} dropdown={true} />
            <NavigationItem name="BKK" show={show} dropdown={true} />
            <NavigationItem name="Berita" show={show} route={"/news"} />
            <NavigationItem name="Artikel" show={show} route={"/artikel"} />
          </ul>
          <div className="flex items-center space-x-4">
            <NavigationSearch isActivePage={isActivePage} show={show} />
            <NavigationLanguage show={show} />
            <Image
              src={"/assets/icon/user-profile.svg"}
              alt="user"
              height={5}
              width={20}
              className={`${
                !show && isActivePage ? `invert-0` : "invert"
              } transition-all `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
