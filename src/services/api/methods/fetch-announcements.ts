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

export async function getAnnouncementById(id?: string) {
  try {
    if (id) {
      await axiosInstance.get(`api/user/announcement/${id}`).then((res) => {
        return res.data.data;
      });
    } else {
      return null;
    }
  } catch (error) {
    console.log(error, "Error fetching Announcement by id");
    return null;
  }
}

export async function getAnnouncementCategories() {
  try {
    await axiosInstance.get(`api/user/announcement-categories`).then((res) => {
      return res.data.data;
    });
    return null;
  } catch (error) {
    console.log(error, "Error fetching announcement categories");
    return null;
  }
}
