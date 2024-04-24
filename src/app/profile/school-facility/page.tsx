import FacilityHero from "@/components/facility";
import FacilityCard from "@/components/facility/facility-card";
import React from "react";

const SchoolFacility = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <FacilityHero />
      <div className="container mt-20  bg-white max-w-full h-full lg:rounded-lg">
        <FacilityCard />
      </div>
    </main>
  );
};

export default SchoolFacility;
