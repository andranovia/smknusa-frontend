import React, { useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "@uidotdev/usehooks";

type PaginationProps = {
  totalPosts?: number;
  postsPerPage: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange?: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPosts,
  postsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useMediaQuery("only screen and (max-width : 1024px)");
  const totalPages = totalPosts ? Math.ceil(totalPosts / postsPerPage) : 0;

  const handleButtonClick = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      if (onPageChange) {
        onPageChange(pageNumber);
      }
    }
  };

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

  return (
    <div className="flex text-center gap-3 p-3 ">
      <button
        className="px-2 xs:p-3 bg-gray-base rounded-md"
        onClick={() => handleButtonClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Image
          alt="arrow-left"
          src={"/assets/icon/arrow-right.svg"}
          className="-rotate-180"
          width={15}
          height={15}
        />
      </button>
      {getDisplayedPages()
        .slice(0, isMobile ? 5 : 7)
        .map((page, index) => (
          <button
            key={index}
            className={`px-2.5 xs:px-3 py-1 rounded-md ${
              currentPage === page ? "bg-yellow-light" : "bg-white"
            }`}
            onClick={() => typeof page === "number" && handleButtonClick(page)}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}
      <button
        className="px-2 xs:p-3 bg-gray-base rounded-md"
        onClick={() => handleButtonClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Image
          alt="arrow-right"
          src={"/assets/icon/arrow-right.svg"}
          width={15}
          height={15}
        />
      </button>
    </div>
  );
};

export default Pagination;
