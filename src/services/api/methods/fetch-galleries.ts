import { axiosInstance } from '@/utils/axiosInstance';

export async function getSchoolGalleries(){
    try{
        const response = await axiosInstance.get("api/user/galleries");
        const data = response.data.data;
        return data;
    } catch (error){
        console.log(error, "Error fetching galleries");
        return null;
    }
}