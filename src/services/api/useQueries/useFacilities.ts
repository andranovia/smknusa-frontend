import { useQuery } from "@tanstack/react-query";
import {
  getSchoolFacility,
  getSchoolFacilityDetails,
} from "../methods/fetch-facility";

export interface Facility {
  id_facility: number;
  facility_name: string;
  facility_image: string;
  prodi: Prodi;
  icon_type: string;
  facility_text: string;
}

export interface Prodi {
  id: number;
  nama_prodi: string;
  prodi_short: string;
}

export const useFacilities = (id?: string) => {
  const { data: facilities, isLoading: isFacilityLoading } = useQuery<
    Facility[] | null
  >({
    queryKey: ["Facility"],
    queryFn: async () => {
      const data = await getSchoolFacility();
      return data ?? [];
    },
  });

  const { data: facilityDetails, isLoading: isFacilityDetailsLoading } =
    useQuery<Facility | null>({
      queryKey: ["FacilityDetails"],
      queryFn: async () => {
        const data = await getSchoolFacilityDetails(id);
        return data ?? null;
      },
      enabled: !!id,
    });

  return {
    facilities,
    isFacilityLoading,
    facilityDetails,
    isFacilityDetailsLoading,
  };
};
