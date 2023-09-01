import { Card, CardBody, HStack, Text, Image, Heading } from "@chakra-ui/react";
import { Series } from "../hooks/useSeries";
import MoviePop from "./MoviePop";
import ReleaseDate from "./ReleaseDate";
import MovieRating from "./MovieRating";

interface Props {
  series: Series;
}

const TvSeriesCard = ({ series }: Props) => {
  //construct the complete image URL
  const imageUrl = `https://image.tmdb.org/t/p/w342${series.poster_path}`;

  const truncatedTitle =
    series.original_name.length > 22
      ? series.original_name.slice(0, 22) + "..."
      : series.original_name;
  return (
    <>
      <MoviePop item={series}>
        <Card _hover={{ color: "#0070f3" }} cursor="pointer">
          <Image src={imageUrl} height="300px" alt={series.original_name} />
          <CardBody>
            <Heading fontSize="lg">{truncatedTitle}</Heading>

            <HStack justifyContent="space-between">
              <Text>
                <MovieRating movieRating={series.vote_average} />
              </Text>
              <Text noOfLines={1} isTruncated>
                <ReleaseDate releaseDate={series.first_air_date}></ReleaseDate>
              </Text>
            </HStack>
          </CardBody>
        </Card>
      </MoviePop>
    </>
  );
};

export default TvSeriesCard;
