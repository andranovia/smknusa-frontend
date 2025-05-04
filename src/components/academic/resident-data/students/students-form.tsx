"use client";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React, { Dispatch, SetStateAction } from "react";
import { Heading } from "@/components/ui/typography";

const StudentsForm = ({
  studentsFilter,
  setStudentsFilter,
}: {
  studentsFilter: {
    search_nama: string;
    search_kelas: string;
  };
  setStudentsFilter: Dispatch<
    SetStateAction<{ search_nama: string; search_kelas: string }>
  >;
}) => {
  const studentClassData = [
    "X RPL",
    "XI RPL",
    "XII RPL",
    "X DKV 1",
    "X DKV 2",
    "XI DKV 1",
    "XI DKV 2",
    "XII DKV 1",
    "XII DKV 2",
    "X TKJ 1",
    "X TKJ 2",
    "XI TKJ 1",
    "XI TKJ 2",
    "XII TKJ 1",
    "XII TKJ 2",
    "X MM 1",
    "X MM 2",
    "XI MM 1",
    "XI MM 2",
    "XII MM 1",
    "XII MM 2",
    "X TKR 1",
    "X TKR 2",
    "XI TKR 1",
    "XI TKR 2",
    "XII TKR 1",
    "XII TKR 2",
    "X TBO 1",
    "X TBO 2",
    "XI TBO 1",
    "XI TBO 2",
    "XII TBO 1",
    "XII TBO 2",
    "X TPM 1",
    "X TPM 2",
    "XI TPM 1",
    "XI TPM 2",
    "XII TPM 1",
    "XII TPM 2",
    "X TPL 1",
    "X TPL 2",
    "XI TPL 1",
    "XI TPL 2",
    "XII TPL 1",
    "XII TPL 2",
    "X TM 1",
    "X TM 2",
    "XI TM 1",
    "XI TM 2",
    "XII TM 1",
    "XII TM 2",
    "X ATPH 1",
    "X ATPH 2",
    "X ATPH 3",
    "XI ATPH 1",
    "XI ATPH 2",
    "XI ATPH 3",
    "XII ATPH 1",
    "XII ATPH 2",
    "XII ATPH 3",
    "X APHP 1",
    "X APHP 2",
    "X APHP 3",
    "XI APHP 1",
    "XI APHP 2",
    "XI APHP 3",
    "XII APHP 1",
    "XII APHP 2",
    "XII APHP 3",
  ];

  return (
    <div className="relative z-10 w-full -mt-20 1xl:-mt-32">
      <div className="flex justify-center items-center p-2 xl:bg-transparent">
        <div className=" bg-white w-full px-6 xl:px-12 py-4 xl:py-10 rounded-lg border-white shadow-md">
          <Heading
            type="h5"
            className="block font-medium xl:text-lg mb-5 text-blue-base mt-1"
          >
            Form Pencarian Peserta Didik
          </Heading>
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-12 gap-4 mb-3">
            <input
              type="text"
              id="student-name"
              name="student-name"
              value={studentsFilter.search_nama}
              onChange={(e) =>
                setStudentsFilter({
                  ...studentsFilter,
                  search_nama: e.target.value,
                })
              }
              placeholder="Masukkan NISN atau Nama"
              className="xl:w-[107%] h-10 border border-gray-300 rounded-lg p-2"
            />
            <Menu as="div" className="relative inline-block text-left w-full ">
              <div className="w-full">
                <MenuButton className="inline-flex text-gray-light w-full justify-between items-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  {studentsFilter.search_kelas
                    ? studentsFilter.search_kelas
                    : "Pilih Kelas"}
                  <Image
                    src="/assets/icon/arrow-right.svg"
                    width={16}
                    height={16}
                    alt="chevron-down"
                    className="w-4 h-4 rotate-90"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute scrollbar scrollbar-w-2 scrollbar-thumb-[#F5C451] scrollbar-track-yellow-100 max-h-[16rem] overflow-auto right-0 z-40 mt-2 lg:w-[18rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <span
                      onClick={() =>
                        setStudentsFilter({
                          ...studentsFilter,
                          search_kelas: "",
                        })
                      }
                      className={`${
                        studentsFilter.search_kelas === "" ? "bg-gray-200" : ""
                      } block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900`}
                    >
                      Semua
                    </span>
                  </MenuItem>
                  {studentClassData.map((filter, index) => (
                    <MenuItem key={index}>
                      <span
                        onClick={() =>
                          setStudentsFilter({
                            ...studentsFilter,
                            search_kelas: filter,
                          })
                        }
                        className={`block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900`}
                      >
                        {filter}
                      </span>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-center py-3 gap-3 relative xl:-right-2">
            <button
              onClick={() =>
                setStudentsFilter({ search_kelas: "", search_nama: "" })
              }
              className="bg-gray-200 w-full text-blue-base py-2 px-4 rounded-lg text-[16px] font-medium 1xl:w-28 h-10"
            >
              Reset
            </button>
            <button className="bg-yellow-light w-full text-blue-base py-2 px-4 rounded-lg text-[16px] font-medium 1xl:w-28 h-10">
              Cari
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsForm;
