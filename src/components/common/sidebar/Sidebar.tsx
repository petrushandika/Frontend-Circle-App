import { VStack, Heading } from "@chakra-ui/react";
import IconCard from "../../common/sidebar/SidebarItem";
import { FiHome, FiSearch, FiUsers, FiUser, FiLogOut } from "react-icons/fi";
import HoverButton from "../button/HoverButton";

export default function Sidebar() {
  return (
    <VStack
      width={"20%"}
      height={"100vh"}
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      py={5}
      px={10}
      position={"fixed"}
    >
      <VStack spacing={6} width={"100%"} alignItems={"flex-start"}>
        <Heading as="h2" size="2xl" color={"#04A51E"}>
          Circle
        </Heading>
        <IconCard to="/" icon={FiHome} text="Home" />
        <IconCard to="/search" icon={FiSearch} text="Search" />
        <IconCard to="/follows" icon={FiUsers} text="Follows" />
        <IconCard to="/profilepage" icon={FiUser} text="Profile" />
        <HoverButton text="Create Post" />
      </VStack>
      <VStack>
        <IconCard to="/" icon={FiLogOut} text="Logout" />
      </VStack>
    </VStack>
  );
}
