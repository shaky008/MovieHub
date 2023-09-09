import { MediaQuery } from "../App";
import useData from "./useData";

export interface Series {
  id: number;
  original_name: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
  overview: string;
}

const useSeries = (mediaQuery: MediaQuery) =>
  useData<Series>(
    "/discover/tv",
    {
      params: {
        with_genres: mediaQuery.genre?.id
          ? mediaQuery.genre.id.toString()
          : undefined,
      },
    },
    [mediaQuery.genre?.id]
  );

export default useSeries;
