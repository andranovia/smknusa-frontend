import Image from "next/image";
import React, { useState } from "react";
import NavigationDropdownIcon from "./navigation-dropdown-icon";
import { AnimatePresence, motion } from "framer-motion";
import { useActivePage } from "@/contexts/ActivePageContext";

type NavigationLanguageProps = {
  show: boolean;
};

const languageDropdown = [
  {
    language: "indonesia",
    imgSrc: "/assets/icon/indonesia.svg",
  },
];

const NavigationLanguage = ({ show }: NavigationLanguageProps) => {
  const [languageToggle, setLanguageToggle] = useState(false);
  const { activePage } = useActivePage();

  return (
    <div
      className="hidden xl:flex  flex-col items-center "
      onClick={() => setLanguageToggle(!languageToggle)}
    >
      <div className="flex justify-center items-center gap-1">
        <Image
          src={"/assets/icon/indonesia.svg"}
          alt="search"
          width={22}
          height={22}
        />
        <NavigationDropdownIcon show={show} />
      </div>
      <AnimatePresence>
        {languageToggle && (
          <div className="absolute right-14 md:right-auto xl:right-4 2xl:right-auto">
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                initial: { opacity: 0.5, scale: 0.85, y: 10 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, y: 10 },
              }}
              className={`mt-14 z-20 flex flex-col gap-2 items-start px-2  pt-2 pb-5 rounded-b-[10px] rounded-tl-[10px] md:rounded-tl-none md:rounded-r-[10px]   ${show || !activePage ? "bg-white" : "bg-primary bg-opacity-40 backdrop-blur-sm"}  overflow-hidden`}
            >
              {languageDropdown?.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-4 px-6 rounded-[10px]  "
                >
                  <div className="flex gap-4  py-2 items-center">
                    <Image
                      src={data.imgSrc}
                      alt={data.imgSrc}
                      width={40}
                      height={40}
                      className="w-5 h-5 opacity-50"
                    />
                    <div className="flex flex-col items-start">
                      <h2 className={` ${show || !activePage ? "text-blue-base " : "text-white "}  font-[600] text-[16px]`}>
                        Bahasa
                      </h2>
                      <p className={`font-[500] text-[16px] ${show || !activePage ? "text-gray " : "text-zinc-300 "} `}>
                        {data.language}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-4 px-6">
                <Image
                  src={"/assets/icon/language.svg"}
                  alt={"language"}
                  width={40}
                  height={40}
                  className={`w-5 h-5 opacity-50 ${show  || !activePage ? 'invert-0' : 'invert'}`}
                />
                <h2 className="text-gray-light font-[600] text-[16px]">
                  Language
                </h2>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavigationLanguage;
