
import { axiosInstance } from "@/utils/axiosInstance";

export async function getEvents() {
  try {
    const response = await axiosInstance.get("api/user/events");
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching Events");
    return null;
  }
}



export async function getEventCategories() {
  try {
    const response = await axiosInstance.get(`api/user/event-categories`);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching Event categories");
    return null;
  }
}
