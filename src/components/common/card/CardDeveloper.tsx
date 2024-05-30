import { VStack, Box, HStack, Text, Image } from "@chakra-ui/react";
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
} from "../icon/Icon";

export default function DeveloperCard() {
  return (
    <Box
      w="100%"
      padding={5}
      overflow="hidden"
      maxW="100%"
      h="fit-content"
      background={""}
      borderRadius={5}
      color={"#FFF"}
    >
      <VStack alignItems={"flex-start"}>
        <HStack>
          <HStack>
            <Text>Develop by Petrus Handika</Text>
            <Text>•</Text>
          </HStack>
          <HStack>
            <GithubIcon />
            <LinkedinIcon />
            <FacebookIcon />
            <InstagramIcon />
          </HStack>
        </HStack>
        <HStack
          color={"#B2B2B2"}
          fontSize={".7rem"}
          fontWeight={"400"}
          spacing={1}
        >
          <Text>Powered by</Text>
          <Image src="../../../../public/images/dumbways.png" width={"5"} />
          <Text>Dumbways Indonesia</Text>
          <Text>•</Text>
          <Text>#1 Coding Bootcamp</Text>
        </HStack>
      </VStack>
    </Box>
  );
}
