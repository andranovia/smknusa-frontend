"use client";

import React, { useState } from "react";
import Link from "next/link";
import Pagination from "@/components/ui/pagination";
import JobVacanciesCardItem from "@/components/ui/job-card-item";
import { useVacancies } from "@/services/api/useQueries/useVacancies";

const JobVacanciesCard = () => {
  const { vacancies, isVacanciesLoading } = useVacancies();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentJobData = vacancies?.slice(indexOfFirstPost, indexOfLastPost);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white  rounded-lg">
        {vacancies && !isVacanciesLoading ? (
          <div className="flex justify-center items-center flex-col w-full 2xl:w-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-8 px-2 lg:px-4 py-4 1xl:px-12 pb-12 bg-white rounded-[10px] w-full">
              {currentJobData?.map((vacancy, index) => {
                return (
                  <React.Fragment key={index}>
                    <Link
                      href={`/bkk/job/${vacancy.id_loker}`}
                      className="flex justify-center"
                    >
                      <JobVacanciesCardItem vacancy={vacancy} />
                    </Link>
                  </React.Fragment>
                );
              })}
            </div>
            <div className="mt-4 ">
              <Pagination
                totalPosts={vacancies?.length}
                postsPerPage={postsPerPage}
                onPageChange={onPageChange}
              />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default JobVacanciesCard;
