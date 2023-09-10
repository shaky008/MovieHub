import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/barrel-svgrepo-com.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";
const Navbar = () => {
  // Reload the current page
  const handleRefreshClick = () => {
    window.location.reload();
  };
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        src={logo}
        boxSize="60px"
        onClick={handleRefreshClick}
        cursor="pointer"
        alt="website"
      />
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
