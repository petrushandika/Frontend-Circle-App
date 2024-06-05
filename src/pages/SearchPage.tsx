import { Box, VStack } from "@chakra-ui/react";
import SearchStart from "../components/common/search/SearchStart";

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
        <SearchStart />
      </VStack>
    </Box>
  );
}
