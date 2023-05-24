import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Screenshot from "./entities/Screenshot";

const useScreenshots = (slug: string) => {
  const apiClient = new APIClient<Screenshot>(`/games/${slug}/screenshots`);

  return useQuery({
    queryKey: ["screenshot", slug],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
