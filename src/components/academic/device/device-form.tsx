import React, { Dispatch, SetStateAction } from "react";
import { Heading } from "@/components/ui/typography";

const TeachingDeviceForm = ({
  deviceFormFilter,
  setDeviceFormFilter,
}: {
  deviceFormFilter: {
    search: string;
  };
  setDeviceFormFilter: Dispatch<SetStateAction<{ search: string }>>;
}) => {
  return (
    <div className="relative z-10 w-full  -mt-20  1xl:-mt-32 max-w-[70rem]">
      <div className="flex justify-center items-center p-2  xl:bg-transparent w-full">
        <div className=" bg-white w-full px-6 xl:px-12 py-4 xl:py-10 rounded-lg border-white xl:shadow-md">
          <div className="grid grid-cols-1 gap-6 mb-3">
            <div className="flex flex-col gap-6">
              <Heading type="h5" className="block text-blue-base mt-1">
                Bahan Ajar
              </Heading>
              <input
                type="text"
                id="teaching-materials"
                name="teaching-materials"
                value={deviceFormFilter.search}
                onChange={(e) =>
                  setDeviceFormFilter({ search: e.target.value })
                }
                placeholder="Masukkan Materi Bahan Ajar"
                className="w-auto h-10 border border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>
          <div className="flex w-full justify-end py-3 gap-3 relative 1xl:-right-2">
            <button
              onClick={() => setDeviceFormFilter({ search: "" })}
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

export default TeachingDeviceForm;
