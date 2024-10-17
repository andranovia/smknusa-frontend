"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAlert } from "@/services/api/useQueries/useAlert";
import { defaultTransition } from "../animation/transition";

const HomeAlert = () => {
  const { alert, isAlertLoading } = useAlert();
  const [hover, setHover] = useState(false);
  const [close, setClose] = useState(false);
  const pathname = usePathname();

  return pathname === "/" ? (
    <motion.div
      initial={{
        y: 60,
      }}
      animate={{
        y: close ? 60 : 0,
      }}
      transition={defaultTransition}
      className=" fixed bottom-0 z-50 w-full px-2"
    >
      <div className="bg-[#fef9c3] px-2 py-4 w-full rounded-tl-md rounded-tr-md h-full relative flex justify-center items-center">
        {alert && !isAlertLoading ? (
          <>
            <motion.div
              initial={false}
              transition={defaultTransition}
              animate={{ y: !close ? 100 : 0 }}
              onClick={() => setClose(false)}
              className="-top-12 rounded-md font-bold px-2 py-4 bg-[#fef9c3] gap-2 text-white text-xs cursor-pointer absolute  left-4 "
            >
              <Image
                src={"/assets/icon/arrow-square-up.svg"}
                width={20}
                height={20}
                alt={"arrow-square-up"}
                className={!close ? "opacity-0" : ""}
              />
            </motion.div>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="flex justify-center gap-2 items-center cursor-pointer"
            >
              <motion.div
                initial={false}
                transition={defaultTransition}
                animate={{ x: hover ? -20 : 0 }}
                className="flex justify-center gap-2  text-blue-base line-clamp-1 text-xl font-semibold items-center"
              >
                <Image
                  src={"/assets/icon/alert.svg"}
                  width={20}
                  height={20}
                  alt={"alert"}
                />
                <span>{alert[0]?.alert_title}</span>
              </motion.div>
              <motion.div
                initial={false}
                transition={defaultTransition}
                animate={{
                  backgroundColor: hover ? "#081b34" : "#fef9c3",
                }}
                className="flex justify-center items-center p-1 rounded-full overflow-hidden"
              >
                <Image
                  src={"/assets/icon/line-arrow-right-blue.svg"}
                  width={20}
                  height={20}
                  alt={"line-arrow-right-blue"}
                  className={`${hover ? "invert" : ""}`}
                />
              </motion.div>
            </div>
            <div
              onClick={() => setClose(true)}
              className="rounded-md font-bold px-4 py-3 bg-primary gap-2 text-white text-xs cursor-pointer absolute flex justify-center items-center right-2 bottom-2"
            >
              <Image
                src={"/assets/icon/close-square.svg"}
                width={20}
                height={20}
                alt={"close-square"}
              />
              <span>Close</span>
            </div>
          </>
        ) : null}
      </div>
    </motion.div>
  ) : null;
};

export default HomeAlert;
