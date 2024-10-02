import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Gallery } from "@/services/api/useQueries/useGalleries";
import { Heading, Paragraph } from "./typography";
import { defaultTransition } from "../animation/transition";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  GalleryCardData: Gallery;
}

const GalleryModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  GalleryCardData,
}) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`w-full fixed inset-0 z-50 flex items-center justify-center ${
        isOpen
          ? "bg-opacity-50 pointer-events-auto"
          : "bg-opacity-0 pointer-events-none"
      } bg-black`}
      onClick={handleOverlayClick}
    >
      <motion.div
        initial={false}
        animate={isOpen ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
        transition={defaultTransition}
        className="bg-white rounded-lg w-full max-w-[600px] mx-4 lg:mx-0 py-5 px-6 shadow-lg"
      >
        <motion.div
          initial={false}
          animate={isOpen ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ ...defaultTransition, delay: 0.3 }}
        >
          <Heading type="h3" className="text-base sm:text-lg font-bold mb-4">
            {GalleryCardData.gallery_title}
          </Heading>
        </motion.div>

        <motion.div
          initial={false}
          animate={isOpen ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ ...defaultTransition, delay: 0.4 }}
          className="flex items-center mb-8 gap-2 "
        >
          <Image
            src={"/assets/icon/location-filled.svg"}
            alt={GalleryCardData.gallery_location}
            width={14}
            height={14}
            className="w-4 h-4"
          />
          <Paragraph className="text-sm sm:text-base line-clamp-1">
            {GalleryCardData.gallery_location}
          </Paragraph>
        </motion.div>

        <motion.div
          initial={false}
          animate={isOpen ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ ...defaultTransition, delay: 0.5 }}
        >
          <Paragraph>{GalleryCardData.gallery_text}</Paragraph>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GalleryModal;
