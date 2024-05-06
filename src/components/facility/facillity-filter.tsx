import React from 'react'

const FacilityFilter = () => {
  return (
    <div className="flex justify-between items-center w-full lg:px-[10%] ">
      
      <h3 className='w-1/3 text-[18px] font-medium my-10'>Kami memiliiki beberapa fasilitas yang dapat menunjang kebutuhan siswa.</h3>
      <select className='w-1/3 flex px-4 py-2 border-2 rounded-[10px]  text-base text-gray-900  border-gray-300  bg-gray-50 focus:ring-gray-400 focus:border-gray-400 '>
        <option value="all">Semua Jurusan</option>
        <option value="all">Semua Jurusan</option>
        <option value="all">Semua Jurusan</option>
      </select>
    </div>
  )
}

export default FacilityFilter