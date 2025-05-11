"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAlert } from "@/services/api/useQueries/useAlert";
import { defaultTransition } from "../animation/transition";
import { Paragraph } from "../ui/typography";

const HomeAlert = () => {
  const { alert, isAlertLoading } = useAlert();
  const [hover, setHover] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return pathname === "/" ? (
    <motion.div
      initial={{
        y: 60,
      }}
      animate={{
        y: isAtTop ? 0 : 60,
      }}
      transition={defaultTransition}
      className=" fixed bottom-0 z-30 w-full "
    >
      <div className="bg-primary px-2 py-4 w-full h-full relative flex justify-center items-center">
        {alert && !isAlertLoading ? (
          <>
            <Link
              href={alert[0]?.alert_url || ""}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="flex justify-center gap-3 items-center cursor-pointer"
            >
              <motion.div
                initial={false}
                transition={defaultTransition}
                animate={{ x: hover ? -20 : 0 }}
                className="flex justify-center gap-3  items-center"
              >
                <Image
                  src={"/assets/icon/alert.svg"}
                  width={20}
                  height={20}
                  alt={"alert"}
                />
                <Paragraph className="line-clamp-1 !text-xs md:!text-base !font-semibold text-white">
                  {alert[0]?.alert_title}
                </Paragraph>
              </motion.div>
              <motion.div
                initial={false}
                transition={defaultTransition}
                className="hidden md:flex justify-center items-center p-1 rounded-full overflow-hidden"
              >
                <Image
                  src={"/assets/icon/line-arrow-right-blue.svg"}
                  width={20}
                  height={20}
                  alt={"line-arrow-right-blue"}
                />
              </motion.div>
            </Link>
          </>
        ) : null}
      </div>
    </motion.div>
  ) : null;
};

export default HomeAlert;
