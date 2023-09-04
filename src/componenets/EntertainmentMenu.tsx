import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AiOutlineArrowDown } from "react-icons/ai";

interface Props {
  onSelectMedia: (media: String) => void;
  selectedMedia: String | null;
}

const EntertainmentMenu = ({ onSelectMedia, selectedMedia }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<AiOutlineArrowDown />}>
        {selectedMedia || "Entertainment Menu"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSelectMedia("movies")}>Movies</MenuItem>
        <MenuItem onClick={() => onSelectMedia("series")}>Tv Series</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default EntertainmentMenu;
