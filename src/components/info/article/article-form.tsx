import React, { SetStateAction } from "react";
import { useArticles } from "@/services/api/useQueries/useArticles";

type ArticleFilterFormProps = {
  articleFilter: {
    search: string;
    category: string;
    start_date: string;
    end_date: string;
  };
  setArticleFilter: React.Dispatch<
    SetStateAction<{
      search: string;
      start_date: string;
      end_date: string;
      category: string;
    }>
  >;
};

const ArticleForm = ({
  articleFilter,
  setArticleFilter,
}: ArticleFilterFormProps) => {
  const { refetch } = useArticles();

  const handleOnClick = (type: "reset" | "search") => {
    switch (type) {
      case "reset":
        setArticleFilter({
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
          <div className=" bg-white w-full px-4 xl:px-12 py-4 1xl:py-10  rounded-lg  max-w-[73rem]   border-white 1xl:shadow-md">
            <div className="grid grid-cols-2 xl:grid-cols-4 1xl:gap-12 gap-4 mb-3">
              <div className="col-span-2 xl:col-span-1 flex flex-col">
                <label
                  htmlFor="title"
                  className="block font-medium text-sm sm:text-base 1xl:text-lg mb-5 text-blue-base mt-1"
                >
                  Judul Artikel
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={articleFilter.search}
                  onChange={(e) =>
                    setArticleFilter({
                      ...articleFilter,
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
                  Kategori Artikel
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={articleFilter.category}
                  onChange={(e) =>
                    setArticleFilter({
                      ...articleFilter,
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
                  type="date"
                  id="from"
                  name="from"
                  value={articleFilter.start_date}
                  onChange={(e) =>
                    setArticleFilter({
                      ...articleFilter,
                      start_date: e.target.value,
                    })
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
                  value={articleFilter.end_date}
                  onChange={(e) =>
                    setArticleFilter({
                      ...articleFilter,
                      end_date: e.target.value,
                    })
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

export default ArticleForm;
