import { Badge } from "@chakra-ui/react";

interface Props {
  movieRating: number;
}

const MovieRating = ({ movieRating }: Props) => {
  let color =
    movieRating > 8.0 ? "green" : movieRating > 6.0 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} borderRadius={3}>
      {movieRating}
    </Badge>
  );
};

export default MovieRating;
