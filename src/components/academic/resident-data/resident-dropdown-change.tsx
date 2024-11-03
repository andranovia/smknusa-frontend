"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Paragraph } from "../../ui/typography";
import { defaultTransition } from "../../animation/transition";

const ResidentDropdownChange = ({
  handleChangeTable,
}: {
  // eslint-disable-next-line no-unused-vars
  handleChangeTable: (current: string) => void;
}) => {
  const [isChangeDropdown, setIsChangeDropdown] = useState(false);

  return (
    <div
      className={` inline-flex flex-col items-end absolute right-10`}
      onMouseEnter={() => setIsChangeDropdown(true)}
      onMouseLeave={() => setIsChangeDropdown(false)}
    >
      <div className="gap-1 items-center flex">
        <Image
          src={"/assets/icon/candle.svg"}
          alt="candle"
          width={20}
          height={20}
          className="w-6 h-6"
        />
      </div>
      <motion.div
        initial={false}
        animate={{
          opacity: isChangeDropdown ? 1 : 0,
          y: isChangeDropdown ? 0 : 40,
        }}
        transition={defaultTransition}
        className={` absolute 1xl:-right-[5rem]  pt-9   ${
          isChangeDropdown ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center rounded-lg bg-white w-[14rem] border">
          <div
            onClick={() => handleChangeTable("students")}
            className="w-full flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-base transition-colors"
          >
            <Image
              src={"/assets/academic/resident-data/students.svg"}
              alt={"students"}
              width={20}
              height={20}
              className="w-7 h-7 p-1 rounded-full border"
            />
            <Paragraph className="text-[12px] font-medium">
              Students Data
            </Paragraph>
          </div>
          <div
            onClick={() => handleChangeTable("teachers")}
            className="w-full flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-base transition-colors"
          >
            <Image
              src={"/assets/academic/resident-data/teachers.svg"}
              alt={"teachers"}
              width={20}
              height={20}
              className="w-7 h-7 p-1 rounded-full border"
            />
            <Paragraph className="text-[12px] font-medium">
              Teachers Data
            </Paragraph>
          </div>
          <hr className="border w-[85%]" />
          <div className="w-full flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-base transition-colors">
            <Image
              src={"/assets/academic/resident-data/print.svg"}
              alt={"print"}
              width={20}
              height={20}
              className="w-7 h-7 p-1 rounded-full border"
            />
            <Paragraph className="text-[12px] font-medium">Cetak</Paragraph>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResidentDropdownChange;
