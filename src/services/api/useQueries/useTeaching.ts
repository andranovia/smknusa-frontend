import { useQuery } from "@tanstack/react-query";
import { getTeachingTools } from "../methods/fetch-teaching";

export interface Teaching {
  id_pa: number;
  title: string;
  description: string;
  type: string;
  icon_type: string;
  url: string;
  size: string;
}

export const useTeaching = () => {
  const { data: teachings, isLoading: isTeachingsLoading } = useQuery<
    Teaching[] | null
  >({
    queryKey: ["Teachings"],
    queryFn: async () => {
      const data = await getTeachingTools();
      return data ?? [];
    },
  });
  if (teachings == undefined) {
    console.log("get data returned undefined");
  } else {
    console.log("get data", teachings);
  }

  return { teachings, isTeachingsLoading };
};
