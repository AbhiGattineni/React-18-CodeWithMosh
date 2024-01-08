import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: () =>
            apiClient
                .get<FetchResponse<Platform>>('/platforms/lists/parents')
                .then((response) => response.data),
        staleTime: 24 * 60 *60 * 1000,
    })
};

export default usePlatforms;