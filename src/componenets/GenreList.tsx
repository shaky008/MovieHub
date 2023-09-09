import { Button, List, ListItem, Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import GenreCardContainer from "./GenreCardContainer";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  presentGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, presentGenre }: Props) => {
  const { data, error, isLoading } = useGenre();
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

        {data.map((genre) => (
          <GenreCardContainer key={genre.id}>
            <ListItem key={genre.id}>
              <Button
                color={genre.id === presentGenre?.id ? "#0070f3" : "normal"}
                fontSize="xl"
                variant="link"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </ListItem>
          </GenreCardContainer>
        ))}
      </List>
    </>
  );
};

export default GenreList;
