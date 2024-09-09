import React from "react";
import Iframe from "react-iframe";
import { Heading } from "@/components/ui/typography";

const ProfileSchoolCommitte = () => {
  return (
    <div className="w-full pt-20 xl:pt-24 px-3 rounded-[10px] text-blue-base">
      <div className="relative  bg-white flex flex-col items-center  pt-10 pb-20">
        <div className="flex flex-col  gap-4 w-[80%]  xl:w-1/2 overflow-hidden">
          <Heading type="h3" className="font-[700] text-[24px] ">
            Komite Sekolah
          </Heading>
          
          <Iframe
            url="https://drive.google.com/file/d/1QOm9P8Yw6o9MUBpn0WjKMEAj8fkJQmUl/view"
            width="640px"
            height="320px"
            id=""
            className=""
            display="block"
            position="relative"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSchoolCommitte;
