import { useQuery } from "@tanstack/react-query";
import { getStudents, getTeachers } from "../methods/fetch-residents";

export type Teacher = {
  id: number;
  nama: string;
  nip: string;
  nuptk: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  icon_type: string;
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
  icon_type: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  agama: string;
  gender: string;
  telp: string;
  alamat: string;
};

export const useResidents = () => {
  const { data: teachers } = useQuery<Teacher[] | null>({
    queryKey: ["Teachers"],
    queryFn: () => getTeachers(),
  });

  const { data: students } = useQuery<Student[] | null>({
    queryKey: ["Students"],
    queryFn: () => getStudents(),
  });

  return { teachers, students };
};
