import useData from "./useData";

export interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

const useMovies = () => useData<Movie>("/discover/movie");

export default useMovies;
