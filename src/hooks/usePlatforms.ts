import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import platforms from "../data/platforms";
import { default as APIClient } from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = (gameQuery?: GameQuery) => useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs,
    initialData: { count: platforms.length, results: platforms }
})

export default usePlatforms;