import React, { SetStateAction } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import { useNews } from "@/services/api/useQueries/useNews";

type NewsFilterFormProps = {
  newsFilter: {
    search: string;
    category: string;
    start_date: string;
    end_date: string;
  };
  setNewsFilter: React.Dispatch<
    SetStateAction<{
      search: string;
      start_date: string;
      end_date: string;
      category: string;
    }>
  >;
};

const NewsForm = ({ newsFilter, setNewsFilter }: NewsFilterFormProps) => {
  const { refetch, categoriesNews } = useNews();
  const handleOnClick = (type: "reset" | "search") => {
    switch (type) {
      case "reset":
        setNewsFilter({
          search: "",
          category: "",
          start_date: "",
          end_date: "",
        });
        refetch();
        break;
      case "search":
        refetch();
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="relative z-20 -top-14 xl:-top-24 flex justify-center bg-transparent">
        <div className="flex justify-center items-center w-full bg-transparent">
          <div className=" bg-white w-full px-4 lg:px-8 xl:px-12 py-4 lg:py-10  rounded-lg  max-w-[73rem]   border-white 1xl:shadow-md">
            <div className="grid grid-cols-2 xl:grid-cols-4 1xl:gap-12 gap-4 mb-3">
              <div className="col-span-2 xl:col-span-1 flex flex-col">
                <label
                  htmlFor="title"
                  className="block font-medium text-sm sm:text-base 1xl:text-lg mb-5 text-blue-base mt-1"
                >
                  Judul Berita
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newsFilter.search}
                  onChange={(e) =>
                    setNewsFilter({
                      ...newsFilter,
                      search: e.target.value,
                    })
                  }
                  className="1xl:w-[107%] h-10 border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="col-span-2 xl:col-span-1 flex flex-col">
                <label
                  htmlFor="category"
                  className="block font-medium text-sm sm:text-base 1xl:text-lg mb-5 text-blue-base mt-1"
                >
                  Kategori Berita
                </label>
                <Menu as="div" className="relative inline-block text-left w-full ">
                  <div className="w-full ">
                    <MenuButton className="inline-flex text-black w-full justify-between items-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 1xl:w-[107%] h-10">
                      {newsFilter.category ? newsFilter.category : "Pilih Kategori"}
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
                    className="absolute scrollbar scrollbar-w-2 scrollbar-thumb-[#F5C451] scrollbar-track-yellow-100 max-h-[15rem] overflow-auto z-50 mt-2 lg:w-[15.5rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in px-2 cursor-pointer"
                  >
                    <div className="py-1">
                      <MenuItem>
                        <span
                          onClick={() => setNewsFilter({ ...newsFilter, category: "" })}
                          className={`${
                            newsFilter.category === "" ? "bg-gray-200" : ""
                          } block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 rounded-md`}
                        >
                          Semua Kategori
                        </span>
                      </MenuItem>
                      {categoriesNews?.map((filter, index) => (
                        <MenuItem key={index}>
                          <span
                            onClick={() => setNewsFilter({ ...newsFilter, category: filter })}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            {filter}
                          </span>
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Menu>
              </div>
              <div className="col-span-1 flex flex-col">
                <label
                  htmlFor="from"
                  className="block font-medium text-sm sm:text-base 1xl:text-lg mb-5 text-blue-base mt-1"
                >
                  Dari Tanggal
                </label>
                <input
                  type="date"
                  id="from"
                  name="from"
                  value={newsFilter.start_date}
                  onChange={(e) =>
                    setNewsFilter({ ...newsFilter, start_date: e.target.value })
                  }
                  className="1xl:w-[107%] h-10 border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="col-span-1 flex flex-col">
                <label
                  htmlFor="to-date"
                  className="block font-medium text-sm sm:text-base 1xl:text-lg mb-5 text-blue-base mt-1"
                >
                  Sampai Tanggal
                </label>
                <input
                  type="date"
                  id="to-date"
                  name="to-date"
                  value={newsFilter.end_date}
                  onChange={(e) =>
                    setNewsFilter({ ...newsFilter, end_date: e.target.value })
                  }
                  className="1xl:w-[107%] h-10 border border-gray-300 rounded-lg p-2"
                />
              </div>
            </div>
            <div className="1xl:flex grid grid-cols-2 w-full justify-end py-3 gap-3 relative 1xl:-right-2">
              <button
                onClick={() => handleOnClick("reset")}
                className="bg-gray-200 w-full text-blue-base py-2 px-4 rounded-lg text-[16px] font-medium 1xl:w-28 h-10"
              >
                Reset
              </button>
              <button
                onClick={() => handleOnClick("search")}
                className="bg-yellow-light w-full text-blue-base py-2 px-4 rounded-lg text-[16px] font-medium 1xl:w-28 h-10"
              >
                Cari
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsForm;
