import { VStack, Box } from "@chakra-ui/react";
import HollowInput from "../components/common/input/HollowInput";

export default function SearchPage() {
  return (
    <Box
      borderRight={"1px solid #3F3F3F"}
      borderLeft={"1px solid #3F3F3F"}
      w="100%"
      p={5}
      overflow="hidden"
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
        <HollowInput text="Search your friend" />
      </VStack>
    </Box>
  );
}
