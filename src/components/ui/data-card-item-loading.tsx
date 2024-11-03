import React from "react";

const DataCardItemLoading = () => {
  return (
    <div className="flex flex-col gap-3 w-full p-6 border animate-pulse rounded-md  2xl:w-[38rem]">
      <div className="w-1/4 h-4  bg-slate-300 opacity-50  rounded-md" />
      <div className="w-full h-2 bg-slate-200  rounded-md" />
      <div className="w-full h-2 bg-slate-200 opacity-80  rounded-md" />
      <div className="w-1/2 h-2 bg-slate-200 opacity-40  rounded-md" />
      <div className="1xl:flex grid grid-cols-2 w-full gap-3 mt-2">
        <div className=" p-2 w-full bg-gray-medium bg-opacity-60 h-8 py-[10px] rounded-md  text-xs font-medium" />
        <div className="p-2 w-full bg-gray-medium bg-opacity-60 h-8 py-[10px] rounded-md  text-xs font-medium" />
      </div>
    </div>
  );
};

export default DataCardItemLoading;
