import { useQuery } from "@tanstack/react-query";
import {
  getEventById,
  getEventCategories,
  getEvents,
} from "../methods/fetch-events";

export type Event = {
  id_pemberitahuan: string;
  nama: string;
  thumbnail: string;
  created_at: string;
  text: string;
  level: string;
  category: {
    id: number;
    nama: string;
  };
  viewer: string;
};

export const useEvents = (id?: string) => {


  const { data: events } = useQuery<Event[] | null>({
    queryKey: ["Events"],
    queryFn: () => getEvents()
  });

  const { data: eventById } = useQuery({
    queryKey: ["EventById"],
    queryFn: () => {
      return getEventById(id);
    },
  });

  const { data: eventCategories } = useQuery({
    queryKey: ["EventCategories"],
    queryFn: () => {
      return getEventCategories();
    },
  });

  return { events, eventById, eventCategories };
};
