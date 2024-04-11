import React, { useState } from "react";
import Image from "next/image";

interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  onPageChange?: (pageNumber: number) => void; // Optional callback for updating current page
}

const Pagination: React.FC<PaginationProps> = ({
  totalPosts,
  postsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1); // State for current page

  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handleButtonClick = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      if (onPageChange) {
        onPageChange(pageNumber);
      }
    }
  };

  return (
    <div className="flex text-center gap-3 p-3">
      <p className="mt-2">Previous</p>
      <button className="p-3 bg-gray-base rounded-md">
        <Image
          alt="arrow-right"
          src={"/assets/icon/arrow-right.svg"}
          className="-rotate-180"
          width={15}
          height={15}
        />
      </button>
      {pages.map((page, index) => (
        <button
          key={index}
          className={`px-3 py-1 rounded-md ${
            currentPage === page ? "bg-yellow-light" : "bg-white"
          }`}
          onClick={() => handleButtonClick(page)}
        >
          {page}
        </button>
      ))}
      <button className="p-3 bg-gray-base rounded-md">
        <Image
          alt="arrow-right"
          src={"/assets/icon/arrow-right.svg"}
          width={15}
          height={15}
        />
      </button>
      <p className="mt-2">Next</p>
    </div>
  );
};

export default Pagination;
