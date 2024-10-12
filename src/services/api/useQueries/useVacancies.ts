export interface Vacancy {
  id_loker: number;
  loker_thumbnail: string;
  loker_type: string;
  icon_type: string;
  loker_available: string;
  position: {
    id_position: number;
    position_name: string;
    position_type: string;
  };
  kemitraan: {
    id_kemitraan: number;
    kemitraan_name: string;
    kemitraan_description: string;
    kemitraan_logo: string;
    kemitraan_thumbnail: string;
    kemitraan_city: string;
    kemitraan_location_detail: string;
  };
}

import { useQuery } from "@tanstack/react-query";
import { getJobVacancies } from "../methods/fetch-vacancies";

export const useVacancies = () => {
  const { data: vacancies, isLoading: isVacanciesLoading } = useQuery<
    Vacancy[] | null
  >({
    queryKey: ["Vacancies"],
    queryFn: async () => {
      const data = await getJobVacancies();
      return data ?? [];
    },
  });
  if (vacancies == undefined) {
    console.log("get data returned undefined");
  } else {
    console.log("get adata", vacancies);
  }

  return { vacancies, isVacanciesLoading };
};
