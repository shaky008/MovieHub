import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";
import { Genre } from "../hooks/useGenre";
import useSeries from "../hooks/useSeries";
import TvSeriesCard from "./TvSeriesCard";

interface Props {
  selectedGenre: Genre | null;
  selectedMediaType: String | null;
}

const MovieGrid = ({ selectedGenre, selectedMediaType }: Props) => {
  const { data, error, isLoading } = useMovies(selectedGenre);

  const {
    data: series,
    error: seriesError,
    isLoading: seriesLoading,
  } = useSeries(selectedGenre);
  //array used to render no of movie card skeleton when loading
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error || (seriesError && <Text>{error || seriesError}</Text>)}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={5}
      >
        {isLoading ||
          (seriesLoading &&
            skeletons.map((skeleton) => (
              <MovieCardContainer key={skeleton}>
                <MovieCardSkeleton />
              </MovieCardContainer>
            )))}

        {selectedMediaType === "movies"
          ? data.map((movie) => (
              <MovieCardContainer key={movie.id}>
                <MovieCard movie={movie} />
              </MovieCardContainer>
            ))
          : series.map((movie) => (
              <MovieCardContainer key={movie.id}>
                <TvSeriesCard series={movie} />
              </MovieCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
