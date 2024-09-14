import React, { Dispatch, SetStateAction } from "react";

type MajorShowMoreProps = {
  setShowAllMajor: Dispatch<SetStateAction<boolean>>;
  showAllMajor: boolean;
};

const MajorShowMore = ({
  setShowAllMajor,
  showAllMajor,
}: MajorShowMoreProps) => {
  const handleShowMore = () => {
    setShowAllMajor(!showAllMajor);
  };

  return (
    <div className="mt-0 mb-10  px-4 w-full sm:w-[316px]">
      {!showAllMajor ? (
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

export default MajorShowMore;
