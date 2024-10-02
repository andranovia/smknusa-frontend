import { useQuery } from "@tanstack/react-query";
import { getSchoolGalleries } from "../methods/fetch-galleries";

export interface Gallery {
  id_gallery: number;
  gallery_title: string;
  icon_type: string;
  gallery_text: string;
  gallery_location: string;
  id_category: string;
  gallery_file: string;
  file_type: string;
}

export const useGalleries = () => {
  const { data: galleries, isLoading: isGalleriesLoading } = useQuery<
    Gallery[] | null
  >({
    queryKey: ["Galleries"],
    queryFn: async () => {
      const data = await getSchoolGalleries();
      return data ?? [];
    },
  });
  if (galleries == undefined) {
    console.log("get data returned undefined");
  } else {
  }

  return { galleries, isGalleriesLoading };
};
