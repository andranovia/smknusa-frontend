import Image from "next/image";
import React, { useState } from "react";
import { Teacher, useResidents } from "@/services/api/useQueries/useResidents";
import { Heading } from "@/components/ui/typography";
import PaginationTable from "../../../ui/pagination-table";
import ResidentDropdownChange from "../resident-dropdown-change";

type TeachersTableProps = {
  teachersData?: Teacher[] | null;
  // eslint-disable-next-line no-unused-vars
  handleChangeTable: (current: string) => void;
};
const TeachersTable = ({
  teachersData,
  handleChangeTable,
}: TeachersTableProps) => {
  const { isTeachersLoading } = useResidents();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const [checkedAll, setCheckedAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [activeTable, setActiveTable] = useState<string>("teachers");

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPtkData = teachersData?.slice(indexOfFirstPost, indexOfLastPost);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setCheckedAll(false);
  };

  const handleCheckAll = () => {
    const isChecked = !checkedAll;
    setCheckedAll(isChecked);

    if (isChecked) {
      const pageIds = currentPtkData?.map((teacher) => teacher.id) || [];
      setCheckedItems((prev) => {
        const newItems = [...prev, ...pageIds.map(String)];
        const uniqueItems = newItems.filter((item, index) => newItems.indexOf(item) === index);
        return uniqueItems;
      });
    } else {
      const pageIds = currentPtkData?.map((teacher) => String(teacher.id)) || [];
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
    <div className="relative flex flex-col 1xl:rounded-lg border w-full ">
      <div className="flex items-center justify-between mx-4 1xl:mx-12 gap-4">
        <div className="flex w-full flex-col sm:flex-row items-start sm:items-center justify-between 1xl:justify-start gap-4">
          <Heading
            type="h5"
            className="!text-sm font-bold text-blue-base  1xl:w-fit  my-6"
          >
            Peserta Didik Kependidikan
          </Heading>
          <Heading
            type="h5"
            className="!text-xs min-w-24 text-center line-clamp-1 bg-amber-100 bg-opacity-70 border-yellow px-3 py-0.5 border rounded-full text-yellow-500 -mt-6 sm:mt-0 mb-7 sm:mb-0  sm:mr-14 2xl:mr-0"
          >
             {teachersData?.length !== undefined && teachersData?.length > 0   ?  teachersData?.length : 0} orang
          </Heading>
        </div>

        <div className="-mt-14 sm:-mt-6">
          <ResidentDropdownChange handleChangeTable={handleActiveTableChange} activeTable={activeTable} teachersData={teachersData || []} checkedItems={checkedItems} />
        </div>
      </div>
      <div className="overflow-x-scroll 2xl:overflow-auto  w-full scrollbar-thin scrollbar-thumb-[#F5C451] scrollbar-track-yellow-100">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 md:min-w-[1190px]">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
            <tr className="border w-full xl:table-row hidden ">
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
            {teachersData && !isTeachersLoading
              ? currentPtkData?.map((teacher, index) => (
                  <React.Fragment key={index}>
                    <tr className="bg-white border flex flex-col xl:table-row">
                      <td className="w-4  px-6 py-4 xl:p-4 flex items-center xl:table-cell">
                        <div className="flex items-center gap-4">
                          <input
                            id={`checkbox-table-${index}`}
                            type="checkbox"
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-yellow ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2"
                            checked={checkedItems.includes(String(teacher.id))}
                            onChange={() => handleCheckItem(String(teacher.id))}
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
                          Nama
                        </span>

                        <div className="flex gap-4 items-center ">
                          <Image
                            src={"/assets/icon/avatar-example.svg"}
                            alt="avatar-example"
                            width={20}
                            height={20}
                            className="w-8 h-8"
                          />
                          <p className="truncate max-w-[10rem]">
                            {teacher.nama}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 xl:table-cell flex gap-2 justify-between items-center">
                        <span className="block xl:hidden text-sm font-bold text-blue-base">
                          NIP
                        </span>
                        {teacher.nip || "-"}
                      </td>
                      <td className="px-6 py-4 xl:table-cell flex gap-2 justify-between items-center">
                        <span className="block xl:hidden text-sm font-bold text-blue-base">
                          Jenis Kelamin
                        </span>
                        {teacher.jenis_kelamin === ""
                          ? "-"
                          : teacher.jenis_kelamin === "L"
                          ? "Laki-laki"
                          : "Perempuan"}
                      </td>
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-full flex justify-between  xl:w-1/3 xl:table-cell "
                      >
                        <span className="block xl:hidden text-sm font-bold text-blue-base">
                          Mapel
                        </span>

                        <span className="xl:w-full text-center text-xs flex xl:justify-center items-center">
                          <p className=" xl:w-1/3 bg-amber-100 bg-opacity-70 border-yellow px-2 py-1 border rounded-full text-yellow-500">
                            Produktif RPL
                          </p>
                        </span>
                      </td>
                    </tr>
                  </React.Fragment>
                ))
              : Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <React.Fragment key={index}>
                      <tr className="bg-white border flex flex-col xl:table-row animate-pulse">
                        <td className="w-4  px-6 py-4 xl:p-4 flex items-center xl:table-cell">
                          <div className="flex items-center gap-4">
                            <div className="w-4 h-4 bg-gray-200 rounded"></div>
                            <label className="block xl:hidden bg-gray-200 rounded w-16 h-4"></label>
                          </div>
                        </td>
                        <td className="px-6 py-4 flex gap-2 items-center xl:table-cell xl:justify-start justify-between">
                          <span className="block xl:hidden text-sm font-bold text-transparent bg-gray-200 rounded w-12 h-4"></span>
                          <div className="flex gap-4 items-center">
                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                            <p className="truncate max-w-[10rem] bg-gray-200 rounded w-24 h-4"></p>
                          </div>
                        </td>
                        <td className="px-6 py-4 xl:table-cell flex gap-2 justify-between items-center">
                          <span className="block xl:hidden text-sm font-bold text-transparent bg-gray-200 rounded w-12 h-4"></span>
                          <div className="bg-gray-200 rounded w-16 h-4"></div>
                        </td>
                        <td className="px-6 py-4 xl:table-cell flex gap-2 justify-between items-center">
                          <span className="block xl:hidden text-sm font-bold text-transparent bg-gray-200 rounded w-24 h-4"></span>
                          <div className="bg-gray-200 rounded w-16 h-4"></div>
                        </td>
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-full flex justify-between xl:w-1/3 xl:table-cell"
                        >
                          <span className="block xl:hidden text-sm font-bold text-transparent bg-gray-200 rounded w-16 h-4"></span>
                          <span className="xl:w-full text-center text-xs flex xl:justify-center items-center">
                            <p className="xl:w-1/3 bg-gray-200 border-gray-300 px-2 py-1 border rounded-full text-transparent">
                              &nbsp;
                            </p>
                          </span>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
          </tbody>
        </table>
      </div>
      <PaginationTable
        totalPosts={teachersData?.length}
        postsPerPage={postsPerPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default TeachersTable;
