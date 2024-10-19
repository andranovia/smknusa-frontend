import { useQuery } from "@tanstack/react-query";
import { getEventDetails, getEvents } from "../methods/fetch-events";

export type Event = {
  id_pemberitahuan: string;
  nama: string;
  thumbnail: string;
  created_at: string;
  text: string;
  icon_type: string;
  level: string;
  pdf: string;
  iframe: string[];
  category: {
    id: number;
    nama: string;
    color: string;
  };
  viewer: string;
};

export const useEvents = (id?: string) => {
  const { data: events, isLoading: isEventsLoading } = useQuery<Event[] | null>(
    {
      queryKey: ["Events"],
      queryFn: () => getEvents(),
    }
  );

  const { data: eventDetails, isLoading: isEventDetailsLoading } =
    useQuery<Event | null>({
      queryKey: ["EventDetails"],
      queryFn: () => getEventDetails(id),
    });

  return { events, eventDetails, isEventDetailsLoading, isEventsLoading };
};
