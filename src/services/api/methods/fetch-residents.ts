import { axiosInstance } from "@/utils/axiosInstance";

export async function getTeachers() {
  try {
    const response = await axiosInstance.get("api/user/profile/teachers");
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching Teachers data");
    return null;
  }
}

export async function getStudents() {
  try {
    const response = await axiosInstance.get("api/user/profile/students");
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching Students data");
    return null;
  }
}
