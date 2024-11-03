"use client";

import React, { useState } from "react";
import Pagination from "@/components/ui/pagination";
import JobVacanciesCardItem from "@/components/bkk/job/job-card-item";
import { useVacancies } from "@/services/api/useQueries/useVacancies";
import DataCardItemLoading from "@/components/ui/data-card-item-loading";

const JobVacanciesCard = ({
  jobVacanciesFilter,
}: {
  jobVacanciesFilter: {
    search: string;
    search_requirement: string;
  };
}) => {
  const { vacancies, isVacanciesLoading } = useVacancies(
    undefined,
    jobVacanciesFilter
  );
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
      <div className="flex flex-col justify-center items-center bg-white  rounded-lg w-full">
        <div className="flex justify-center items-center flex-col w-full 2xl:w-auto">
          {vacancies && !isVacanciesLoading ? (
            <>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-8 px-2 lg:px-4 py-4 2xl:px-12 pb-12 bg-white rounded-[10px] w-full">
                {currentJobData?.map((vacancy, index) => {
                  return (
                    <React.Fragment key={index}>
                      <JobVacanciesCardItem vacancy={vacancy} />
                    </React.Fragment>
                  );
                })}
              </div>
              {vacancies?.length > 6 && (
                <div className="mt-4 ">
                  <Pagination
                    totalPosts={vacancies?.length}
                    postsPerPage={postsPerPage}
                    onPageChange={onPageChange}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-8 px-2 lg:px-4 py-4 1xl:px-12 pb-12 bg-white rounded-[10px] w-full">
              {[...Array(6)].map((_, index) => (
                <React.Fragment key={index}>
                  <DataCardItemLoading />
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobVacanciesCard;
