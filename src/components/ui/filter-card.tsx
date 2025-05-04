"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

type FilterCardProps = {
  url: string;
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (value: string) => void;
};

const FilterCard = ({ 
  url,
  categories,
  selectedCategory,
  onCategorySelect,
}:
  FilterCardProps
) => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const title = formData.get("title");
    const category = selectedCategory;
    const from = formData.get("from");
    const toDate = formData.get("toDate");

    const query = new URLSearchParams({
      search: title as string,
      category,
      start_date: from as string,
      end_date: toDate as string,
    }).toString();

    router.push(`/info/${url}?${query}`);
  };
  return (
    <div className="flex flex-col items-start w-full xl:max-w-[360.59px] relative  xl:sticky xl:top-1/4 z-10">
      <div className="flex gap-2 items-center w-full border-2 bg-white z-10 border-[#F5C451] py-3 px-4 xs:px-8 rounded-[10px]">
        <Image
          width={20}
          height={20}
          src={"/assets/icon/filter.svg"}
          alt="share"
        />
        <h4 className="font-[500] text-base xs:text-[18px]">
          Cari {url === "article" ? "Artikel" : "Berita"} Berdasarkan
        </h4>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 w-full gap-4 py-6 -mt-2 px-4 xs:px-6 border rounded-b-[10px]"
      >
        <div className="flex flex-col gap-4 w-full col-span-2">
          <label
            htmlFor="title"
            className="font-medium text-[13px] xl:text-lg text-blue-base"
          >
            Judul {url === "article" ? "Artikel" : "Berita"}
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border border-gray-300 rounded-lg p-2 focus:ring-[#F5C451] focus:border-[#F5C451] focus:outline-none focus:ring-1"
          />
        </div>

        <div className="flex flex-col gap-4 w-full col-span-2">
          <label
            htmlFor="category"
            className="font-medium  text-[13px] xs:text-sm xl:text-lg  text-blue-base"
          >
            Kategori {url === "article" ? "Artikel" : "Berita"}
          </label>
          <Menu as="div" className="relative inline-block text-left w-full">
            <MenuButton className="inline-flex justify-between w-full px-4 py-2 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300">
              {selectedCategory || "Pilih Kategori"}
              <Image
                src="/assets/icon/arrow-right.svg"
                width={16}
                height={16}
                alt="chevron-down"
                className="w-4 h-4 rotate-90"
              />
            </MenuButton>
            <MenuItems className="absolute z-50 mt-2 w-full max-h-[15rem] overflow-auto bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 px-2">
              <MenuItem>
                <span
                  onClick={() => onCategorySelect("")}
                  className={`block px-4 py-2 text-sm text-gray-700 cursor-pointer rounded-md ${selectedCategory === "" ? "bg-gray-200" : ""}`}
                >
                  Semua Kategori
                </span>
              </MenuItem>
              {categories.map((cat, index) => (
                <MenuItem key={index}>
                  <span
                    onClick={() => onCategorySelect(cat)}
                    className="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                  >
                    {cat}
                  </span>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>
        <div className="flex flex-col gap-4 w-full col-span-1">
          <label
            htmlFor="from"
            className=" font-medium  text-[13px] xs:text-sm xl:text-lg  text-blue-base "
          >
            Dari tanggal
          </label>
          <input
            type="date"
            id="from"
            name="from"
            className="border border-gray-300 rounded-lg p-2 focus:ring-[#F5C451] focus:border-[#F5C451] focus:outline-none focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 w-full col-span-1">
          <label
            htmlFor="to-date"
            className=" font-medium  text-[13px] xs:text-sm xl:text-lg  text-blue-base "
          >
            Sampai tanggal
          </label>
          <input
            type="date"
            id="to-date"
            name="to-date"
            className="border border-gray-300 rounded-lg p-2 focus:ring-[#F5C451] focus:border-[#F5C451] focus:outline-none focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 w-full col-span-2 mt-2">
          <button className=" font-medium text-sm xl:text-lg bg-yellow-light  py-2 rounded-[10px] ">
            Cari
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterCard;
