import { useQuery } from "@tanstack/react-query";
import { getExcellences as getSchoolExcellence } from "../methods/fetch-excellences";

export interface Excellence {
  id_sk: number;
  title: string;
  icon_type: string;
  description: string;
}

export const useExcellences = () => {
  const { data: excellences, isLoading: isExcellenceLoading } = useQuery<
    Excellence[] | null
  >({
    queryKey: ["excellences"],
    queryFn: async () => {
      const data = await getSchoolExcellence();
      return data ?? [];
    },
  });
  if (excellences == undefined) {
    console.log("get data returned undefined");
  } else {
  }

  return { excellences, isExcellenceLoading };
};
