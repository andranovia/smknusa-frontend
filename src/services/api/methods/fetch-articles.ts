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

export async function getArticleById(id?: string) {
  try {
    if (id) {
      const response = await axiosInstance.get(`api/user/articles/${id}`);
      const data = response.data.data;
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error, "Error fetching articles by id");
    return null;
  }
}

export async function getArticleCategories() {
  try {
    const response = await axiosInstance.get(`api/user/article-categories`);
    const data = response.data.data;
    return data;

    return null;
  } catch (error) {
    console.log(error, "Error fetching article categories");
    return null;
  }
}
