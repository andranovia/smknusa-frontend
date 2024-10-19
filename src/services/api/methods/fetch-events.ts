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

export async function getEventDetails(id?: string) {
  try {
    const response = await axiosInstance.get(`api/user/events/${id}`);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching Event Details");
    return null;
  }
}
