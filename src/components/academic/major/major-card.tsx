"use client";

import React, { useState } from "react";
import Link from "next/link";
import FeatureCardItem from "@/components/ui/feature-card-item";
import { Major, useMajors } from "@/services/api/useQueries/useMajors";
import FeatureCardItemLoading from "@/components/ui/feature-card-item-loading";
import MajorShowMore from "./major-showmore";

const MajorCard = ({ majors }: { majors: Major[] | undefined }) => {
  const [showAllMajor, setShowAllMajor] = useState(false);
  const { isMajorsLoading } = useMajors();

  return (
    <div className="w-full flex justify-center items-center bg-white px-2 xl:mt-0">
      {majors && !isMajorsLoading ? (
        <div className="flex flex-col items-center w-full">
          <div className="w-full lg:w-fit grid grid-cols-1 lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 p-4 1xl:px-14 pb-12 bg-white rounded-[10px]">
            {majors
              .slice(0, showAllMajor ? majors.length : 9)
              .map((major, index) => {
                return (
                  <React.Fragment key={index}>
                    <Link
                      href={`major/${major?.id_jurusan}`}
                      className="flex justify-center"
                    >
                      <FeatureCardItem featureCardData={major} />
                    </Link>
                  </React.Fragment>
                );
              })}
          </div>
          {majors.length > 9 && (
            <MajorShowMore
              showAllMajor={showAllMajor}
              setShowAllMajor={setShowAllMajor}
            />
          )}
        </div>
      ) : (
        <div className="w-full 1xl:w-fit grid grid-cols-1 lg:grid-cols-2 1xl:grid-cols-3 gap-4 md:gap-8 p-4 1xl:px-14 pb-12 bg-white rounded-[10px]">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <React.Fragment key={index}>
                <FeatureCardItemLoading />
              </React.Fragment>
            ))}
        </div>
      )}
    </div>
  );
};

export default MajorCard;
