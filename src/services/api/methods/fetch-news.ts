import { axiosInstance } from "@/utils/axiosInstance";

export async function getNews(
  filter:
    | {
        search: string;
        start_date: string;
        end_date: string;
      }
    | undefined
) {
  const params = new URLSearchParams();
  if (filter?.search) params.append("search", filter.search);
  if (filter?.start_date) params.append("start_date", filter.start_date);
  if (filter?.end_date) params.append("end_date", filter.end_date);
  const queryString = params.toString();
  const url = queryString ? `api/user/news?${queryString}` : `api/user/news`;
  try {
    const response = await axiosInstance.get(url);
    const data = response.data.data;
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
