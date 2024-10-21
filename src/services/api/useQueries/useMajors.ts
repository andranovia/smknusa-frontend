export interface Major {
  id_jurusan: number;
  jurusan_nama: string;
  jurusan_short: string;
  jurusan_thumbnail: string;
  jurusan_logo: string;
  prodi: Prodi;
  jurusan_text: string;
  icon_type: string;
}

export interface Prodi {
  id: number;
  nama_prodi: string;
  prodi_short: string;
}

import { useQuery } from "@tanstack/react-query";
import {
  getSchoolMajorDetails,
  getSchoolMajors,
} from "../methods/fetch-majors";

export const useMajors = (id?: string) => {
  const { data: majors, isLoading: isMajorsLoading } = useQuery<Major[] | null>(
    {
      queryKey: ["Majors"],
      queryFn: async () => {
        const data = await getSchoolMajors();
        return data ?? [];
      },
    }
  );

  const { data: majorDetails, isLoading: isMajorDetailsLoading } =
    useQuery<Major | null>({
      queryKey: ["MajorDetails"],
      queryFn: async () => {
        const data = await getSchoolMajorDetails(id);
        return data ?? null;
      },
    });

  return { majors, isMajorsLoading, majorDetails, isMajorDetailsLoading };
};
