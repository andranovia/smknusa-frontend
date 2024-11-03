import React, { useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "@uidotdev/usehooks";

type PaginationTableProps = {
  totalPosts?: number;
  postsPerPage: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange?: (pageNumber: number) => void;
};

const PaginationTable: React.FC<PaginationTableProps> = ({
  totalPosts,
  postsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useMediaQuery("only screen and (max-width : 1024px)");
  const totalPages = totalPosts ? Math.ceil(totalPosts / postsPerPage) : 0;
  const getDisplayedPages = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = [];

    if (currentPage <= 4) {
      pages.push(1, 2, 3, 4, 5, "...", totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }

    return pages;
  };

  const handleButtonClick = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      if (onPageChange) {
        onPageChange(pageNumber);
      }
    }
  };

  return (
    <div className="flex text-center gap-3 p-3 w-full justify-between items-center ">
      <button
        onClick={() => handleButtonClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 border-2 border-gray-200 rounded-lg flex justify-center gap-2 items-center !cursor-pointer"
      >
        <Image
          alt="arrow-right"
          src={"/assets/icon/arrow-line-right.svg"}
          className="-rotate-180"
          width={15}
          height={15}
        />
        <p className="text-sm font-semibold text-blue-base hidden xl:block">
          Previous
        </p>
      </button>

      <div className="flex justify-center gap-2 items-center">
        {getDisplayedPages()
          .slice(0, isMobile ? 5 : 7)
          .map((page, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded-md ${
                currentPage === page ? "bg-gray-base" : "bg-white"
              }`}
              onClick={() =>
                typeof page === "number" && handleButtonClick(page)
              }
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}
      </div>
      <button
        onClick={() => handleButtonClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 border-2 border-gray-200 rounded-lg flex justify-center gap-2 items-center !cursor-pointer"
      >
        <p className="text-sm font-semibold text-blue-base hidden xl:block">
          Next
        </p>
        <Image
          alt="arrow-right"
          src={"/assets/icon/arrow-line-right.svg"}
          width={15}
          height={15}
        />
      </button>
    </div>
  );
};

export default PaginationTable;
