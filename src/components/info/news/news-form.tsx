import React, { SetStateAction } from "react";
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
  const { refetch } = useNews();
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
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={newsFilter.category}
                  onChange={(e) =>
                    setNewsFilter({
                      ...newsFilter,
                      category: e.target.value,
                    })
                  }
                  className="1xl:w-[107%] h-10 border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="col-span-1 flex flex-col">
                <label
                  htmlFor="from"
                  className="block font-medium text-sm sm:text-base 1xl:text-lg mb-5 text-blue-base mt-1"
                >
                  Dari Tanggal
                </label>
                <input
                  type="text"
                  id="from"
                  name="from"
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
                  type="text"
                  id="to-date"
                  name="to-date"
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
