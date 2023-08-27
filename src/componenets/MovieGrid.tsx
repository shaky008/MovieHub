import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";
import { Genre } from "../hooks/useGenre";

// interface Props {
//   selectedGenre: Genre | null
// }

const MovieGrid = () => {
  const { playingMovies, error, isLoading } = useMovies();

  //array used to render no of movie card skeleton when loading
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
          skeletons.map((skeleton) => (
            <MovieCardContainer key={skeleton}>
              <MovieCardSkeleton />
            </MovieCardContainer>
          ))}
        {playingMovies.map((PlayingMovie) => (
          <MovieCardContainer key={PlayingMovie.id}>
            <MovieCard movie={PlayingMovie} />
          </MovieCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
