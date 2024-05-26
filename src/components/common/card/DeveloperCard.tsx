import { HStack, VStack, Text, Image, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function DeveloperCard() {
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
      <VStack alignItems={"flex-start"}>
        <HStack color={"#FFF"} fontSize={"sm"} fontWeight={"400"}>
          <HStack>
            <Text>Develop by Petrus Handika</Text>
            <Text>•</Text>
          </HStack>
          <HStack>
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
          </HStack>
        </HStack>
        <HStack color={"#B2B2B2"} fontSize={".6rem"} fontWeight={"400"} spacing={1}>
          <Text>Powered by</Text>
          <Image src="../../../../public/images/dumbways.png" width={"5"} />
          <Text>Dumbways Indonesia</Text>
          <Text>•</Text>
          <Text>#1Coding Bootcamp</Text>
        </HStack>
      </VStack>
    </Box>
  );
}
