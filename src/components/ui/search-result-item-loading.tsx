import React from "react";

const SearchResultItemLoading = () => {
  return (
    <div className=" rounded-lg animate-pulse  w-3/4 h-full  overflow-hidden relative">
      <div className="flex flex-col items-stretch   gap-3  w-full ">
        <div className="flex items-center gap-2">
          <div className="h-5 bg-gray-200 rounded-md w-10"></div>
          <div className="h-5 bg-gray-200 rounded-full w-full"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 bg-gray-200  opacity-60 rounded-md w-10"></div>
          <div className="h-5 bg-gray-200 opacity-60 rounded-full w-full"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 bg-gray-200  opacity-50 rounded-md w-10"></div>
          <div className="h-5 bg-gray-200  opacity-50 rounded-full w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultItemLoading;
