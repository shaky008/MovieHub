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
import { Series } from "../hooks/useSeries";

interface Props {
  children: ReactNode;
  item: Movie | Series;
}

const MoviePop = ({ children, item }: Props) => {
  const isMovie = "original_title" in item; // Check if the item has "original_title"
  return (
    <Popover trigger="hover">
      <PopoverTrigger>{children}</PopoverTrigger>
      <Portal>
        <PopoverContent borderRadius={10}>
          <PopoverHeader fontSize={22} fontWeight="bold">
            {isMovie ? item.original_title : item.original_name}
          </PopoverHeader>
          <PopoverBody>{item.overview}</PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default MoviePop;
