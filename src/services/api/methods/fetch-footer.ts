import { axiosInstance } from '@/utils/axiosInstance';

export async function getFooter(){
    try{
        const response = await axiosInstance.get("api/user/footer");

        const data = response.data?.List;

        return data;
    } catch (error){
        console.log(error, "Error fetching Footers");
        return null;
    }
}