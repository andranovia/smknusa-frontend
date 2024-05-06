"use client";

import FacilityHero from "@/components/facility";
import FacilityCard from "@/components/facility/facility-card";
import FacilityFilter from "@/components/facility/facillity-filter";
import FacilityShowMore from "@/components/facility/facillity-showmore";
import React, { useState } from "react";

const SchoolFacility = () => {
  const [showAllFacillity, setShowAllFacillity] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-base  ">
      <FacilityHero />
      <div className="flex lg:w-full flex-col items-center  p-3 ">
        <div className="container mt-20 lg:mt-0 flex flex-col  items-center  bg-white max-w-full h-full lg:rounded-lg">
          <FacilityFilter />
          <FacilityCard showAllFacillity={showAllFacillity} />
          <FacilityShowMore
            showAllFacillity={showAllFacillity}
            setShowAllFacillity={setShowAllFacillity}
          />
        </div>
      </div>
    </div>
  );
};

export default SchoolFacility;
