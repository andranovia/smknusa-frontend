import Image from "next/image";
import React from "react";

const PtkTable = () => {
  return (
    <div className="relative overflow-x-auto  lg:rounded-lg border lg:w-[84%]">
      <div className="flex  items-center justify-between mx-12 gap-4">
        {" "}
        <div className="flex  items-center  gap-4">
          <h1 className="text-sm font-bold text-blue-base  my-6">
            Pendidik Tenaga Kependidikan
          </h1>
          <p className="text-xs bg-amber-100 bg-opacity-70 border-yellow px-3 py-0.5 border rounded-full text-yellow-500">
            98 Orang
          </p>
        </div>
        <Image src={'/assets/icon/candle.svg'} alt="candle" width={20} height={20} className="w-6 h-6"/>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
          <tr className="border">
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
          <tr className="bg-white border   ">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-1"
                  type="checkbox"
                  className="w-4 h-4  bg-gray-100 border-gray-300 rounded focus:ring-yellow  ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 "
                />
                <label htmlFor="checkbox-table-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>

            <td className="px-6 py-4 flex gap-2 items-center"><Image src={'/assets/icon/avatar-example.svg'} alt="avatar-example" width={20} height={20} className="w-8 h-8"/><p>Raditya Wahyu Sasono</p></td>
            <td className="px-6 py-4">0000000000000000</td>
            <td className="px-6 py-4">Laki - Laki</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-1/3 "
            >
              <div className="w-full flex justify-center items-center">
                <p className="w-2/5  text-center text-xs bg-amber-100 bg-opacity-70 border-yellow  py-1 border rounded-full text-yellow-500">
                  Produktif RPL
                </p>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PtkTable;
