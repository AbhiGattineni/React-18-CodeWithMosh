import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

interface Trailer {
  id: string;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

const useTrailers = (movieId: number) => {
  const getTrailers = new apiClient<Trailer>(`/games/${movieId}/movies`);
  return useQuery({
    queryKey: ["trailers", movieId],
    queryFn: () => getTrailers.getAll({}),
  });
};

export default useTrailers;
