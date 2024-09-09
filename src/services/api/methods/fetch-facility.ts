import { axiosInstance } from '@/utils/axiosInstance';

export async function getSchoolFacility(){
    try{
        const response = await axiosInstance.get("api/user/profile/facilities");
        const data = response.data.data;
        return data;
    } catch (error){
        console.log(error, "Error fetching facility");
        return null;
    }
}