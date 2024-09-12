"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Paragraph } from "../../ui/typography";
import { defaultTransition } from "../../animation/transition";

const NewsShare = () => {
  const [isShareDropdown, setisShareDropdown] = useState(false);

  return (
    <div
      className={` inline-flex flex-col items-end relative `}
      onMouseEnter={() => setisShareDropdown(true)}
      onMouseLeave={() => setisShareDropdown(false)}
    >
      <div className="gap-1 items-center flex">
        {" "}
        <Image
          width={20}
          height={20}
          src={"/assets/icon/share.svg"}
          alt="share"
        />
        <h4>Bagikan</h4>
      </div>
      <motion.div
        initial={false}
        animate={{
          opacity: isShareDropdown ? 1 : 0,
          y: isShareDropdown ? 0 : 40,
        }}
        transition={defaultTransition}
        className={` absolute -right-[5rem]  pt-9   ${
          isShareDropdown ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center rounded-lg bg-white w-[14rem] border">
          <div className="w-full flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-base transition-colors">
            <Image
              src={"/assets/icon/facebook-outline.svg"}
              alt={"facebook"}
              width={20}
              height={20}
              className="w-7 h-7 p-1 rounded-full border"
            />
            <Paragraph className="text-[12px] font-medium">Facebook</Paragraph>
          </div>
          <div className="w-full flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-base transition-colors">
            <Image
              src={"/assets/icon/instagram-outline.svg"}
              alt={"instagram"}
              width={20}
              height={20}
              className="w-7 h-7 p-1 rounded-full border"
            />
            <Paragraph className="text-[12px] font-medium">Instagram</Paragraph>
          </div>
          <div className="w-full flex items-center gap-4 px-4 pb-2 py-2 cursor-pointer hover:bg-gray-base transition-colors">
            <Image
              src={"/assets/icon/whatsapp-outline.svg"}
              alt={"whatsapp"}
              width={20}
              height={20}
              className="w-7 h-7 p-1 rounded-full border"
            />
            <Paragraph className="text-[12px] font-medium">Whatsapp</Paragraph>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NewsShare;
