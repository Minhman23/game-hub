import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { GameQuery } from "../App";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"}>
      <Image src={Logo} boxSize={"60px"}></Image>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
