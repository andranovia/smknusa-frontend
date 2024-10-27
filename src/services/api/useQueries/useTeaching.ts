import { useQuery } from "@tanstack/react-query";
import {
  getTeachingToolDetails,
  getTeachingTools,
} from "../methods/fetch-teaching";

export interface Teaching {
  id_pa: number;
  title: string;
  description: string;
  type: string;
  icon_type: string;
  url: string;
  size: string;
}

export const useTeaching = (id?: string, filter?: { search: string }) => {
  const { data: teachings, isLoading: isTeachingsLoading } = useQuery<
    Teaching[] | null
  >({
    queryKey: ["Teachings", filter],
    queryFn: async () => {
      const data = await getTeachingTools(filter);
      return data ?? [];
    },
  });

  const { data: teachingDetails, isLoading: isTeachingDetailsLoading } =
    useQuery<Teaching | null>({
      queryKey: ["TeachingDetails"],
      queryFn: async () => {
        const data = await getTeachingToolDetails(id);
        return data ?? null;
      },
    });

  return {
    teachings,
    isTeachingsLoading,
    teachingDetails,
    isTeachingDetailsLoading,
  };
};
