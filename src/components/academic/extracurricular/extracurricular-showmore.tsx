import React, { Dispatch, SetStateAction } from "react";

type ExtracurricularShowMoreProps = {
  setShowAllExtracurricular: Dispatch<SetStateAction<boolean>>;
  showAllExtracurricular: boolean;
};

const ExtracurricularShowMore = ({
  setShowAllExtracurricular,
  showAllExtracurricular,
}: ExtracurricularShowMoreProps) => {
  const handleShowMore = () => {
    setShowAllExtracurricular(!showAllExtracurricular);
  };

  return (
    <div className="mt-0 mb-10  px-4 w-full sm:w-[316px]">
      {!showAllExtracurricular ? (
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

export default ExtracurricularShowMore;
