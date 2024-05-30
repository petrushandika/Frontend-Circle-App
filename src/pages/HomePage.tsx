import { Box, VStack } from "@chakra-ui/react";
import Thread from "../components/common/thread/Thread";
import ThreadCreate from "../components/common/thread/ThreadCreate";
import CardHeader from "../components/common/card/CardHeader";

export default function HomePages() {
  return (
    <Box
      color={"#FFF"}
      borderRight={"1px solid #3F3F3F"}
      borderLeft={"1px solid #3F3F3F"}
      width={"100%"}
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
      <VStack>
        <VStack width={"100%"}>
          <CardHeader
            text="Home"
            padding={"30px 0 0 20px"}
            fontSize={25}
            fontWeight={"400"}
          />
          <ThreadCreate />
        </VStack>
        <Thread />
      </VStack>
    </Box>
  );
}
