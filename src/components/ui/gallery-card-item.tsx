import Image from "next/image";
import React from "react";
import { Gallery } from "@/services/api/useQueries/useGalleries";
import { backendUrl } from "@/utils/backendUrl";
import { Heading } from "./typography";

const GalleryCardItem = ({ GalleryCardData }: { GalleryCardData: Gallery }) => {
  return (
    <div className="bg-white rounded-lg 1xl:w-[23rem] h-full shadow-md overflow-hidden relative w-full">
      <Image
        className="w-full  min-h-[8rem] xl:min-h-[10rem]  max-h-[6rem] sm:max-h-[8rem] xl:max-h-[10rem]  object-cover"
        src={backendUrl + GalleryCardData.gallery_file}
        alt={"gallery-image"}
        width={800}
        height={800}
      />
      <div className=" px-3 xl:p-4 flex flex-col items-start gap-3 w-full my-3 xl:my-0 ">
        <Heading
          type="h2"
          className="xl:text-sm text-xs !font-[550]  xl:w-full line-clamp-1"
        >
          {GalleryCardData.gallery_title}
        </Heading>

        <Heading
          type="h4"
          className="text-xs font-[500] leading-6  mb-2 xl:w-full  text-gray line-clamp-2"
        >
          {GalleryCardData.gallery_text}
        </Heading>
      </div>
    </div>
  );
};

export default GalleryCardItem;
