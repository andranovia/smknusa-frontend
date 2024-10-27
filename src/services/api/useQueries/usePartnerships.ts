export interface Partnership {
  id_kemitraan: number;
  kemitraan_name: string;
  kemitraan_logo: string;
  kemitraan_thumbnail: string;
  kemitraan_description: string;
  icon_type: string;
  kemitraan_city: string;
  kemitraan_location_detail: string;
}

import { useQuery } from "@tanstack/react-query";
import {
  getSchoolPartnershipDetails,
  getSchoolPartnerships,
} from "../methods/fetch-partnerships";

export const usePartnerships = (id?: string, filter?: { search: string }) => {
  const { data: partnerships, isLoading: isPartnershipsLoading } = useQuery<
    Partnership[] | null
  >({
    queryKey: ["Partnerships", filter],
    queryFn: async () => {
      const data = await getSchoolPartnerships(filter);
      return data ?? [];
    },
  });

  const { data: partnershipDetails, isLoading: isPartnershipDetailsLoading } =
    useQuery<Partnership | null>({
      queryKey: ["PartnershipDetails"],
      queryFn: async () => getSchoolPartnershipDetails(id),
      enabled: !!id,
    });

  return {
    partnerships,
    isPartnershipsLoading,
    partnershipDetails,
    isPartnershipDetailsLoading,
  };
};
