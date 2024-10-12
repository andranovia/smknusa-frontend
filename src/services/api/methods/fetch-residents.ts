import { axiosInstance } from "@/utils/axiosInstance";

export async function getTeachers(
  filter:
    | {
        search_nama: string;
        search_nuptk: string;
      }
    | undefined
) {
  const params = new URLSearchParams();
  if (filter?.search_nama) params.append("search_nama", filter.search_nama);
  if (filter?.search_nuptk) params.append("search_nuptk", filter.search_nuptk);

  const queryString = params.toString();
  const url = queryString
    ? `api/user/profile/teachers?${queryString}`
    : `api/user/profile/teachers`;

  try {
    const response = await axiosInstance.get(url);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching Teachers data");
    return null;
  }
}

export async function getStudents(
  filter:
    | {
        search_nama: string;
        search_kelas: string;
      }
    | undefined
) {
  const params = new URLSearchParams();
  if (filter?.search_nama) params.append("search_nama", filter.search_nama);
  if (filter?.search_kelas) params.append("search_kelas", filter.search_kelas);

  const queryString = params.toString();
  const url = queryString
    ? `api/user/profile/students?${queryString}`
    : `api/user/profile/students`;

  try {
    const response = await axiosInstance.get(url);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching Students data");
    return null;
  }
}
