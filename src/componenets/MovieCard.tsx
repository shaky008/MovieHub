import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  //construct the complete image URL
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={imageUrl} height="250px" />
      <CardBody>
        <Heading fontSize="lg">{movie.original_title}</Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
