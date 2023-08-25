import { List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { movieGenres, error, isLoading } = useGenre();

  return (
    <List>
      {movieGenres.map((genre) => (
        <ListItem paddingY="5px" key={genre.id}>
          <Text fontSize="xl">{genre.name}</Text>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
