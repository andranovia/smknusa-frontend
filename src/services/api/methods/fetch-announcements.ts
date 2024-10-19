import { axiosInstance } from "@/utils/axiosInstance";

export async function getAnnouncements() {
  try {
    const response = await axiosInstance.get("api/user/announcements");
    const data = response.data.data;

    return data;
  } catch (error) {
    console.log(error, "Error fetching Announcements");
    return null;
  }
}

export async function getAnnouncementDetails(id?: string) {
  try {
    const response = await axiosInstance.get(`api/user/announcements/${id}`);
    const data = response.data.data;

    return data;
  } catch (error) {
    console.log(error, "Error fetching Announcement Details");
    return null;
  }
}
