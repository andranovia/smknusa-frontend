import { useQuery } from "@tanstack/react-query";
import { getNavbar } from "../methods/fetch-navbar";

export interface SubNavbarItem {
  id: number;
  title: string;
  icon: string;
  route: string;
  navbar_id: string;
  description: string;
}

export interface NavbarItem {
  id: number;
  title: string;
  order: number;
  route?: string;
  sub_navbar?: SubNavbarItem[];
}

export interface NavbarSection {
  [key: string]: string | NavbarItem[];
}

export const useNavbar = () => {
  const { data: navbars, isLoading: isNavbarsLoading } = useQuery<
    NavbarSection[] | null
  >({
    queryKey: ["Navbar"],
    queryFn: async () => {
      const data = await getNavbar();
      console.log("Navbar Data:", data);
      return data ?? [];
    },
  });

  return { navbars, isNavbarsLoading };
};