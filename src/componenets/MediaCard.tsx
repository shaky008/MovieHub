import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import ReleaseDate from "./ReleaseDate";
import MovieRating from "./MovieRating";
import MoviePop from "./MoviePop";

interface Props {
  title: string;
  posterPath: string;
  averageVote: number;
  releaseDate: string;
  item: any;
}

const MediaCard = ({
  title,
  item,
  posterPath,
  averageVote,
  releaseDate,
}: Props) => {
  //construct the complete image URL
  const imageUrl = `https://image.tmdb.org/t/p/w342${posterPath}`;

  //shorten the title by adding (...) if the title length exceeds 22 character
  const truncatedTitle = title.length > 22 ? title.slice(0, 22) + "..." : title;

  return (
    <>
      <MoviePop item={item}>
        <Card _hover={{ color: "#0070f3" }} cursor="pointer">
          <Image src={imageUrl} height="300px" alt={title} />
          <CardBody>
            <Heading fontSize="lg">{truncatedTitle}</Heading>

            <HStack justifyContent="space-between">
              <Text>
                <MovieRating movieRating={averageVote} />
              </Text>
              <Text noOfLines={1} isTruncated>
                <ReleaseDate releaseDate={releaseDate}></ReleaseDate>
              </Text>
            </HStack>
          </CardBody>
        </Card>
      </MoviePop>
    </>
  );
};

export default MediaCard;
