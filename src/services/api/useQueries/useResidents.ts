import { useQuery } from "@tanstack/react-query";
import { getStudents, getTeachers } from "../methods/fetch-residents";

export type Teacher = {
  id: number;
  nama: string;
  nip: string;
  nuptk: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  alamat: string;
  foto: string;
};

export type Student = {
  id: number;
  nisn: string;
  nis: string;
  nama: string;
  kelas: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  agama: string;
  gender: string;
  telp: string;
  alamat: string;
};



export const useResidents = (id?: string) => {

  const { data: teachers } = useQuery<Teacher[] | null>({
    queryKey: ["Teachers"],
    queryFn: () => getTeachers(),
  });

  const { data: students } = useQuery<Student[] | null>({
    queryKey: ["Students"],
    queryFn: () => getStudents(),
  });

  return {teachers, students};
};
