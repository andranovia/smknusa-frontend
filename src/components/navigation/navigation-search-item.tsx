import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { Paragraph } from "../ui/typography";
import { defaultTransition } from "../animation/transition";

const NavigationSearchItem = ({
  imgSrc,
  title,
  description,
}: {
  imgSrc: string;
  title: string;
  description: string;
}) => {
  const [isHoverItem, setIsHoverItem] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHoverItem(true)}
      onMouseLeave={() => setIsHoverItem(false)}
      className={`flex items-center gap-4 px-2 relative rounded-md overflow-hidden ${
        isHoverItem
          ? "cursor-pointer bg-gray-base transition-colors"
          : "bg-[#F7F7F7]"
      }`}
      whileHover={{ height: 70 }}
      transition={defaultTransition}
    >
      <motion.div
        initial={false}
        animate={{ y: isHoverItem ? -15 : 0 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 50,
          mass: 0.5,
        }}
        className="flex items-center gap-2 w-full"
      >
        <Image
          src={imgSrc}
          alt="suggestion"
          className="w-5 h-5"
          width={22}
          height={22}
        />
        <Paragraph className="font-[500] text-sm line-clamp-1 w-3/4">
          {title}
        </Paragraph>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isHoverItem ? 1 : 0, y: isHoverItem ? 10 : 40 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 50,
          mass: 0.5,
        }}
        className="absolute  font-medium text-xs text-gray-light hidden xl:block text-nowrap line-clamp-1 text-ellipsis w-[90%]"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default NavigationSearchItem;
