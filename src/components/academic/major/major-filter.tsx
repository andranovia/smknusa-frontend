import React from "react";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Heading } from "@/components/ui/typography";

const MajorFilter = ({
  filterData,
  setSelectedFilter,
}: {
  filterData: { id: string; name: string }[];
  setSelectedFilter: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return (
    <div className="flex xl:justify-between lg:flex-row flex-col items-center  my-6 w-full px-6 1xl:px-14  place-self-center max-w-[1264px] ">
      <Heading type="h5" className="xl:w-1/3  xl:my-10 text-[#081B34]">
        Kami memiliiki beberapa jurusan yang dapat menunjang kebutuhan siswa.
      </Heading>
      <Menu as="div" className="relative inline-block text-left">
        <div className="w-[20rem]">
          <MenuButton className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-medium  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Filter
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
          className="absolute right-0 z-40 mt-2 w-[18rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <span
                onClick={() => setSelectedFilter(null)}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Semua
              </span>
            </MenuItem>
            {filterData.map((filter, index) => (
              <MenuItem key={index}>
                <span
                  onClick={() => setSelectedFilter(filter.name)}
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  {filter.name}
                </span>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default MajorFilter;
