import { useQuery } from "@tanstack/react-query";
import { getSchoolFacility } from "../methods/fetch-facility";

export interface Facility {
    id_facility: number
    facility_name: string
    facility_image: string
    prodi: Prodi
    facility_text: string
}

export interface Prodi {
    id: number
    nama_prodi: string
    prodi_short: string
}


export const useFacilities = ( ) => {

    const { data: facilities, isLoading: isFacilityLoading } = useQuery<Facility[] | null>({
        queryKey: ["Facility"],
        queryFn: async () => {
            const data = await getSchoolFacility();
            return data ?? [];
        }
    });
    if (facilities == undefined) {
        console.log("get data returned undefined");
    } else {
 
    }

    return { facilities, isFacilityLoading };
};