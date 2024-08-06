import React, { Dispatch, SetStateAction, useState } from "react";

type FacilityShowMoreProps = {
  setShowAllFacillity: Dispatch<SetStateAction<boolean>>;
  showAllFacillity: boolean;
};

const FacilityShowMore = ({
  setShowAllFacillity,
  showAllFacillity,
}: FacilityShowMoreProps) => {
  const handleShowMore = () => {
    setShowAllFacillity(!showAllFacillity);
  };

  return (
    <div className="my-8 xl:mt-0 mb-10  px-4 w-full sm:w-[316px]">
      {!showAllFacillity ? (
        <button
          className="w-full py-2 border-2 border-primary uppercase text-blue-base bg-yellow-light rounded-md"
          onClick={handleShowMore}
        >
          Tampilkan Lebih Banyak
        </button>
      ) : (
        <button
          className="w-full py-2 border-2 border-primary uppercase text-blue-base bg-yellow-light rounded-md"
          onClick={handleShowMore}
        >
          Tampilkan Sedikit
        </button>
      )}
    </div>
  );
};

export default FacilityShowMore;
