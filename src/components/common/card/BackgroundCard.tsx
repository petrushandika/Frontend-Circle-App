import { Box } from "@chakra-ui/react";

export default function BackgroundCard() {
  return (
    <Box
      w={"100%"}
      backgroundColor={"#262626"}
      p={5}
      borderRadius={"lg"}
      overflow={"hidden"}
      boxShadow={"md"}
      maxW={"sm"}
      h={"fit-content"}
    ></Box>
  );
}
