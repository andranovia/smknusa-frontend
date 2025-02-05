"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Paragraph } from "../../ui/typography";
import { defaultTransition } from "../../animation/transition";

const ResidentDropdownChange = ({
  handleChangeTable,
  activeTable,
  studentsData,
  teachersData,
  checkedItems,
}: {
  // eslint-disable-next-line no-unused-vars
  handleChangeTable: (current: string) => void;
  activeTable : string;
  studentsData?: { id: number | string }[];
  teachersData?: { id: number | string }[];
  checkedItems: string[];
}) => {
  const [isChangeDropdown, setIsChangeDropdown] = useState(false);
  
    const handlePrint = () => {
      if (typeof window !== "undefined") {
        const currentUrl = window.location.href;
    
        const selectedData = activeTable === "students"
          ? studentsData?.filter((student) =>
              checkedItems.includes(String(student.id))
            ) : teachersData?.filter((teacher) =>
              checkedItems.includes(String(teacher.id))
            );

        sessionStorage.setItem("printData", JSON.stringify(selectedData));
        sessionStorage.setItem("previousUrl", currentUrl);
    
        const urlParts = currentUrl.split("/");
        const baseUrl = `${urlParts[0]}//${urlParts[2]}`;
        const newUrl = `${baseUrl}/print/academic/resident-data/${activeTable}`;
    
        window.location.href = newUrl;
      }
    };

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
            className={`w-full flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-base transition-colors ${activeTable === "students" ? "bg-gray-medium" : ''}`}
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
            className={`w-full flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-base transition-colors ${activeTable === "teachers" ? "bg-gray-medium" : ""}`}
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
          <div
            onClick={checkedItems.length === 0 ? undefined : handlePrint}
            className={`w-full flex items-center gap-4 px-4 py-2  transition-colors ${
              checkedItems.length === 0
                ? "bg-gray-100 text-gray cursor-not-allowed"
                : "hover:bg-gray-base text-black cursor-pointer"
            }`}>
            <Image
              src={"/assets/academic/resident-data/print.svg"}
              alt={"print"}
              width={20}
              height={20}
              className={`w-7 h-7 p-1 rounded-full border ${
                checkedItems.length === 0 ? "bg-gray-200 opacity-50" 
                : ""
              } `}
            />
            <Paragraph className="text-[12px] font-medium">Cetak</Paragraph>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResidentDropdownChange;