import { VStack, Box } from "@chakra-ui/react";
import HeaderCard from "./CardHeader";
import CardAccount from "./CardAccount";

export default function SuggestCard() {
  return (
    <Box w="100%" padding={5} maxW="100%" h="fit-content" background={""} borderRadius={5}>
      <HeaderCard text="Suggested for you" fontSize={"1rem"} />
      <Box
        overflowY="auto"
        maxH="200px"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
        mt={5}
      >
        <VStack gap={5}>
          <CardAccount />
          <CardAccount />
          <CardAccount />
          <CardAccount />
          <CardAccount />
          <CardAccount />
          <CardAccount />
          <CardAccount />
          <CardAccount />
          <CardAccount />
        </VStack>
      </Box>
    </Box>
  );
}