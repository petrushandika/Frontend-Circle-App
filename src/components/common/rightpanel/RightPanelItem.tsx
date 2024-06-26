import { VStack } from "@chakra-ui/react";
import CardProfile from "../card/CardProfile";
import CardSuggest from "../card/CardSuggest";
import CardDeveloper from "../card/CardDeveloper";

interface RightPanelItemProps {
  refetch: () => void;
}

export default function RightPanelItem({ refetch }: RightPanelItemProps) {
  return (
    <VStack
      width={"fit-content"}
      borderLeft={"1px solid #3F3F3F"}
      height={"100vh"}
      padding={5}
      position={"fixed"}
    >
      <VStack width={"100%"} background={"#262626"} borderRadius={5}>
        <CardProfile refetch={refetch} />
      </VStack>
      <VStack width={"100%"} background={"#262626"} borderRadius={5}>
        <CardSuggest />
      </VStack>
      <VStack width={"100%"} background={"#262626"} borderRadius={5}>
        <CardDeveloper />
      </VStack>
    </VStack>
  );
}
