import { Heading } from "@chakra-ui/react";
import { MediaQuery } from "../App";

interface Props {
  mediaQuery: MediaQuery;
}

const MediaHeading = ({ mediaQuery }: Props) => {
  const mediaHeading = mediaQuery.media === "movies" ? "movies" : "Series";
  const genreHeading = `${mediaQuery.genre?.name || ""}`;
  const heading = `${genreHeading} ${mediaHeading || ""}`;

  return <Heading as="h1">{heading}</Heading>;
};

export default MediaHeading;
