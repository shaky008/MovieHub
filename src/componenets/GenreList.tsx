import { List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import GenreCardContainer from "./GenreCardContainer";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { movieGenres, error, isLoading } = useGenre();

  //array used to render no of genre skeletons when loading
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GenreCardContainer key={skeleton}>
              <GenreSkeleton key={skeleton} />
            </GenreCardContainer>
          ))}

        {movieGenres.map((genre) => (
          <GenreCardContainer key={genre.id}>
            <ListItem key={genre.id}>
              <Text fontSize="xl">{genre.name}</Text>
            </ListItem>
          </GenreCardContainer>
        ))}
      </List>
    </>
  );
};

export default GenreList;
