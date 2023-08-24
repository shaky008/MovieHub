import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieGrid = () => {
  const { playingMovies, error, isLoading } = useMovies();

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}
        {playingMovies.map((PlayingMovie) => (
          <MovieCard key={PlayingMovie.id} movie={PlayingMovie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
