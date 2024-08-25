"use client";

import React from "react";
import Link from "next/link";
import Pagination from "@/components/ui/pagination";
import JobVacanciesCardItem from "@/components/ui/job-card-item";
// import { useJobs } from "@/services/api/useQueries/useJobs";
// import InfoCardItem from "../ui/info-card-item";
// import InfoCardItemLoading from "../ui/info-card-item-loading";

const JobVacanciesCard = () => {
    //   const { articles, isJobsLoading } = useJobs();
    //   const [currentPage, setCurrentPage] = useState(1);
    //   const postsPerPage = 9;

    //   const indexOfLastPost = currentPage * postsPerPage;
    //   const indexOfFirstPost = indexOfLastPost - postsPerPage;
    //   const currentJobData = articles?.slice(indexOfFirstPost, indexOfLastPost);

    //   const onPageChange = (pageNumber: number) => {
    //     setCurrentPage(pageNumber);
    //   };

    return (
        <>
            <div className="flex flex-col justify-center items-center bg-white  rounded-lg">

                <div className="flex justify-center items-center flex-col w-full 2xl:w-auto">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-8 px-2 lg:px-4 py-4 1xl:px-12 pb-12 bg-white rounded-[10px] w-full">
                        {[...Array(9)]?.map((_, index) => {
                            // const date = new Date(article.created_at);
                            // const normalDate = date.toLocaleDateString();

                            return (
                                <React.Fragment key={index}>
                                    <Link href={`/article/`} className="flex justify-center">
                                        <JobVacanciesCardItem />
                                    </Link>
                                </React.Fragment>
                            );
                        })}
                    </div>
                    {/* <div className="mt-4 mb-12">
                        <Pagination
                            totalPosts={articles?.length}
                            postsPerPage={postsPerPage}
                            onPageChange={onPageChange}
                        />
                    </div> */}
                </div>
                {/* {isJobsLoading ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 p-4 1xl:px-12 pb-12 bg-white w-full 2xl:max-w-fit  rounded-[10px]">
                        {Array(6)
                            .fill(0)
                            .map((_, index) => (
                                <React.Fragment key={index}>
                                    <InfoCardItemLoading />
                                </React.Fragment>
                            ))}
                    </div>
                ) : (
                    <div className="flex justify-center items-center flex-col w-full 2xl:w-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 px-2 lg:px-4 py-4 1xl:px-12 pb-12 bg-white rounded-[10px] w-full">
                            {currentJobData?.map((article, index) => {
                                const date = new Date(article.created_at);
                                const normalDate = date.toLocaleDateString();

                                return (
                                    <React.Fragment key={index}>
                                        <Link href={`/article/${article.id_pemberitahuan}`} className="flex justify-center">
                                            <InfoCardItem infoCardData={article} normalDate={normalDate} />
                                        </Link>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                        <div className="mt-4 mb-12">
                            <Pagination
                                totalPosts={articles?.length}
                                postsPerPage={postsPerPage}
                                onPageChange={onPageChange}
                            />
                        </div>
                    </div>
                )} */}
            </div>
        </>
    );
};

export default JobVacanciesCard;
