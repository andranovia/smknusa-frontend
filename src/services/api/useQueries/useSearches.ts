import { useQuery } from "@tanstack/react-query";
import { News } from "./useNews";
import { Announcement } from "./useAnnouncements";
import { Extra } from "./useExtracurricular";
import { Major } from "./useMajors";
import { Gallery } from "./useGalleries";
import { Facility } from "./useFacilities";
import { Teaching } from "./useTeaching";
import { Student, Teacher } from "./useResidents";
import { Partnership } from "./usePartnerships";
import { Vacancy } from "./useVacancies";
import { getSearchData } from "../methods/fetch-searches";
import { Article } from "./useArticles";
import { Event } from "./useEvents";

export type SearchData = {
  articles: Article | null;
  news: News | null;
  announcements: Announcement | null;
  events: Event | null;
  ekstras: Extra | null;
  facilities: Facility | null;
  galleries: Gallery | null;
  jurusans: Major | null;
  pa: Teaching | null;
  pd: Student | null;
  ptk: Teacher | null;
  kemitraan: Partnership | null;
  lokers: Vacancy | null;
};

export const useSearches = (filter?: { query: string }) => {
  const {
    data: searches,
    isLoading: isSearchLoading,
    refetch,
  } = useQuery<SearchData[] | null>({
    queryKey: ["SearchData", filter],
    queryFn: () => getSearchData(filter),
    enabled: !!filter,
  });

  return {
    searches,
    isSearchLoading,
    refetch,
  };
};
