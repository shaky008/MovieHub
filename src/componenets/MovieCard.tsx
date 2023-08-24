import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import ReleaseDate from "./ReleaseDate";
import MovieRating from "./MovieRating";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  //construct the complete image URL
  const imageUrl = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;

  //shorten the title by adding (...) if the title length exceeds 22 character
  const truncatedTitle =
    movie.original_title.length > 22
      ? movie.original_title.slice(0, 22) + "..."
      : movie.original_title;

  return (
    <Card width="275px" borderRadius={10} overflow="hidden">
      <Image src={imageUrl} height="300px" alt={movie.original_title} />
      <CardBody>
        <Heading fontSize="lg">{truncatedTitle}</Heading>

        <HStack justifyContent="space-between">
          <Text>
            <MovieRating movieRating={movie.vote_average} />
          </Text>
          <Text noOfLines={1} isTruncated>
            <ReleaseDate releaseDate={movie.release_date}></ReleaseDate>
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
