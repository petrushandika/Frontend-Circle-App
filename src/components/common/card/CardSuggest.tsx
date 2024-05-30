import { VStack, Box } from "@chakra-ui/react";
import HeaderCard from "./CardHeader";
import CardAccount from "./CardAccount";

export default function SuggestCard() {
  return (
    <Box
      w="100%"
      padding={5}
      overflow="hidden"
      maxW="100%"
      h="fit-content"
      background={""}
      borderRadius={5}
    >
      <VStack gap={5}>
        <HeaderCard text="Suggested for you" fontSize={"1rem"} />
        <CardAccount />
        <CardAccount />
        <CardAccount />
      </VStack>
    </Box>
  );
}
