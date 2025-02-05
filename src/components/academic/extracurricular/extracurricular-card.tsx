"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProfileCardItem from "@/components/ui/profile-card-item";
import ProfileCardItemLoading from "@/components/ui/profile-card-item-loading";
import { useExtras } from "@/services/api/useQueries/useExtracurricular";
import ExtracurricularShowMore from "./extracurricular-showmore";

const ExtracurricularCard = () => {
  const { extras, isExtraLoading } = useExtras();

  const [showAllExtracurricular, setShowAllExtracurricular] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center bg-white px-2 xl:mt-0 ">
        {extras && !isExtraLoading ? (
          <div className="w-full flex flex-col items-center">
            <div className="w-full grid grid-cols-1 1xl:w-fit lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 p-4 1xl:px-14 pb-12 bg-white rounded-[10px]">
              {extras
                ?.slice(0, showAllExtracurricular ? extras.length : 9)
                .map((extracurricular, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Link
                        href={`extracurricular/${extracurricular.id_extra}`}
                      >
                        <ProfileCardItem profileCardData={extracurricular} />
                      </Link>
                    </React.Fragment>
                  );
                })}
            </div>
            {extras.length > 9 && (
              <ExtracurricularShowMore
                showAllExtracurricular={showAllExtracurricular}
                setShowAllExtracurricular={setShowAllExtracurricular}
              />
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 1xl:grid-cols-3 gap-4 md:gap-8 w-full 1xl:w-auto p-4 2xl:px-14 pb-12 bg-white rounded-[10px]">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <React.Fragment key={index}>
                  <ProfileCardItemLoading />
                </React.Fragment>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ExtracurricularCard;
