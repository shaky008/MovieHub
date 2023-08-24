import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface FetchPlayingMovies {
  page: number;
  results: Movie[];
}

const useMovies = () => {
  const [playingMovies, setPlayingMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchPlayingMovies>("/movie/now_playing", {
        signal: controller.signal,
      })
      .then((res) => {
        setPlayingMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { playingMovies, error, isLoading };
};

export default useMovies;
