import { axiosInstance } from '@/utils/axiosInstance';

export async function getSchoolPartnerships(){
    try{
        const response = await axiosInstance.get("api/user/kemitraans");
        const data = response.data.data;
        console.log("fetch data", data);
        return data;
    } catch (error){
        console.log(error, "Error fetching partnerships");
        return null;
    }
}