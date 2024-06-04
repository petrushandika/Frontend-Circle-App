import { VStack } from "@chakra-ui/react";
import ThreadList from "./ThreadList";

export default function Thread() {
  return (
    <VStack
      overflow={"hidden"}
      height={"100vh"}
      overflowY="auto"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <ThreadList />
    </VStack>
  );
}
