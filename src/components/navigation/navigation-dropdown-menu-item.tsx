"use client";
import React from "react";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  active,
  item,
  children,
}: {
  active: string | null;
  item: string;
  children?: React.ReactNode;
  transition: any;
}) => {
  return (
    <>
      {active !== null && (
        <>
          {active === item && (
            <div className="">
              <motion.div
                animate={{ y: 0 }}
                initial={{ y: 80 }}
                transition={transition}
              >
                <motion.div className="  p-4 z-20 flex flex-col  gap-4 items-start ">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </>
      )}
    </>
  );
};
