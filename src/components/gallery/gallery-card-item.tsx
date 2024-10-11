import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { backendUrl } from "@/utils/backendUrl";
import { Gallery } from "@/services/api/useQueries/useGalleries";
import { Heading } from "../ui/typography";
import GalleryModal from "./gallery-modal";

const GalleryCardItem = ({ GalleryCardData }: { GalleryCardData: Gallery }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleHover = () => setIsHovered(true);
  const handleHoverLeave = () => setIsHovered(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  return (
    <>
      <div
        className={`relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer mx-auto transition-transform duration-300 ${
          isHovered ? "scale-105" : "scale-100"
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverLeave}
        onClick={handleModalOpen}
        style={{ width: "23rem", maxWidth: "100%", height: "100%" }}
      >
        <Image
          className={`w-full min-h-[10rem] sm:min-h-[7rem] xl:min-h-[12rem] max-h-[8rem] sm:max-h-[10rem] xl:max-h-[12rem] object-cover transition-all duration-300  ${
            isHovered ? "brightness-75" : ""
          }`}
          src={backendUrl + GalleryCardData.gallery_file}
          alt={"gallery-image"}
          width={800}
          height={800}
        />
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex justify-center items-end pb-4"
          >
            <Heading type="h5" className="text-white text-sm font-bold">
              {GalleryCardData.gallery_title}
            </Heading>
          </motion.div>
        )}
      </div>
      <GalleryModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        GalleryCardData={GalleryCardData}
      />
    </>
  );
};

export default GalleryCardItem;
