import { axiosInstance } from "@/utils/axiosInstance";

export async function getLogos() {
    try {
        const response = await axiosInstance.get("/api/user/logo/kemitraan");
        const data = response.data.data;
        console.log(data, "Logo Kemitraan");
        return data;
    } catch (error) {
        console.log(error, "Error fetching Logo Kemitraan");
        return null;
    }
}