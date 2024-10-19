import { axiosInstance } from "@/utils/axiosInstance";

export async function getTeachingTools(
  filter:
    | {
        search: string;
      }
    | undefined
) {
  const params = new URLSearchParams();
  if (filter?.search) params.append("search", filter.search);
  const queryString = params.toString();
  const url = queryString
    ? `api/user/PerangkatAjar?${queryString}`
    : `api/user/PerangkatAjar`;

  try {
    const response = await axiosInstance.get(url);
    const data = response.data.data;
    console.log("fetch data", data);
    return data;
  } catch (error) {
    console.log(error, "Error fetching teaching tools");
    return null;
  }
}

export async function getTeachingToolDetails(id?: string) {
  try {
    const response = await axiosInstance.get(`api/user/PerangkatAjar/${id}`);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching teaching tool details");
    return null;
  }
}
