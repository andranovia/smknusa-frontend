"use client"

import React, { useEffect, useState } from 'react'
import { Inter } from 'next/font/google';
import { Student, useResidents } from '@/services/api/useQueries/useResidents';

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
})

const PrintStudents = () => {
    const { isStudentsLoading } = useResidents();
    const [ printData, setPrintData ] = useState<Student[]>([]);

    useEffect(() => {
      if (typeof window !== "undefined" || !isStudentsLoading) {

        const storedData = sessionStorage.getItem("printData");
        const backUrl = sessionStorage.getItem("previousUrl");
        
          if (storedData) {
            const parsedData: Student[] = JSON.parse(storedData);
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
            };
          }, 3000);
        }
      }
    }, [isStudentsLoading]);

    return (
          <div className={`w-full print-container px-24 py-10 h-full ${inter.className}`}>
            <table className="table-auto w-full h-full">
              <thead>
                <tr>
                  <th className="border text-start px-4 py-2">Nisn</th>
                  <th className="border text-start px-4 py-2">Nama</th>
                  <th className="border text-start px-4 py-2">Kelas</th>
                  <th className="border text-start px-4 py-2">Alamat</th>
                  <th className="border text-start px-4 py-2">TTL</th>
                  <th className="border text-start px-4 py-2">Jenis Kelamin</th>
                  <th className="border text-start px-4 py-2">Agama</th>
                </tr>
              </thead>
              <tbody>
                {printData?.map((student: Student) => (
                  <tr className='border-b' key={student.id}>
                    <td className="border px-4 py-2">{student.nisn}</td>
                    <td className="border px-4 py-2">{student.nama}</td>
                    <td className="border px-4 py-2">{student.kelas}</td>
                    <td className="border px-4 py-2">{student.alamat}</td>
                    <td className="border px-4 py-2">{student.tempat_lahir}</td>
                    <td className="border px-4 py-2">{student.gender}</td>
                    <td className="border px-4 py-2">{student.agama}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    )
}

export default PrintStudents
