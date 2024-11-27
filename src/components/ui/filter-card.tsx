"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const FilterCard = ({ url }: { url: string }) => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const title = formData.get("title");
    const category = formData.get("category");
    const from = formData.get("from");
    const toDate = formData.get("toDate");

    const query = new URLSearchParams({
      search: title as string,
      category: category as string,
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
          Cari Artikel Berdasarkan
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
            Judul Artikel
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
            Kategori Artikel
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="border border-gray-300 rounded-lg p-2 focus:ring-[#F5C451] focus:border-[#F5C451] focus:outline-none focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 w-full col-span-1">
          <label
            htmlFor="from"
            className=" font-medium  text-[13px] xs:text-sm xl:text-lg  text-blue-base "
          >
            Dari tanggal
          </label>
          <input
            type="text"
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
            type="text"
            id="to-date"
            name="toDate"
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
