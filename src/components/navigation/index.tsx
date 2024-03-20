"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import NavigationItem from "./navigation-item";
import NavigationDropdown from "./navigation-dropdown";

const Navbar = () => {
  const [show, setShow] = useState(false);

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
      className={`flex items-center justify-between z-40 transition-transform ${
        show ? "text-[#081B34] translate-y-2" : "text-white translate-y-8"
      } fixed w-full px-3 delay-0`}
    >
      <div
        className={`flex  items-center    justify-between w-full py-3 transition-all rounded-[10px] px-11  ${
          !show
            ? "bg-opacity-0 font-[900]"
            : "bg-opacity-100 bg-white shadow-lg font-[800]"
        }  `}
      >
        <div className="flex items-center">
          <Image
            src={"/assets/logo-skansa.svg"}
            alt=""
            height={55}
            width={55}
          />

          <div className="ml-2  text-[18px]  ">
            SMK NEGERI 1 <br />
            PURWOSARI
          </div>
        </div>
        <div className="flex-grow flex justify-center font-[600] ">
          <ul className={`flex justify-center items-center gap-8`}>
            <NavigationItem  name="Profile" show={show} dropdown={true} route={'/profile'}/>
            <NavigationItem name="Akademik" show={show} dropdown={true} route={'/akademik'}/>
            <NavigationItem name="BKK" show={show} dropdown={true} route={'/bkk'}/>
            <NavigationItem name="Berita" show={show} route={'/news'}/>
            <NavigationItem name="Artikel" show={show} route={'/artikel'}/>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <Image
            src={"/assets/search.svg"}
            alt="search"
            className={`${show ? `invert` : "invert-0"} transition-all `}
            width={22}
            height={22}
          />
          <div className="flex justify-center items-center gap-1">
            <Image
              src={"/assets/indonesia.svg"}
              alt="search"
              width={22}
              height={22}
            />
            <NavigationDropdown show={show} />
          </div>
          <Image
            src={"/assets/user.svg"}
            alt="user"
            height={5}
            width={20}
            className={`${show ? `invert` : "invert-0"} transition-all `}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
