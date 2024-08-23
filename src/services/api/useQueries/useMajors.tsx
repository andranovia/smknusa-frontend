export interface Majors {
    id_jurusan: number
    jurusan_nama: string
    jurusan_short: string
    jurusan_thumbnail: string
    prodi: Prodi
    jurusan_text: string
  }
  
  export interface Prodi {
    id: number
    nama_prodi: string
    prodi_short: string
  }
  

import { useQuery } from "@tanstack/react-query";
import { getSchoolMajors } from "../methods/fetch-majors"


export const useMajors = (id?: string) => {

    const { data: majors, isLoading: isMajorsLoading } = useQuery<[] | null>({
        queryKey: ["Majors"],
        queryFn: async () => {
            const data = await getSchoolMajors();
            return data ?? [];
        }
    });
    if (majors == undefined) {
        console.log("get data returned undefined");
    } else {
        console.log("get adata", majors);
    }

    return { majors, isMajorsLoading };
};