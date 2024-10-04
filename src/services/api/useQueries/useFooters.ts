import { useQuery } from "@tanstack/react-query";
import { getFooter } from "../methods/fetch-footer";

export interface FooterItem {
  id: number;
  label: string;
  url: string;
  type: string;
}

export interface FooterSection {
  [key: string]: string | FooterItem[];
}

export const useFooters = () => {
  const { data: footers, isLoading: isFooterLoading } = useQuery<
    FooterSection[] | null
  >({
    queryKey: ["Footer"],
    queryFn: async () => {
      const data = await getFooter();
      return data ?? [];
    },
  });

  return { footers, isFooterLoading };
};
