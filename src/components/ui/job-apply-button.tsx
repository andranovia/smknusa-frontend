"use client";
import React, { useState } from "react";
import Modal from "./job-card-modal";
interface ApplyButtonProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  vacancy: any;
  className?: string;
}
const ApplyButton: React.FC<ApplyButtonProps> = ({ vacancy, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleApplyClick = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button className={className} onClick={handleApplyClick}>
        Lamar
      </button>
      {isModalOpen && <Modal vacancy={vacancy} closeModal={closeModal} />}
    </>
  );
};
export default ApplyButton;
