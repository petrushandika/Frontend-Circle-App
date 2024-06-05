import { VStack, Box, HStack, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
            <Link to={"https://github.com/petrushandika"} target="_blank">
              <GithubIcon />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/petrushandika/"}
              target="_blank"
            >
              <LinkedinIcon />
            </Link>
            <Link
              to={"https://web.facebook.com/profile.php?id=100005576386372"}
              target="_blank"
            >
              <FacebookIcon />
            </Link>
            <Link
              to={"https://www.instagram.com/petrushandika/"}
              target="_blank"
            >
              <InstagramIcon />
            </Link>
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
