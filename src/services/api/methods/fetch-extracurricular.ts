import { axiosInstance } from '@/utils/axiosInstance';

export async function getSchoolExtra(){
    try{
        const response = await axiosInstance.get("api/user/profile/ekstras");
        const data = response.data.data;
        console.log("fetch data", data);
        return data;
    } catch (error){
        console.log(error, "Error fetching extracurricular");
        return null;
    }
}