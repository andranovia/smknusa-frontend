import { axiosInstance } from '@/utils/axiosInstance';

export async function getSchoolMajors(){
    try{
        const response = await axiosInstance.get("api/user/profile/majors");
        const data = response.data.data;
        console.log("fetch data", data);
        return data;
    } catch (error){
        console.log(error, "Error fetching majors");
        return null;
    }
}