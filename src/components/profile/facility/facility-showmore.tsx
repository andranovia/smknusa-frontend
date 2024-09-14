import React, { Dispatch, SetStateAction } from "react";

type FacilityShowMoreProps = {
  setShowAllFacility: Dispatch<SetStateAction<boolean>>;
  showAllFacility: boolean;
};

const FacilityShowMore = ({
  setShowAllFacility,
  showAllFacility,
}: FacilityShowMoreProps) => {
  const handleShowMore = () => {
    setShowAllFacility(!showAllFacility);
  };

  return (
    <div className="mt-0 mb-10  px-4 w-full sm:w-[316px]">
      {!showAllFacility ? (
        <button
          className="w-full py-2 border-none  text-blue-base bg-yellow-light rounded-md"
          onClick={handleShowMore}
        >
          Tampilkan Lebih Banyak
        </button>
      ) : (
        <button
          className="w-full py-2 border-none text-blue-base bg-yellow-light rounded-md"
          onClick={handleShowMore}
        >
          Tampilkan Sedikit
        </button>
      )}
    </div>
  );
};

export default FacilityShowMore;
