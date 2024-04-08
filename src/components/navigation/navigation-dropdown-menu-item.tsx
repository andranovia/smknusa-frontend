import React from "react";
import { motion } from "framer-motion";
import { defaultTransition } from "../animation/transition";

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
                transition={defaultTransition}
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
