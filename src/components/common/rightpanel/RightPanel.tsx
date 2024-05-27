import { VStack } from "@chakra-ui/react";
import ProfileCard from "../../common/card/ProfileCard";
import SuggestCard from "../../common/card/SuggestCard";
import DeveloperCard from "../card/DeveloperCard";

export default function RightPanel() {
  return (
    <VStack
      width={"30%"}
      position="fixed"
      h="100vh"
      overflowY="auto"
      p={5}
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <VStack width={"100%"} maxW={"sm"} bg={"#262626"} borderRadius={"lg"}>
        <ProfileCard />
      </VStack>
      <VStack width={"100%"} maxW={"sm"} bg={"#262626"} borderRadius={"lg"}>
        <SuggestCard />
      </VStack>
      <VStack width={"100%"} maxW={"sm"} bg={"#262626"} borderRadius={"lg"}>
        <DeveloperCard />
      </VStack>
    </VStack>
  );
}
