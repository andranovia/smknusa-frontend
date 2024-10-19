import { useQuery } from "@tanstack/react-query";
import {
  getSchoolExtra,
  getSchoolExtraDetails,
} from "../methods/fetch-extracurricular";

export type Extra = {
  id_extra: string;
  extra_name: string;
  extra_text: string;
  extra_type: string;
  extra_logo: string;
  extra_image: string;
  icon_type: string;
  instragram: string;
  telegram: string;
  extra_hari: string;
};

export const useExtras = (id?: string) => {
  const { data: extras, isLoading: isExtraLoading } = useQuery<Extra[] | null>({
    queryKey: ["Extra"],
    queryFn: async () => {
      const data = await getSchoolExtra();
      return data ?? [];
    },
  });

  const { data: extraDetails, isLoading: isExtraDetailsLoading } =
    useQuery<Extra | null>({
      queryKey: ["ExtraDetails"],
      queryFn: async () => {
        const data = await getSchoolExtraDetails(id);
        return data ?? null;
      },
    });

  return { extras, isExtraLoading, extraDetails, isExtraDetailsLoading };
};
