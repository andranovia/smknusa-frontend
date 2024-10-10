import { axiosInstance } from "@/utils/axiosInstance";

export async function getJumbotron() {
  try {
    const response = await axiosInstance.get("api/user/link/videos");
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching jumbotron");
    return null;
  }
}

export async function getPartnersJumbotron() {
  try {
    const response = await axiosInstance.get("/api/user/link/videos/kemitraan");
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching partners jumbotron");
    return null;
  }
}
