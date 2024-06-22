"use client";

import PtkForm from "@/components/academic/ptk/ptk-form";
import PtkTable from "@/components/academic/ptk/ptk-table";
import StudentsForm from "@/components/academic/students/students-form";
import StudentsTable from "@/components/academic/students/students-table";
import React, { useState } from "react";
const ptkData = [
  {
    nama: "Raditya Wahyu Sasono",
    nip: "198609302010121001",
    jenis_kelamin: "Laki - Laki",
    mapel: "Produktif RPL",
  },
  {
    nama: "Raditya Wahyu Sasono",
    nip: "198609302010121001",
    jenis_kelamin: "Laki - Laki",
    mapel: "Produktif RPL",
  },
  {
    nama: "Raditya Wahyu Sasono",
    nip: "198609302010121001",
    jenis_kelamin: "Laki - Laki",
    mapel: "Produktif RPL",
  },
  {
    nama: "Raditya Wahyu Sasono",
    nip: "198609302010121001",
    jenis_kelamin: "Laki - Laki",
    mapel: "Produktif RPL",
  },
  {
    nama: "Raditya Wahyu Sasono",
    nip: "198609302010121001",
    jenis_kelamin: "Laki - Laki",
    mapel: "Produktif RPL",
  },
  {
    nama: "Raditya Wahyu Sasono",
    nip: "198609302010121001",
    jenis_kelamin: "Laki - Laki",
    mapel: "Produktif RPL",
  },
  {
    nama: "Raditya Wahyu Sasono",
    nip: "198609302010121001",
    jenis_kelamin: "Laki - Laki",
    mapel: "Produktif RPL",
  },
  {
    nama: "Raditya Wahyu Sasono",
    nip: "198609302010121001",
    jenis_kelamin: "Laki - Laki",
    mapel: "Produktif RPL",
  },
  {
    nama: "Raditya Wahyu Sasono",
    nip: "198609302010121001",
    jenis_kelamin: "Laki - Laki",
    mapel: "Produktif RPL",
  },
  {
    nama: "Raditya Wahyu Sasono",
    nip: "198609302010121001",
    jenis_kelamin: "Laki - Laki",
    mapel: "Produktif RPL",
  },
];

const studentsData = [
  {
    nisn: "33025421",
    name: "Whiwin Adistiara",
    kelas: "X APHP 1",
    jenis_kelamin: "Perempuan",
    alamat: "Dsn. Kanigoro",
    ttl: "Pasuruan",
  },
  {
    nisn: "33025421",
    name: "Whiwin Adistiara",
    kelas: "X APHP 1",
    jenis_kelamin: "Perempuan",
    alamat: "Dsn. Kanigoro",
    ttl: "Pasuruan",
  },
  {
    nisn: "33025421",
    name: "Whiwin Adistiara",
    kelas: "X APHP 1",
    jenis_kelamin: "Perempuan",
    alamat: "Dsn. Kanigoro",
    ttl: "Pasuruan",
  },
  {
    nisn: "33025421",
    name: "Whiwin Adistiara",
    kelas: "X APHP 1",
    jenis_kelamin: "Perempuan",
    alamat: "Dsn. Kanigoro",
    ttl: "Pasuruan",
  },
  {
    nisn: "33025421",
    name: "Whiwin Adistiara",
    kelas: "X APHP 1",
    jenis_kelamin: "Perempuan",
    alamat: "Dsn. Kanigoro",
    ttl: "Pasuruan",
  },
  {
    nisn: "33025421",
    name: "Whiwin Adistiara",
    kelas: "X APHP 1",
    jenis_kelamin: "Perempuan",
    alamat: "Dsn. Kanigoro",
    ttl: "Pasuruan",
  },
  {
    nisn: "33025421",
    name: "Whiwin Adistiara",
    kelas: "X APHP 1",
    jenis_kelamin: "Perempuan",
    alamat: "Dsn. Kanigoro",
    ttl: "Pasuruan",
  },
  {
    nisn: "33025421",
    name: "Whiwin Adistiara",
    kelas: "X APHP 1",
    jenis_kelamin: "Perempuan",
    alamat: "Dsn. Kanigoro",
    ttl: "Pasuruan",
  },
  {
    nisn: "33025421",
    name: "Whiwin Adistiara",
    kelas: "X APHP 1",
    jenis_kelamin: "Perempuan",
    alamat: "Dsn. Kanigoro",
    ttl: "Pasuruan",
  },
  {
    nisn: "33025421",
    name: "Whiwin Adistiara",
    kelas: "X APHP 1",
    jenis_kelamin: "Perempuan",
    alamat: "Dsn. Kanigoro",
    ttl: "Pasuruan",
  },
  {
    nisn: "33025421",
    name: "Whiwin Adistiara",
    kelas: "X APHP 1",
    jenis_kelamin: "Perempuan",
    alamat: "Dsn. Kanigoro",
    ttl: "Pasuruan",
  },
  {
    nisn: "33025421",
    name: "Whiwin Adistiara",
    kelas: "X APHP 1",
    jenis_kelamin: "Perempuan",
    alamat: "Dsn. Kanigoro",
    ttl: "Pasuruan",
  },
];

const ResidentData = () => {
  const [currentTable, setcurrentTable] = useState<string>("students");

  const handleChangeTable = () => {
    if (currentTable === "students") {
      setcurrentTable("ptk");
    } else {
      setcurrentTable("students");
    }
  }



  return (
    <div className="w-full lg:pt-24 px-3 rounded-[10px] text-blue-base bg-white">
      <div className="relative   flex flex-col items-center  pt-10 ">
        <div className="flex flex-col lg:items-center gap-4 w-[80%]  lg:w-2/3 lg:text-center">
          <h1 className="font-[700] lg:text-[46px] text-[24px] ">
            Data Warga Sekolah
          </h1>
          <p className="font-[500] text-[18px] text-gray">
            Informasi mengenai data seluruh warga sekolah, baik siswa, guru dan
            staff.
          </p>
          <hr className="w-full border mt-8" />
        </div>
      </div>
      <div className="pb-20 pt-10 flex flex-col items-center justify-center gap-10">
        {currentTable === "ptk" ? (
          <>
            <PtkForm />
            <PtkTable ptkData={ptkData} handleChangeTable={handleChangeTable} />
          </>
        ) : (
          <>
            <StudentsForm />
            <StudentsTable studentsData={studentsData} handleChangeTable={handleChangeTable}/>
          </>
        )}
      </div>
    </div>
  );
};

export default ResidentData;
