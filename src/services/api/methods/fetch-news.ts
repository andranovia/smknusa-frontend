

import { axiosInstance } from "@/utils/axiosInstance";

export async function getNews() {
  try {
    const response = await axiosInstance.get("api/user/news");
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching news");
    return null;
  }
}



export async function getNewsCategories() {
  try {
    const response = await axiosInstance.get(`api/user/news-categories`)
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching news categories");
    return null
  }
}
