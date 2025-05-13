import { useQuery } from "@tanstack/react-query";
import { getBasicInformation } from "../methods/fetch-information";

export interface BasicInformation {
    id: number;
    name: string;
    alias: string;
    link: string;
    logo: string;
}

export const useInformation = () => {
    const { data: informations, isLoading: isInformationLoading } = useQuery<
        BasicInformation[] | null
    >({
        queryKey: ["BasicInformation"],
        queryFn: async () => {
            const data = await getBasicInformation();
            return data ?? [];
        },
    });
    if (informations == undefined) {
        console.log("get data returned undefined");
    } else {
    
    }

    return { informations, isInformationLoading };
}