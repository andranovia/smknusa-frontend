import React from 'react'

const NewsForm = () => {
  return (
    <>
    <div className="relative z-10 -top-24">
      <div className="flex justify-center items-center">
        <div className=" bg-white px-12 py-10 w-[73rem] rounded-lg border-white shadow-lg">
          <div className="grid grid-cols-4 gap-12 mb-3">
            <div className="col-span-1 flex flex-col">
              <label htmlFor="judul" className="block font-medium text-[18px] mb-5 text-[#081B34] mt-1">Judul Berita</label>
              <input type="text" id="judul" name="judul" className="w-[107%] h-10 border border-gray-300 rounded-lg p-2" />
            </div>
            <div className="col-span-1 flex flex-col">
              <label htmlFor="kategori" className="block font-medium text-[18px] mb-5 text-[#081B34] mt-1">Kategori Berita</label>
              <input type="text" id="kategori" name="kategori" className="w-[107%] h-10 border border-gray-300 rounded-lg p-2" />
            </div>
            <div className="col-span-1 flex flex-col">
              <label htmlFor="dari" className="block font-medium text-[18px] mb-5 text-[#081B34] mt-1">Dari Tanggal</label>
              <input type="text" id="dari" name="dari" className="w-[107%] h-10 border border-gray-300 rounded-lg p-2" />
            </div>
            <div className="col-span-1 flex flex-col">
              <label htmlFor="sampai" className="block font-medium text-[18px] mb-5 text-[#081B34] mt-1">Sampai Tanggal</label>
              <input type="text" id="sampai" name="sampai" className="w-[107%] h-10 border border-gray-300 rounded-lg p-2" />
            </div>
          </div>
          <div className="flex justify-end py-3 gap-3">
            <button className="bg-[#F2F2F2] text-[#696969] py-2 px-4 rounded-[4px] text-[16px] font-medium w-28  h-10">Reset</button>
            <button className="bg-[#FFD980] text-[#081B34] py-2 px-4 rounded-lg text-[16px] font-medium w-28 h-10">Cari</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default NewsForm
