import React, { useState } from "react";
import { Student, useResidents } from "@/services/api/useQueries/useResidents";
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
  const { isStudentsLoading } = useResidents();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const [checkedAll, setCheckedAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [activeTable, setActiveTable] = useState<string>("students");

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentStudentsData = studentsData?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setCheckedAll(false);
  };

  const handleCheckAll = () => {
    const isChecked = !checkedAll;
    setCheckedAll(isChecked);

    if (isChecked) {
      const pageIds = currentStudentsData?.map((student) => student.id) || [];
      setCheckedItems((prev) => {
        const newItems = [...prev, ...pageIds.map(String)];
        const uniqueItems = newItems.filter((item, index) => newItems.indexOf(item) === index);
        return uniqueItems;
      });
    } else {
      const pageIds = currentStudentsData?.map((student) => String(student.id)) || [];
      setCheckedItems((prev) => prev.filter((id) => !pageIds.includes(id)));
    }
  };

  const handleCheckItem = (id: string) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleActiveTableChange = (table:string) => {
    setActiveTable(table);
    handleChangeTable(table);
  }

  return (
    <div className="relative flex flex-col 1md:rounded-lg border w-full">
      <div className="flex items-center justify-between mx-4 1md:mx-12 gap-4">
        <div className="flex w-full flex-col sm:flex-row items-start sm:items-center justify-between 1md:justify-start gap-4">
          <Heading
            type="h5"
            className="!text-sm font-bold text-blue-base 1md:w-fit my-6"
          >
            Peserta Didik
          </Heading>
          <Heading
            type="h5"
            className="!text-xs min-w-24 text-center bg-amber-100 bg-opacity-70 border-yellow px-3 py-0.5 border rounded-full text-yellow-500 -mt-6 sm:mt-0 mb-7 sm:mb-0  sm:mr-14 2md:mr-0 "
          >
            {studentsData?.length !== undefined && studentsData?.length > 0   ?  studentsData?.length : 0} orang
          </Heading>
        </div>

        <div className="-mt-14 sm:-mt-6">
          <ResidentDropdownChange handleChangeTable={handleActiveTableChange} activeTable={activeTable} studentsData={studentsData || []} checkedItems={checkedItems} />
        </div>
      </div>
      <div className="overflow-x-scroll 2xl:overflow-auto w-full scrollbar-thin scrollbar-thumb-[#F5C451] scrollbar-track-yellow-100">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  md:min-w-[1190px]">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
            <tr className="border w-full md:table-row hidden ">
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all"
                    type="checkbox"
                    className="w-4 h-4  bg-gray-100 border-gray-300 rounded focus:ring-yellow  ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 "
                    checked={checkedAll}
                    onChange={handleCheckAll}
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
            {studentsData && !isStudentsLoading
              ? currentStudentsData?.map((student, index) => (
                  <React.Fragment key={index}>
                    <tr className="bg-white border flex flex-col md:table-row">
                      <td className="w-4  px-6 py-4 md:p-4 flex items-center md:table-cell">
                        <div className="flex items-center gap-4">
                          <input
                            id={`checkbox-table-${index}`}
                            type="checkbox"
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-yellow ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2"
                            checked={checkedItems.includes(String(student.id))}
                            onChange={() => handleCheckItem(String(student.id))}
                          />
                          <label
                            htmlFor={`checkbox-table-${index}`}
                            className="block md:hidden "
                          >
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <td className="px-6 py-4 flex gap-2 items-center md:table-cell md:justify-start  justify-between ">
                        <span className="block md:hidden text-sm font-bold text-blue-base">
                          NISN
                        </span>

                        <p>{student.nisn}</p>
                      </td>
                      <td className="px-6 py-4 md:table-cell flex gap-2 justify-between items-center truncate md:max-w-[12rem]">
                        <span className="block md:hidden text-sm font-bold text-blue-base">
                          Name
                        </span>
                        <span className="truncate max-w-[10rem] ">
                          {student.nama}
                        </span>
                      </td>
                      <td className="px-6 py-4 md:table-cell flex gap-2 justify-between items-center">
                        <span className="block md:hidden text-sm font-bold text-blue-base">
                          Kelas
                        </span>
                        <span className="md:w-full text-center text-xs">
                          <p className=" bg-amber-100 bg-opacity-70 border-yellow p-1 border rounded-full text-yellow-500">
                            {student.kelas}
                          </p>
                        </span>
                      </td>
                      <td className="px-6 py-4 md:table-cell flex gap-2 justify-between items-center truncate md:max-w-[10rem]">
                        <span className="block md:hidden text-sm font-bold text-blue-base">
                          Alamat
                        </span>
                        <span className="truncate max-w-[10rem]">
                          {student.alamat}
                        </span>
                      </td>
                      <td className="px-6 py-4 md:table-cell flex gap-2 justify-between items-center">
                        <span className="block md:hidden text-sm font-bold text-blue-base">
                          TTL
                        </span>
                        {student.tempat_lahir}, {student.tanggal_lahir}
                      </td>
                      <td className="px-6 py-4 md:table-cell flex gap-2 justify-between items-center">
                        <span className="block md:hidden text-sm font-bold text-blue-base">
                          Jenis Kelamin
                        </span>
                        {student.gender === "L" ? "Laki-laki" : "Perempuan"}
                      </td>
                    </tr>
                  </React.Fragment>
                ))
              : Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <React.Fragment key={index}>
                      <tr className="bg-white border flex flex-col md:table-row animate-pulse ">
                        <td className="w-4 px-6 py-4 md:p-4 flex items-center md:table-cell">
                          <div className="flex items-center gap-4">
                            <div className="w-4 h-4 bg-gray-200 rounded"></div>
                            <label className="block md:hidden bg-gray-200 h-4 w-20 rounded"></label>
                          </div>
                        </td>

                        <td className="px-6 py-4 flex gap-2 items-center md:table-cell md:justify-start justify-between">
                          <span className="block md:hidden bg-gray-200 h-4 w-10 rounded"></span>
                          <div className="bg-gray-200 h-4 w-24 rounded"></div>
                        </td>

                        <td className="px-6 py-4 md:table-cell flex gap-2 justify-between items-center truncate md:max-w-[12rem]">
                          <span className="block md:hidden bg-gray-200 h-4 w-10 rounded"></span>
                          <div className="bg-gray-200 h-4 w-32 rounded"></div>
                        </td>

                        <td className="px-6 py-4 md:table-cell flex gap-2 justify-between items-center">
                          <span className="block md:hidden bg-gray-200 h-4 w-10 rounded"></span>
                          <div className="bg-gray-200 h-4 w-20 rounded-full"></div>
                        </td>

                        <td className="px-6 py-4 md:table-cell flex gap-2 justify-between items-center truncate md:max-w-[10rem]">
                          <span className="block md:hidden bg-gray-200 h-4 w-10 rounded"></span>
                          <div className="bg-gray-200 h-4 w-32 rounded"></div>
                        </td>

                        <td className="px-6 py-4 md:table-cell flex gap-2 justify-between items-center">
                          <span className="block md:hidden bg-gray-200 h-4 w-10 rounded"></span>
                          <div className="bg-gray-200 h-4 w-32 rounded"></div>
                        </td>

                        <td className="px-6 py-4 md:table-cell flex gap-2 justify-between items-center">
                          <span className="block md:hidden bg-gray-200 h-4 w-10 rounded"></span>
                          <div className="bg-gray-200 h-4 w-16 rounded"></div>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
          </tbody>
        </table>
      </div>
      <PaginationTable
        totalPosts={studentsData?.length}
        postsPerPage={postsPerPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default StudentsTable;
