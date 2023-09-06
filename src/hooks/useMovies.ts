import { MediaQuery } from "../App";
import useData from "./useData";

export interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

const useMovies = (mediaQuery: MediaQuery) =>
  useData<Movie>(
    "/discover/movie",
    {
      params: {
        with_genres: mediaQuery.genre?.id
          ? mediaQuery.genre.id.toString()
          : undefined,
      },
    },
    [mediaQuery.genre?.id]
  );

export default useMovies;
