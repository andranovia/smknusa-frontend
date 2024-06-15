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

export async function getEventById(id?: string) {
  try {
    if (id) {
      await axiosInstance.get(`api/user/event/${id}`).then((res) => {
        return res.data.data;
      });
    } else {
      return null;
    }
  } catch (error) {
    console.log(error, "Error fetching Event by id");
    return null;
  }
}

export async function getEventCategories() {
  try {
    await axiosInstance.get(`api/user/event-categories`).then((res) => {
      return res.data.data;
    });
    return null;
  } catch (error) {
    console.log(error, "Error fetching Event categories");
    return null;
  }
}
