import React from "react";
import { motion, Transition } from "framer-motion";

import { defaultTransition } from "../animation/transition";

export const NavigationDropdownMenuItem = ({
  active,
  item,
  children,
}: {
  active: string | null;
  item: string;
  children?: React.ReactNode;
  transition: Transition;
  show: boolean;
}) => {
  return (
    active !== null && (
      <>
        {active === item && (
          <div className="xl:block flex  items-center xl:items-start xl:justify-start justify-center">
            <motion.div
              animate={{ y: 0 }}
              initial={{ y: 80 }}
              transition={defaultTransition}
            >
              <motion.div
                className={`p-4 z-20 flex flex-col  gap-4 items-start xl:justify-start justify-center`}
              >
                {children}
              </motion.div>
            </motion.div>
          </div>
        )}
      </>
    )
  );
};
