import { useQuery } from "@tanstack/react-query";
import {
  getAnnouncementCategories,
  getAnnouncements,
} from "../methods/fetch-announcements";

export type Announcement = {
  id_pemberitahuan: string;
  nama: string;
  thumbnail: string;
  created_at: string;
  icon_type: string;
  date: string;
  text: string;
  level: string;
  category: {
    id: number;
    nama: string;
    color: string;
  };
  viewer: string;
};

export const useAnnouncements = () => {
  const { data: announcements, isLoading: isAnnouncementsLoading } = useQuery<
    Announcement[] | null
  >({
    queryKey: ["Announcements"],
    queryFn: () => getAnnouncements(),
  });

  const { data: announcementCategories } = useQuery({
    queryKey: ["AnnouncementCategories"],
    queryFn: () => {
      return getAnnouncementCategories();
    },
  });

  return { announcements, announcementCategories, isAnnouncementsLoading };
};
