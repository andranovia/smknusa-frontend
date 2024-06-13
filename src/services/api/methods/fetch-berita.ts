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

export async function getNewsById(id?: string) {
  try {
    if (id) {
      await axiosInstance.get(`api/user/news/${id}`).then((res) => {
        return res.data.data;
      });
    } else {
      return null
    }
  } catch (error) {
    console.log(error, "Error fetching news by id");
    return null
  }
}

export async function getNewsCategories() {
  try {
    await axiosInstance.get(`api/user/news-categories`).then((res) => {
      return res.data.data;
    });
    return null
  } catch (error) {
    console.log(error, "Error fetching news categories");
    return null
  }
}
