import { VStack, Box } from "@chakra-ui/react";
import HeaderCard from "../../common/card/HeaderCard";
import AccountCard from "./AccountCard";

export default function SuggestCard() {
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
    >
      <VStack
        w={"100%"}
        alignItems={"flex-start"}
        mb={10}
        overflowY={"auto"}
        maxH={"300px"}
        spacing={5}
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",  
          },
          scrollbarWidth: "none",
        }}
      >
        <HeaderCard text="Suggested for you " />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
      </VStack>
    </Box>
  );
}
