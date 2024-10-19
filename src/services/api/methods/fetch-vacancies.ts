import { axiosInstance } from "@/utils/axiosInstance";

export async function getJobVacancies(
  filter:
    | {
        search: string;
        search_requirement: string;
      }
    | undefined
) {
  const params = new URLSearchParams();
  if (filter?.search) params.append("search", filter.search);
  if (filter?.search_requirement)
    params.append("search_requirement", filter.search_requirement);
  const queryString = params.toString();
  const url = queryString
    ? `api/user/lokers?${queryString}`
    : `api/user/lokers`;

  try {
    const response = await axiosInstance.get(url);
    const data = response.data.data;
    console.log("fetch data", data);
    return data;
  } catch (error) {
    console.log(error, "Error fetching vacancies");
    return null;
  }
}

export async function getJobVacancyDetails(id?: string) {
  try {
    const response = await axiosInstance.get(`api/user/lokers/${id}`);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching job vacancy details");
    return null;
  }
}
