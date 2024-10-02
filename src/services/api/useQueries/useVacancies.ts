export interface Vacancy {
  id_loker: number;
  loker_thumbnail: string;
  loker_type: string;
  position_id: string;
  kemitraan_id: string;
  icon_type: string;
  loker_available: string;
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
