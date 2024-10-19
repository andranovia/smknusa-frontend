import { axiosInstance } from "@/utils/axiosInstance";

export async function getSchoolPartnerships(
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
    ? `api/user/kemitraans?${queryString}`
    : `api/user/kemitraans`;

  try {
    const response = await axiosInstance.get(url);
    const data = response.data.data;
    console.log("fetch data", data);
    return data;
  } catch (error) {
    console.log(error, "Error fetching partnerships");
    return null;
  }
}

export async function getSchoolPartnershipDetails(id?: string) {
  try {
    const response = await axiosInstance.get(`api/user/kemitraans/${id}`);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching partnership details");
    return null;
  }
}
