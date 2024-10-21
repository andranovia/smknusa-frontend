"use client";

import React, { useState } from "react";

import { useGalleries } from "@/services/api/useQueries/useGalleries";
import GalleryCardItem from "@/components/gallery/gallery-card-item";
import GalleryShowMore from "./gallery-showmore";

const GalleryCard = () => {
  const { galleries, isGalleriesLoading } = useGalleries();
  const [showAllGalleries, setShowAllGalleries] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center bg-white px-2 mt-4 md:mt-10 xl:mt-14 ">
        {galleries && !isGalleriesLoading ? (
          <div className="w-full flex flex-col items-center">
            <div className="w-full grid grid-cols-1 1xl:w-fit lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 p-4 1xl:px-14 pb-12 bg-white rounded-[10px]">
              {galleries
                .slice(0, showAllGalleries ? galleries.length : 9)
                .map((gallery, index) => {
                  return (
                    <React.Fragment key={index}>
                      <GalleryCardItem GalleryCardData={gallery} />
                    </React.Fragment>
                  );
                })}
            </div>
            {galleries && galleries?.length > 9 && (
              <GalleryShowMore
                setShowAllGalleries={setShowAllGalleries}
                showAllGalleries={showAllGalleries}
              />
            )}
          </div>
        ) : (
          <div className="grid grid-cols-2 1xl:grid-cols-3 gap-4 md:gap-8 w-full 1xl:w-auto p-4 2xl:px-14 pb-12 bg-white rounded-[10px]">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <React.Fragment key={index}></React.Fragment>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default GalleryCard;
