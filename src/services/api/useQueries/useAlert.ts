import { useQuery } from "@tanstack/react-query";
import { getAlerts } from "../methods/fetch-alert";

export type Alert = {
  id_alert: number;
  alert_title: string;
  icon_type: string;
  alert_url: string;
  updated_at: string;
};

export const useAlert = () => {
  const { data: alert, isLoading: isAlertLoading } = useQuery<Alert[] | null>({
    queryKey: ["alerts"],
    queryFn: async () => {
      const data = await getAlerts();
      return data ?? [];
    },
  });
  if (alert == undefined) {
    console.log("get data returned undefined");
  }

  return { alert, isAlertLoading };
};
