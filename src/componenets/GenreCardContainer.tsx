import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GenreCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} paddingY="5px">
      {children}
    </Box>
  );
};

export default GenreCardContainer;
