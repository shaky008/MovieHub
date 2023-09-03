import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AiOutlineArrowDown } from "react-icons/ai";

interface Props {
  onSelectMedia: (media: String) => void;
}

const EntertainmentMenu = ({ onSelectMedia }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<AiOutlineArrowDown />}>
        EntertainmentMenu
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSelectMedia("movies")}>Movies</MenuItem>
        <MenuItem onClick={() => onSelectMedia("series")}>Tv</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default EntertainmentMenu;
