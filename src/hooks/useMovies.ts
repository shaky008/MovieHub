import useData from "./useData";
import { Genre } from "./useGenre";

export interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
  with_genres: string;
}

const useMovies = (selectedGenre: Genre | null) =>
  useData<Movie>(
    "/discover/movie",
    {
      params: {
        with_genres: selectedGenre?.id
          ? selectedGenre.id.toString()
          : undefined,
      },
    },
    [selectedGenre?.id]
  );

export default useMovies;
