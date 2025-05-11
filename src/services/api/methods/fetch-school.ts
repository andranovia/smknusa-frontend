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

export async function getCourseWork() {
  try {
    const response = await axiosInstance.get(
      "api/user/profile/program-kerja"
    );
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching work program");
    return null;
  }
}

export async function getVisiMission() {
  try {
    const response = await axiosInstance.get(
      "api/user/profile/visi-misi"
    );
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching visi mission");
    return null;
  }
}

export async function getPrincipalSpeech() {
  try {
    const response = await axiosInstance.get(
      "api/user/profile/sambutan/Kepala-sekolah"
    );
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error, "Error fetching principal speech");
    return null;
  }
}