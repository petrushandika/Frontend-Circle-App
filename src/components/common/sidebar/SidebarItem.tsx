import { VStack, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  SearchIcon,
  LoveIcon,
  UserIcon,
  LogoutIcon,
} from "../icon/Icon";
import HeaderCard from "../card/CardHeader";
import NewThread from "../../common/modals/NewThread";

export default function SidebarItem() {
  return (
    <VStack
      width={"20%"}
      height={"100vh"}
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      p={5}
      borderRight={"1px solid #3F3F3F"}
      position={"fixed"}
    >
      <VStack
        spacing={7}
        width={"100%"}
        alignItems={"flex-start"}
        color={"#FFF"}
        fontWeight={"300"}
      >
        <HeaderCard
          color={"#04A51E"}
          text={"Circle"}
          fontWeight={700}
          fontSize={"3em"}
        />
        <Link to="/" style={{ width: "100%" }}>
          <HStack gap={3} ml={1}>
            <HomeIcon fontSize={"1.5rem"} />
            <Text>Home</Text>
          </HStack>
        </Link>
        <Link to="/search" style={{ width: "100%" }}>
          <HStack gap={3} ml={1}>
            <SearchIcon fontSize={"1.5rem"} />
            <Text>Search</Text>
          </HStack>
        </Link>
        <Link to="/follow" style={{ width: "100%" }}>
          <HStack gap={3} ml={1}>
            <LoveIcon fontSize={"1.5rem"} />
            <Text>Follows</Text>
          </HStack>
        </Link>
        <Link to="/me" style={{ width: "100%" }}>
          <HStack gap={3} ml={1}>
            <UserIcon fontSize={"1.5rem"} />
            <Text>Profile</Text>
          </HStack>
        </Link>
        <HStack width={"100%"}>
          <NewThread />
        </HStack>
      </VStack>
      <VStack width={"100%"} alignItems={"flex-start"} color={"#FFF"}>
        <Link to="/logout" style={{ width: "100%" }}>
          <HStack gap={3} fontWeight={"300"}>
            <LogoutIcon fontSize={"1.5rem"} />
            <Text>Logout</Text>
          </HStack>
        </Link>
      </VStack>
    </VStack>
  );
}
