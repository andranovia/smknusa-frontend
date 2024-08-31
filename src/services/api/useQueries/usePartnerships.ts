export interface Partnership {
    id_kemitraan: number
    kemitraan_name: string
    kemitraan_logo: string
    kemitraan_thumbnail: string
    kemitraan_description: string
    kemitraan_city: string
    kemitraan_location_detail: string
}
  

import { useQuery } from "@tanstack/react-query";
import { getSchoolPartnerships} from "../methods/fetch-partnerships"


export const usePartnerships = ( ) => {

    const { data: partnerships, isLoading: isPartnershipsLoading } = useQuery<Partnership[] | null>({
        queryKey: ["Partnerships"],
        queryFn: async () => {
            const data = await getSchoolPartnerships();
            return data ?? [];
        }
    });
    if (partnerships == undefined) {
        console.log("get data returned undefined");
    } else {
        console.log("get adata", partnerships);
    }

    return { partnerships, isPartnershipsLoading };
};