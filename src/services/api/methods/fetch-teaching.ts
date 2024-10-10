import { axiosInstance } from "@/utils/axiosInstance";

export async function getTeachingTools() {
  try {
    const response = await axiosInstance.get("api/user/PerangkatAjar");
    const data = response.data.data;
    console.log("fetch data", data);
    return data;
  } catch (error) {
    console.log(error, "Error fetching teaching tools");
    return null;
  }
}
