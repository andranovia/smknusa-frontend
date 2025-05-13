import { axiosInstance } from '@/utils/axiosInstance';

export async function getBasicInformation(){
    try{
        const response = await axiosInstance.get("api/user/profile-basic");
        const data = response.data?.List;
        return data;
    } catch (error){
        console.log(error, "Error fetching galleries");
        return null;
    }
}