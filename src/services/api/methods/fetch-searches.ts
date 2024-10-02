import { axiosInstance } from "@/utils/axiosInstance";

export async function getSearchData(
  filter:
    | {
        query: string;
      }
    | undefined
) {
  const params = new URLSearchParams();
  if (filter?.query) params.append("query", filter.query);

  const queryString = params.toString();
  const url = queryString
    ? `/api/user/search?${queryString}`
    : `/api/user/search`;

  try {
    const response = await axiosInstance.get(url);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching search data");
    return null;
  }
}
