import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Movie {
  id: number;
  original_title: string;
}

interface FetchPlayingMovies {
  page: number;
  results: Movie[];
}

const useMovies = () => {
  const [playingMovies, setPlayingMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchPlayingMovies>("/movie/now_playing", {
        signal: controller.signal,
      })
      .then((res) => setPlayingMovies(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { playingMovies, error };
};

export default useMovies;
