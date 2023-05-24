import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Trailer from "./entities/Trailer";

const useTrailers = (slug: string) => {
  const apiClient = new APIClient<Trailer>(`/games/${slug}/movies`);

  return useQuery({
    queryKey: ["trailer", slug],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
