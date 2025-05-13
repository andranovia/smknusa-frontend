import { axiosInstance } from "@/utils/axiosInstance";

export async function getNavbar() {
    try {
        const response = await axiosInstance.get("api/user/navbar");
        const data = response.data?.List;
        return data;
    } catch (error) {
        console.log(error, "Error fetching Navbar");
        return null;
    }
}