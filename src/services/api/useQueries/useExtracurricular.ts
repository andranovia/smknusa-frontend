import { useQuery } from "@tanstack/react-query";
import { getSchoolExtra } from "../methods/fetch-extracurricular";

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

export const useExtras = () => {
  const { data: extras, isLoading: isExtraLoading } = useQuery<Extra[] | null>({
    queryKey: ["Extra"],
    queryFn: async () => {
      const data = await getSchoolExtra();
      return data ?? [];
    },
  });
  if (extras == undefined) {
    console.log("get data returned undefined");
  } else {
    console.log("get adata", extras);
  }

  return { extras, isExtraLoading };
};
