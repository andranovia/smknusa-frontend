"use client";

import React, { useState } from "react";
import DeviceFormCardItem from "@/components/ui/device-form-card-item";
import { useTeaching } from "@/services/api/useQueries/useTeaching";
import DeviceShowMore from "./device-showmore";

const TeachingDeviceCard = () => {
  const { teachings } = useTeaching();
  const [showAllDevice, setShowAllDevice] = useState(false);
  const postsPerPage = 6;

  const currentMaterials = showAllDevice
    ? teachings
    : teachings?.slice(0, postsPerPage);

  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-lg w-full">
      <div className="flex justify-center items-center flex-col w-full ">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-8 px-2 lg:px-4 py-4 1xl:px-12 pb-12 bg-white rounded-[10px] w-full">
          {currentMaterials?.map((material, index) => (
            <React.Fragment key={index}>
              <DeviceFormCardItem deviceFormData={material} />
            </React.Fragment>
          ))}
        </div>
        <div className="mt-4 mb-12">
          <DeviceShowMore
            setShowAllDevice={setShowAllDevice}
            showAllDevice={showAllDevice}
          />
        </div>
      </div>
    </div>
  );
};

export default TeachingDeviceCard;
