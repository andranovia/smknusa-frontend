import { axiosInstance } from "@/utils/axiosInstance";

export async function getArticles() {
  try {
    const response = await axiosInstance.get("api/user/articles");
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching articles");
    return null;
  }
}


export async function getArticleCategories() {
  try {
    const response = await axiosInstance.get(`api/user/article-categories`);
    const data = response.data.data;
    return data;

  } catch (error) {
    console.log(error, "Error fetching article categories");
    return null;
  }
}
