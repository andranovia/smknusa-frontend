"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import NavigationItem from "./navigation-item";
import NavigationLanguage from "./navigation-language";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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
      className={`lg:flex items-center justify-between z-40 hidden transition-transform ${
        !show && isHomePage
          ? "text-white translate-y-8"
          : " text-[#081B34] translate-y-2"
      } fixed w-full px-3 delay-0`}
    >
      <div
        className={`flex  items-center    justify-between w-full py-3 transition-all rounded-[10px] px-11  ${
          !show && isHomePage
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
          />

          <div className="ml-2  text-[18px]  ">
            SMK NEGERI 1 <br />
            PURWOSARI
          </div>
        </div>
        <div className=" flex justify-start font-[600] ">
          <ul
            className={`flex justify-center items-center gap-8 ${
              !show && isHomePage ? "text-white" : " text-[#9DA5B1]"
            }`}
          >
            <NavigationItem name="Profile" show={show} dropdown={true} />
            <NavigationItem name="Akademik" show={show} dropdown={true} />
            <NavigationItem name="BKK" show={show} dropdown={true} />
            <NavigationItem name="Berita" show={show} route={"/news"} />
            <NavigationItem name="Artikel" show={show} route={"/artikel"} />
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <Image
            src={"/assets/icon/search.svg"}
            alt="search"
            className={`${
              !show && isHomePage ? `invert-0` : "invert"
            } transition-all `}
            width={22}
            height={22}
          />
          <NavigationLanguage show={show} />
          <Image
            src={"/assets/icon/user.svg"}
            alt="user"
            height={5}
            width={20}
            className={`${
              !show && isHomePage ? `invert-0` : "invert"
            } transition-all `}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
