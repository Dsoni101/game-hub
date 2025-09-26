import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import Genre from "../entities/Genre";
import { default as APIClient } from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 hrs,
    initialData: genres

});

export default useGenres;