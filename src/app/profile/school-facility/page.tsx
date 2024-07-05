"use client";

import FacilityHero from "@/components/profile/facility";
import FacilityCard from "@/components/profile/facility/facility-card";
import FacilityFilter from "@/components/profile/facility/facility-filter";
import React from "react";

const SchoolFacility = () => {


  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-base  ">
      <FacilityHero />
      <div className="flex lg:w-full flex-col items-center  p-3 ">
        <div className="container gap-10 lg:gap-0 flex flex-col  items-center  bg-white max-w-full h-full lg:rounded-lg">
          <FacilityFilter />
          <FacilityCard />
         
        </div>
      </div>
    </div>
  );
};

export default SchoolFacility;
