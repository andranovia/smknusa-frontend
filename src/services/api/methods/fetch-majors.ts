import { axiosInstance } from "@/utils/axiosInstance";

export async function getSchoolMajors() {
  try {
    const response = await axiosInstance.get("api/user/profile/majors");
    const data = response.data.data;
    console.log("fetch data", data);
    return data;
  } catch (error) {
    console.log(error, "Error fetching majors");
    return null;
  }
}

export async function getSchoolMajorDetails(id?: string) {
  try {
    const response = await axiosInstance.get(`api/user/profile/majors/${id}`);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching major details");
    return null;
  }
}
