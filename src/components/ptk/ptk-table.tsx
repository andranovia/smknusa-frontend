"use client";

import Image from "next/image";
import React, { useState } from "react";
import PaginationTable from "../feature/pagination-table";

const PtkTable = () => {
  const ptkData = [
    {
      nama: "Raditya Wahyu Sasono",
      nip: "198609302010121001",
      jenis_kelamin: "Laki - Laki",
      mapel: "Produktif RPL",
    },
    {
      nama: "Raditya Wahyu Sasono",
      nip: "198609302010121001",
      jenis_kelamin: "Laki - Laki",
      mapel: "Produktif RPL",
    },
    {
      nama: "Raditya Wahyu Sasono",
      nip: "198609302010121001",
      jenis_kelamin: "Laki - Laki",
      mapel: "Produktif RPL",
    },
    {
      nama: "Raditya Wahyu Sasono",
      nip: "198609302010121001",
      jenis_kelamin: "Laki - Laki",
      mapel: "Produktif RPL",
    },
    {
      nama: "Raditya Wahyu Sasono",
      nip: "198609302010121001",
      jenis_kelamin: "Laki - Laki",
      mapel: "Produktif RPL",
    },
    {
      nama: "Raditya Wahyu Sasono",
      nip: "198609302010121001",
      jenis_kelamin: "Laki - Laki",
      mapel: "Produktif RPL",
    },
    {
      nama: "Raditya Wahyu Sasono",
      nip: "198609302010121001",
      jenis_kelamin: "Laki - Laki",
      mapel: "Produktif RPL",
    },
    {
      nama: "Raditya Wahyu Sasono",
      nip: "198609302010121001",
      jenis_kelamin: "Laki - Laki",
      mapel: "Produktif RPL",
    },
    {
      nama: "Raditya Wahyu Sasono",
      nip: "198609302010121001",
      jenis_kelamin: "Laki - Laki",
      mapel: "Produktif RPL",
    },
    {
      nama: "Raditya Wahyu Sasono",
      nip: "198609302010121001",
      jenis_kelamin: "Laki - Laki",
      mapel: "Produktif RPL",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPtkData = ptkData?.slice(indexOfFirstPost, indexOfLastPost);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="relative flex flex-col  overflow-x-auto  lg:rounded-lg border lg:w-[84%]">
      <div className="flex  items-center justify-between mx-4 lg:mx-12 gap-4">
        <div className="flex  items-center justify-between lg:justify-start  gap-4">
          <h1 className="text-sm font-bold text-blue-base w-1/2 lg:w-fit  my-6">
            Pendidik Tenaga Kependidikan
          </h1>
          <p className="text-xs bg-amber-100 bg-opacity-70 border-yellow px-3 py-0.5 border rounded-full text-yellow-500">
            {ptkData.length + " " + "orang"}
          </p>
        </div>
        <Image
          src={"/assets/icon/candle.svg"}
          alt="candle"
          width={20}
          height={20}
          className="w-6 h-6"
        />
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
          <tr className="border w-full lg:table-row hidden ">
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  className="w-4 h-4  bg-gray-100 border-gray-300 rounded focus:ring-yellow  ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 "
                />
                <label htmlFor="checkbox-all" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Nama
            </th>

            <th scope="col" className="px-6 py-3">
              NIP
            </th>
            <th scope="col" className="px-6 py-3">
              Jenis Kelamin
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Mapel
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPtkData.map((ptk, index) => (
            <React.Fragment key={index}>
              <tr className="bg-white border flex flex-col md:table-row">
                <td className="w-4  px-6 py-4 lg:p-4 flex items-center md:table-cell">
                  <div className="flex items-center gap-4">
                    <input
                      id={`checkbox-table-${index}`}
                      type="checkbox"
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-yellow ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2"
                    />
                    <label
                      htmlFor={`checkbox-table-${index}`}
                      className="block lg:hidden "
                    >
                      Checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4 flex gap-2 items-center md:table-cell lg:justify-start  justify-between ">
                  <span className="block lg:hidden text-sm font-bold text-blue-base">Nama</span>

                  <div className="flex gap-4 items-center ">
                    <Image
                      src={"/assets/icon/avatar-example.svg"}
                      alt="avatar-example"
                      width={20}
                      height={20}
                      className="w-8 h-8"
                    />
                    <p>{ptk.nama}</p>
                  </div>
                </td>
                <td className="px-6 py-4 md:table-cell flex gap-2 justify-between items-center">
                  <span className="block lg:hidden text-sm font-bold text-blue-base">NIP</span>
                  {ptk.nip}
                </td>
                <td className="px-6 py-4 md:table-cell flex gap-2 justify-between items-center">
                  <span className="block lg:hidden text-sm font-bold text-blue-base">Jenis Kelamin</span>
                  {ptk.jenis_kelamin}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-full flex justify-between  md:w-1/3 md:table-cell "
                >
                  <span className="block lg:hidden text-sm font-bold text-blue-base">Mapel</span>

                  <span className="lg:w-full text-center text-xs flex lg:justify-center items-center">
                    <p className=" lg:w-1/3 bg-amber-100 bg-opacity-70 border-yellow px-2 py-1 border rounded-full text-yellow-500">{ptk.mapel}</p>
                  </span>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <PaginationTable
        totalPosts={ptkData.length}
        postsPerPage={postsPerPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default PtkTable;
