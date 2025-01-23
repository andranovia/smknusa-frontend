"use client"

import React, { useEffect, useState } from 'react'
import { Inter } from 'next/font/google';
import { Teacher, useResidents } from '@/services/api/useQueries/useResidents';

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
})

const PrintTeachers = () => {
  const { isTeachersLoading } = useResidents();
  const [ printData, setPrintData ] = useState<Teacher[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" || !isTeachersLoading) {
      const storedData = sessionStorage.getItem("printData");
      const backUrl = sessionStorage.getItem("previousUrl");

      if (storedData) {
        const parsedData: Teacher[] = JSON.parse(storedData);
        setPrintData(parsedData)

        setTimeout(() => {
          window.print();

          window.onafterprint = () => {
            sessionStorage.removeItem("printData");
            if (backUrl) {
              window.location.href = backUrl;
            } else {
              console.error("backUrl is null");
            }
          }
        }, 3000);
      }
    }
  }, [isTeachersLoading]);

  return (
    <div className={`w-full print-container px-24 mr-10 py-10 ${inter.className}`}>
      <table className='table-auto w-full border'>
        <thead>
            <tr className='border-b'>
              <th className="border text-start px-4 py-2">Nama</th>
              <th className="border text-start px-4 py-2">NIP</th>
              <th className="border text-start px-4 py-2">NUPTK</th>
              <th className="border text-start px-4 py-2">Kelahiran</th>
              <th className="border text-start px-4 py-2">Jenis Kelamin</th>
              <th className="border text-start px-4 py-2">Alamat</th>
            </tr>
          </thead>
          <tbody>
            {printData?.map((teacher) => (
              <tr className='border-b' key={teacher.id}>
                <td className="border px-4 py-2">{teacher.nama}</td>
                <td className="border px-4 py-2">{teacher.nip}</td>
                <td className="border px-4 py-2">{teacher.nuptk}</td>
                <td className="border px-4 py-2">{teacher.tempat_lahir}, {teacher.tanggal_lahir}</td>
                <td className="border px-4 py-2">{teacher.jenis_kelamin}</td>
                <td className="border px-4 py-2">{teacher.alamat}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default PrintTeachers
