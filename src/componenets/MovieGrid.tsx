import { Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";

const MovieGrid = () => {
  const { playingMovies, error } = useMovies();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {playingMovies.map((PlayingMovie) => (
          <li key={PlayingMovie.id}>{PlayingMovie.original_title}</li>
        ))}
      </ul>
    </>
  );
};

export default MovieGrid;
