import React, { Dispatch, SetStateAction } from "react";

type GalleryShowMoreProps = {
  setShowAllGalleries: Dispatch<SetStateAction<boolean>>;
  showAllGalleries: boolean;
};

const GalleryShowMore = ({
  setShowAllGalleries,
  showAllGalleries,
}: GalleryShowMoreProps) => {
  const handleShowMore = () => {
    setShowAllGalleries(!showAllGalleries);
  };

  return (
    <div className="mt-0 mb-10  px-4 w-full sm:w-[316px]">
      {!showAllGalleries ? (
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

export default GalleryShowMore;
