import { useQuery } from "@tanstack/react-query"
import { getJumbotron } from "../methods/fetch-jumbotron"

export interface jumbotron {
    id_video: number
    video_title: string
    video_url: string
    updated_at: string
  }
  

const useJumbotron = () => {

    const {data: jumbotron, isLoading: isJumbotronLoading} = useQuery<jumbotron | null>({
        queryKey: ["Jumbotron"],
        queryFn: () => getJumbotron(),
    })
    

    return {
        jumbotron,
        isJumbotronLoading
    }
}

export default useJumbotron