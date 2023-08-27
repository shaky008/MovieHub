import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Movie } from "../hooks/useMovies";

interface Props {
  children: ReactNode;
  movie: Movie;
}

const MoviePop = ({ children, movie }: Props) => {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>{children}</PopoverTrigger>
      <Portal>
        <PopoverContent borderRadius={10}>
          <PopoverHeader fontSize={22} fontWeight="bold">
            {movie.original_title}
          </PopoverHeader>
          <PopoverBody>{movie.overview}</PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default MoviePop;
