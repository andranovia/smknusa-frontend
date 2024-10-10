import { axiosInstance } from "@/utils/axiosInstance";

export async function getSchoolCommittee() {
  try {
    const response = await axiosInstance.get("api/user/profile/komite-sekolah");
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching school committee");
    return null;
  }
}

export async function getSchoolStructure() {
  try {
    const response = await axiosInstance.get(
      "api/user/profile/struktur-organisasi"
    );
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching school structure");
    return null;
  }
}
