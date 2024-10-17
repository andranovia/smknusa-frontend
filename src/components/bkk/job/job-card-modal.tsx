import React, { useState } from "react";
import { motion } from "framer-motion";
import { Vacancy } from "@/services/api/useQueries/useVacancies";
import { Paragraph } from "../../ui/typography";
import { defaultTransition } from "../../animation/transition";
const Modal = ({
  vacancy,
  closeModal,
}: {
  vacancy: Vacancy;
  closeModal: () => void;
}) => {
  const [fullName, setFullName] = useState("");
  const [education, setEducation] = useState("");
  const [school, setSchool] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  //   const [file, setFile] = useState<File | null>(null);
  const handleSubmit = () => {
    closeModal();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={defaultTransition}
        className="bg-white p-6 rounded-lg w-full max-w-2xl mx-4 lg:mx-0"
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold uppercase line-clamp-1">
            Lamar Pekerjaan {vacancy.loker_description}
          </h1>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>
        <hr className="mb-4" />
        <form onSubmit={handleSubmit}>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ defaultTransition, delay: 0.1 }}
            className="mb-4"
          >
            <label className="block text-sm mb-2">Nama Lengkap</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-2 border rounded placeholder:text-sm sm:placeholder:text-base"
              placeholder="Masukkan Nama Sesuai Ijazah"
              required
            />
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="mb-4"
          >
            <label className="block text-sm mb-2">Pendidikan Terakhir</label>
            <input
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full p-2 border rounded placeholder:text-sm sm:placeholder:text-base"
              placeholder="ex. Sarjana Informatika, SMK RPL"
              required
            />
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...defaultTransition, delay: 0.3 }}
            className="mb-4"
          >
            <label className="block text-sm mb-2">
              Lulusan Kampus / Sekolah
            </label>
            <input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              className="w-full p-2 border rounded placeholder:text-xs sm:placeholder:text-base"
              placeholder="ex. SMK Negeri 1 Purwosari, Poltek Elektronika Negeri Surabaya"
              required
            />
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...defaultTransition, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 mb-4"
          >
            <div className="w-full h-full">
              <label className="block text-sm mb-2">Tanggal Lahir</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full border rounded sm:w-full h-[42px] px-2"
                required
              />
            </div>
            <div className="w-full h-full">
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border h-[42px] rounded placeholder:text-sm sm:placeholder:text-base"
                placeholder="johndoe@domain.com"
                required
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...defaultTransition, delay: 0.5 }}
            className="mb-4"
          >
            <label className="block text-sm mb-2">File Ijazah</label>
            <input
              type="file"
              //   onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full p-2 border rounded"
              accept=".pdf,.doc,.docx,.jpg,.png"
              required
            />
            <Paragraph className="text-sm text-gray-500 mt-1">
              Format yang diperbolehkan: PDF, DOC, DOCX, JPG, PNG
            </Paragraph>
          </motion.div>
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="bg-yellow-light text-blue-base py-2 px-4 rounded"
            >
              Kirim
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
export default Modal;
