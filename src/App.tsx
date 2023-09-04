import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./componenets/Navbar";
import MovieGrid from "./componenets/MovieGrid";
import GenreList from "./componenets/GenreList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import EntertainmentMenu from "./componenets/EntertainmentMenu";

function App() {
  //keep tracks of selected genre from the genre list
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  //keep tracks of selected media type (movie or tv series)
  const [selectedMediaType, setSelectedMediaType] = useState<String | null>(
    null
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "180px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={2}>
          <GenreList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            presentGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <EntertainmentMenu
          selectedMedia={selectedMediaType}
          onSelectMedia={(media) => {
            setSelectedMediaType(media);
          }}
        />
        <MovieGrid
          selectedMediaType={selectedMediaType}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
