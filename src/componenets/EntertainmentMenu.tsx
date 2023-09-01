import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AiOutlineArrowDown } from "react-icons/ai";
const EntertainmentMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<AiOutlineArrowDown />}>
        EntertainmentMenu
      </MenuButton>
      <MenuList>
        <MenuItem>Movies</MenuItem>
        <MenuItem>Tv</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default EntertainmentMenu;
