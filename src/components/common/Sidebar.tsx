import { Flex, Icon, Heading, Text, Button, Link } from "@chakra-ui/react";
import { FiHome, FiSearch, FiUsers, FiUser, FiLogOut } from "react-icons/fi";
import { useState } from "react";
import SidebarItem from "../common/SidebarItem";

export default function Sidebar() {
  const [navSize] = useState<"small" | "large">("large");

  return (
    <Flex
      color="white"
      position="fixed"
      h="100vh"
      w="20%"
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5% 15%"
        flexDir="column"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as="nav"
      >
        <Heading as="h2" size="2xl" color="#04A51E">
          circle
        </Heading>
        <SidebarItem navSize={navSize} icon={FiHome} title="Home" />
        <SidebarItem navSize={navSize} icon={FiSearch} title="Search" />
        <SidebarItem navSize={navSize} icon={FiUsers} title="Follows" />
        <SidebarItem navSize={navSize} icon={FiUser} title="Profile" />
        <Button
          mt={5}
          w="100%"
          backgroundColor="#04A51E"
          color="fff"
          borderRadius="25px"
        >
          Create Post
        </Button>
      </Flex>

      <Flex
        mt={30}
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
      >
        <Flex mt={4} align="center">
          <Flex
            p="25% 35%"
            flexDir="row"
            alignItems="center"
            gap={3}
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Icon as={FiLogOut} color="#fff" />
            <Link textDecoration="none">
              <Text color="#fff">Logout</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
