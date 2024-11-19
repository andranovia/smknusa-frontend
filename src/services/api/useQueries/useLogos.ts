import { useQuery } from "@tanstack/react-query";
import { getLogos as getKemitraanLogo } from "../methods/fetch-logos";

export interface Logo {
    id_logo_mitra: number;
    nama_mitra: string;
    logo_mitra: string;
    width: number;
    height: number;
}

export const useLogos = () => {
    const { data: logos, isLoading: isLogoLoading } = useQuery<
    Logo[] | null 
    >({
        queryKey: ["logos"],
        queryFn: async () => {
            const data = await getKemitraanLogo();
            return data ?? [];
        },
    });
    if (logos == undefined) {
        console.log("get data returned undefined");
    } else {

    }

    return { logos, isLogoLoading};
}