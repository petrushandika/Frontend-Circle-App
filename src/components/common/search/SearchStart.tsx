import {
  Box,
  VStack,
  Text,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import HollowInput from "../input/HollowInput";
import { SearchIcon } from "../icon/Icon";

export default function SearchStart() {
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
      <VStack width={"100%"} padding={5}>
        <InputGroup width="100%" color="#B2B2B2" alignItems="center">
          <InputLeftElement pointerEvents="none" mr={5}>
            <SearchIcon />
          </InputLeftElement>
          <HollowInput />
        </InputGroup>

        <VStack
          color={"#FFF"}
          spacing={0}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100vh"}
        >
          <Text>Write and search something</Text>
          <Text fontSize={".8rem"} color={"#909090"}>
            Try searching for something else or check the
          </Text>
          <Text fontSize={".8rem"} color={"#909090"}>
            spelling what you typed.
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
}
