import { useQuery } from "@tanstack/react-query";
import {
  getAnnouncementDetails,
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
  pdf: string;
  iframe: string[];
  level: string;
  category: {
    id: number;
    nama: string;
    color: string;
  };
  viewer: string;
};

export const useAnnouncements = (id?: string) => {
  const { data: announcements, isLoading: isAnnouncementsLoading } = useQuery<
    Announcement[] | null
  >({
    queryKey: ["Announcements"],
    queryFn: () => getAnnouncements(),
  });

  const { data: announcementDetails, isLoading: isAnnouncementDetailsLoading } =
    useQuery<Announcement | null>({
      queryKey: ["AnnouncementDetails"],
      queryFn: () => getAnnouncementDetails(id),
      enabled: !!id,
    });

  return {
    announcements,
    isAnnouncementsLoading,
    announcementDetails,
    isAnnouncementDetailsLoading,
  };
};
