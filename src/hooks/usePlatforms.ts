import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import Platform from "../entities/Platform";
import { default as APIClient } from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 hrs,
    initialData: platforms
})

export default usePlatforms;