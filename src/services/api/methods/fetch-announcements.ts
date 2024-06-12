import { axiosInstance } from "@/utils/axiosInstance";

export async function getAnnouncements() {
  try {
    await axiosInstance.get("api/user/article").then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error, "Error fetching Announcements");
  }
}

export async function getAnnouncementById(id: string) {
  try {
    await axiosInstance.get(`api/user/announcement/${id}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error, "Error fetching Announcement by id");
  }
}

export async function getAnnouncementCategories() {
    try {
      await axiosInstance.get(`api/user/announcementCategories`).then((res) => {
        return res.data;
      });
    } catch (error) {
      console.log(error, "Error fetching announcement categories");
    }
  }
  