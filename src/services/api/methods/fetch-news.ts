import { axiosInstance } from "@/utils/axiosInstance";

export async function getNews(
  filter:
    | {
        search: string;
        category: string;
        start_date: string;
        end_date: string;
      }
    | undefined,
    page: number | undefined
) {
  const params = new URLSearchParams();
  if (filter?.search) params.append("search", filter.search);
  if (filter?.category) params.append("category", filter.category);
  if (filter?.start_date) params.append("start_date", filter.start_date);
  if (filter?.end_date) params.append("end_date", filter.end_date);
  if (page) params.append("page", page.toString());
  const queryString = params.toString();

  
  const url = queryString ? `api/user/news?${queryString}` : `api/user/news`;
  try {
    const response = await axiosInstance.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching news");
    return null;
  }
}

export async function getNewsDetails(id?: string) {
  try {
    const response = await axiosInstance.get(`api/user/news/${id}`);
    const data = response.data.data;
    console.log("fetch data", data);
    return data;
  } catch (error) {
    console.log(error, "Error fetching news details");
    return null;
  }
}

export async function getNewsCategories() {
  try {
    const response = await axiosInstance.get("api/user/news/categories");
    const data = response.data;
    console.log("fetch data", data);
    return data;
  } catch (error) {
    console.log(error, "Error fetching news categories");
    return null;
  }
}