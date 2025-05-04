import React, { useState } from "react";
import Link from "next/link";
import FeatureCardItem from "@/components/ui/feature-card-item";

import FeatureCardItemLoading from "@/components/ui/feature-card-item-loading";
import {
  Facility,
  useFacilities,
} from "@/services/api/useQueries/useFacilities";
import FacilityShowMore from "./facility-showmore";

const FacilityCard = ({
  facilities,
}: {
  facilities: Facility[] | undefined;
}) => {
  const [showAllFacility, setShowAllFacility] = useState(false);
  const { isFacilityLoading } = useFacilities();
  return (
    <>
      <div className="w=-full flex justify-center items-center bg-white px-2 xl:mt-0 ">
        {facilities && !isFacilityLoading ? (
          <div className="flex flex-col items-center w-full  lg:w-fit ">
            <div className="w-full lg:w-fit grid grid-cols-1 lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 px-2 1xl:px-14 pb-12 bg-white rounded-[10px]">
              {facilities
                .slice(0, showAllFacility ? facilities.length : 9)
                .map((facility, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Link
                        href={`/profile/school-facility/${facility.id_facility}`}
                      >
                        <FeatureCardItem featureCardData={facility} />
                      </Link>
                    </React.Fragment>
                  );
                })}
            </div>
            {facilities.length > 9 && (
              <FacilityShowMore
                showAllFacility={showAllFacility}
                setShowAllFacility={setShowAllFacility}
              />
            )}
          </div>
        ) : (
          <div className="w-full 1xl:w-fit grid grid-cols-1 lg:grid-cols-2 1xl:grid-cols-3 gap-4 md:gap-8 px-2 1xl:px-14 pb-12 bg-white rounded-[10px]">
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
    </>
  );
};

export default FacilityCard;
