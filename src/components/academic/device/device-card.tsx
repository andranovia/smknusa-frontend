"use client";

import React, { useState } from "react";
import DeviceFormCardItem from "@/components/academic/device/device-form-card-item";
import { useTeaching } from "@/services/api/useQueries/useTeaching";
import DataCardItemLoading from "@/components/ui/data-card-item-loading";
import DeviceShowMore from "./device-showmore";

const TeachingDeviceCard = ({
  deviceFormFilter,
}: {
  deviceFormFilter: { search: string };
}) => {
  const { teachings, isTeachingsLoading } = useTeaching(
    undefined,
    deviceFormFilter
  );
  const [showAllDevice, setShowAllDevice] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-lg w-full">
      <div className="flex justify-center items-center flex-col w-full ">
        {!isTeachingsLoading ? (
          <>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-8 px-2 lg:px-4 py-4 1xl:px-12 pb-12 bg-white rounded-[10px] w-full">
              {teachings?.map((material, index) => (
                <React.Fragment key={index}>
                  <DeviceFormCardItem deviceFormData={material} />
                </React.Fragment>
              ))}
            </div>

            {teachings && teachings?.length > 6 && (
              <DeviceShowMore
                setShowAllDevice={setShowAllDevice}
                showAllDevice={showAllDevice}
              />
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
  );
};

export default TeachingDeviceCard;
