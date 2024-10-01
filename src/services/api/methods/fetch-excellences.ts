import { axiosInstance } from "@/utils/axiosInstance";

export async function getExcellences() {
  try {
    const response = await axiosInstance.get("/api/user/slider/keunggulan");
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching Excellences");
    return null;
  }
}
