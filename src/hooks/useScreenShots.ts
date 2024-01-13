import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

interface ScreenShot {
  id: string;
  image: string;
  width: number;
  height: number;
}

const useScreenShots = (gameId: number) => {
  const screenshot = new apiClient<ScreenShot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => screenshot.getAll({}),
  });
};

export default useScreenShots;
