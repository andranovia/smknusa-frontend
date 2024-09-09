import { axiosInstance } from "@/utils/axiosInstance";

export async function getArticles() {
  try {
    const response = await axiosInstance.get("api/user/search");
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching search");
    return null;
  }
}