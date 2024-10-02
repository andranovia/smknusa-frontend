import React, { useState } from "react";
import { Student } from "@/services/api/useQueries/useResidents";
import { Heading } from "@/components/ui/typography";
import PaginationTable from "../../../ui/pagination-table";
import ResidentDropdownChange from "../resident-dropdown-change";

type StudentsTableProps = {
  studentsData?: Student[] | null;
  // eslint-disable-next-line no-unused-vars
  handleChangeTable: (current: string) => void;
};
const StudentsTable = ({
  studentsData,
  handleChangeTable,
}: StudentsTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentStudentsData = studentsData?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="relative flex flex-col  1xl:rounded-lg border w-full">
      <div className="flex  items-center justify-between mx-4 1xl:mx-12 gap-4">
        <div className="flex w-full  items-center justify-between 1xl:justify-start  gap-4">
          <Heading
            type="h5"
            className="!text-sm font-bold text-blue-base  1xl:w-fit  my-6"
          >
            Peserta Didik
          </Heading>
          <Heading
            type="h5"
            className="!text-xs bg-amber-100 bg-opacity-70 border-yellow px-3 py-0.5 border rounded-full text-yellow-500"
          >
            {studentsData?.length + " " + "orang"}
          </Heading>
        </div>
        <ResidentDropdownChange handleChangeTable={handleChangeTable} />
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
          <tr className="border w-full xl:table-row hidden ">
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
              NISN
            </th>

            <th scope="col" className="px-6 py-3">
              Nama
            </th>
            <th scope="col" className="px-6 py-3">
              Kelas
            </th>
            <th scope="col" className="px-6 py-3">
              Alamat
            </th>
            <th scope="col" className="px-6 py-3">
              TTL
            </th>
            <th scope="col" className="px-6 py-3">
              Jenis Kelamin
            </th>
          </tr>
        </thead>
        <tbody>
          {currentStudentsData?.map((student, index) => (
            <React.Fragment key={index}>
              <tr className="bg-white border flex flex-col xl:table-row">
                <td className="w-4  px-6 py-4 xl:p-4 flex items-center xl:table-cell">
                  <div className="flex items-center gap-4">
                    <input
                      id={`checkbox-table-${index}`}
                      type="checkbox"
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-yellow ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2"
                    />
                    <label
                      htmlFor={`checkbox-table-${index}`}
                      className="block xl:hidden "
                    >
                      Checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4 flex gap-2 items-center xl:table-cell xl:justify-start  justify-between ">
                  <span className="block xl:hidden text-sm font-bold text-blue-base">
                    NISN
                  </span>

                  <p>{student.nisn}</p>
                </td>
                <td className="px-6 py-4 xl:table-cell flex gap-2 justify-between items-center truncate xl:max-w-[12rem]">
                  <span className="block xl:hidden text-sm font-bold text-blue-base">
                    Name
                  </span>
                  <span className="truncate max-w-[10rem] ">
                    {student.nama}
                  </span>
                </td>
                <td className="px-6 py-4 xl:table-cell flex gap-2 justify-between items-center">
                  <span className="block xl:hidden text-sm font-bold text-blue-base">
                    Kelas
                  </span>
                  <span className="xl:w-full text-center text-xs">
                    <p className=" bg-amber-100 bg-opacity-70 border-yellow p-1 border rounded-full text-yellow-500">
                      {student.kelas}
                    </p>
                  </span>
                </td>
                <td className="px-6 py-4 xl:table-cell flex gap-2 justify-between items-center truncate xl:max-w-[10rem]">
                  <span className="block xl:hidden text-sm font-bold text-blue-base">
                    Alamat
                  </span>
                  <span className="truncate max-w-[10rem]">
                    {student.alamat}
                  </span>
                </td>
                <td className="px-6 py-4 xl:table-cell flex gap-2 justify-between items-center">
                  <span className="block xl:hidden text-sm font-bold text-blue-base">
                    TTL
                  </span>
                  {student.tempat_lahir}, {student.tanggal_lahir}
                </td>
                <td className="px-6 py-4 xl:table-cell flex gap-2 justify-between items-center">
                  <span className="block xl:hidden text-sm font-bold text-blue-base">
                    Jenis Kelamin
                  </span>
                  {student.gender === "L" ? "Laki-laki" : "Perempuan"}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <PaginationTable
        totalPosts={studentsData?.length}
        postsPerPage={postsPerPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default StudentsTable;
