import useData from "./useData";
import { Genre } from "./useGenre";

export interface Series {
  id: number;
  original_name: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
  overview: string;
}

const useSeries = (selectedGenre: Genre | null) =>
  useData<Series>(
    "/discover/tv",
    {
      params: {
        with_genres: selectedGenre?.id
          ? selectedGenre.id.toString()
          : undefined,
      },
    },
    [selectedGenre?.id]
  );

export default useSeries;
