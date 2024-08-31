import { axiosInstance } from '@/utils/axiosInstance';

export async function getJobVacancies(){
    try{
        const response = await axiosInstance.get("api/user/lokers");
        const data = response.data.data;
        console.log("fetch data", data);
        return data;
    } catch (error){
        console.log(error, "Error fetching vacancies");
        return null;
    }
}