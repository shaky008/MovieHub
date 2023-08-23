import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const { playingMovies, error } = useMovies();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={5}
      >
        {playingMovies.map((PlayingMovie) => (
          <MovieCard key={PlayingMovie.id} movie={PlayingMovie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
