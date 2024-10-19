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

export const useResidents = ({
  filterStudents,
  filterTeachers,
}: {
  filterStudents?: {
    search_nama: string;
    search_kelas: string;
  };
  filterTeachers?: {
    search_nama: string;
    search_nuptk: string;
  };
} = {}) => {
  const { data: teachers, isLoading: isTeachersLoading } = useQuery<
    Teacher[] | null
  >({
    queryKey: ["Teachers", filterTeachers],
    queryFn: () => getTeachers(filterTeachers),
  });

  const { data: students, isLoading: isStudentsLoading } = useQuery<
    Student[] | null
  >({
    queryKey: ["Students", filterStudents],
    queryFn: () => getStudents(filterStudents),
  });

  return { teachers, students, isTeachersLoading, isStudentsLoading };
};
