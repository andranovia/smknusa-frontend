import Image from "next/image";
import React, { useState } from "react";
import NavigationDropdownIcon from "./navigation-dropdown-icon";
import { AnimatePresence, motion } from "framer-motion";

interface NavigationLanguageProps {
  show: boolean;
}

const languageDropdown = [
  {
    language: "indonesia",
    imgSrc: "/assets/icon/indonesia.svg",
  },
];

const NavigationLanguage = ({ show }: NavigationLanguageProps) => {
  const [languageToggle, setLanguageToggle] = useState(false);

  return (
    <div
      className="flex flex-col items-center "
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
          <div className="absolute">
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                initial: { opacity: 0.5, scale: 0.85, y: 10 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, y: 10 },
              }}
              className="mt-14 z-20 flex flex-col gap-2 items-start px-2  pt-2 pb-5 rounded-b-[10px] rounded-r-[10px] bg-white overflow-hidden"
            >
              {languageDropdown?.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-4 px-6 rounded-[10px] bg-white  "
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
                      <h2 className="text-blue-base font-[600] text-[16px]">
                        Bahasa
                      </h2>
                      <p className="font-[500] text-[16px] text-gray">
                        {data.language}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-4 px-6">
                {" "}
                <Image
                  src={"/assets/icon/language.svg"}
                  alt={"language"}
                  width={40}
                  height={40}
                  className="w-5 h-5 opacity-50"
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
