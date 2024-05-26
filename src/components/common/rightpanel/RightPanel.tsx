import { VStack } from "@chakra-ui/react";
import ProfileCard from "../../common/card/ProfileCard";
import SuggestCard from "../../common/card/SuggestCard";
import DeveloperCard from "../card/DeveloperCard";

export default function RightPanel() {
  return (
    <VStack py={5} px={10} position="fixed" h="100%" overflowY="auto">
      <ProfileCard />
      <SuggestCard />
      <DeveloperCard />
    </VStack>
  );
}
