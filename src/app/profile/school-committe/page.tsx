import React from "react";
import Iframe from "react-iframe";

const SchoolCommitte = () => {
  return (
    <div className="w-full lg:pt-24 px-3 rounded-[10px] text-blue-base">
      <div className="relative  bg-white flex flex-col items-center  pt-10 pb-20">
        <div className="flex flex-col  gap-4 w-[80%]  lg:w-1/2">
          <h1 className="font-[700] text-[24px] ">
            Komite Sekolah
          </h1>

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

export default SchoolCommitte;
