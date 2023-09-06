import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./componenets/Navbar";
import MovieGrid from "./componenets/MovieGrid";
import GenreList from "./componenets/GenreList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import EntertainmentMenu from "./componenets/EntertainmentMenu";

export interface MediaQuery {
  genre: Genre | null;
  media: String | null;
}

function App() {
  const [mediaQuery, setMediaQuery] = useState<MediaQuery>({} as MediaQuery);

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
            onSelectGenre={(genre) => setMediaQuery({ ...mediaQuery, genre })}
            presentGenre={mediaQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <EntertainmentMenu
          selectedMedia={mediaQuery.media}
          onSelectMedia={(media) => {
            setMediaQuery({ ...mediaQuery, media });
          }}
        />
        <MovieGrid mediaQuery={mediaQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
