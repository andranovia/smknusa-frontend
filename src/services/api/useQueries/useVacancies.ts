export interface Vacancy {
  id_loker: number;
  loker_thumbnail: string;
  loker_type: string;
  icon_type: string;
  pdf: string;
  loker_for: string;
  loker_description: string;
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

export const useVacancies = (filter?: {
  search: string;
  search_requirement: string;
}) => {
  const { data: vacancies, isLoading: isVacanciesLoading } = useQuery<
    Vacancy[] | null
  >({
    queryKey: ["Vacancies", filter],
    queryFn: async () => {
      const data = await getJobVacancies(filter);
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
