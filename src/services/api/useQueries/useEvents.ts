import { useQuery } from "@tanstack/react-query";
import {
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
    color: string;
  };
  viewer: string;
};

export const useEvents = ( ) => {


  const { data: events } = useQuery<Event[] | null>({
    queryKey: ["Events"],
    queryFn: () => getEvents()
  });



  const { data: eventsCategories } = useQuery({
    queryKey: ["EventsCategories"],
    queryFn: () => {
      return getEventCategories();
    },
  });

  return { events,  eventsCategories };
};
