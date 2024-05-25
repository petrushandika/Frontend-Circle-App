import ProfileCard from "./ProfileCard";
import SuggestCard from "./SuggestCard";
import DetailCard from "./DetailCard";
import { VStack } from "@chakra-ui/react";

const RightPanel = () => {
  return (
    <VStack
      p={5}
      position="fixed"
      h="100%"
      overflowY="auto"
      right={0}
      top={0}
    >
      <VStack spacing={6}>
        <ProfileCard />
        <SuggestCard />
        <DetailCard />
      </VStack>
    </VStack>
  );
};

export default RightPanel;
