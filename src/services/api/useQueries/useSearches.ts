/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { getSearchData } from "../methods/fetch-searches";

export type SearchData = {
  icon_type: any;
  id_pemberitahuan: any;
  id_extra: any;
  id_gallery: any;
  id_facility: any;
  id_jurusan: any;
  id_loker: any;
  id_pa: any;
  id: any;
  id_kemitraan: any;
  nama: any;
  facility_name: any;
  gallery_title: any;
  jurusan_nama: any;
  title: any;
  kemitraan_name: any;
  loker_type: any;
  text: any;
  extra_text: any;
  facility_text: any;
  gallery_text: any;
  jurusan_text: any;
  description: any;
  kelas: any;
  nip: any;
  kemitraan_description: any;
  kemitraan_id: any;
};

export const useSearches = (filter?: { query: string }) => {
  const {
    data: searches,
    isLoading: isSearchLoading,
    refetch,
  } = useQuery<SearchData[] | null>({
    queryKey: ["SearchData", filter],
    queryFn: () => getSearchData(filter),
    enabled: !!filter,
  });
  // console.log(searches);

  return {
    searches,
    isSearchLoading,
    refetch,
  };
};
