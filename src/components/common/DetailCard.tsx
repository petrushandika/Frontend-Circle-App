import { VStack, HStack, Text, Icon, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function DetailCard() {
  return (
    <VStack
      spacing={3}
      p={4}
      bg="#262626"
      color="#fff"
      borderRadius="md"
      boxShadow="md"
      width="100%"
      maxW="md"
    >
      <HStack spacing={2}>
        <Flex>
          <Text fontSize=".9rem">Developed by Petrus Handika • </Text>
          <Flex gap={2} ml={2}>
            <Icon as={FontAwesomeIcon} icon={faGithub} boxSize={5} />
            <Icon as={FontAwesomeIcon} icon={faLinkedin} boxSize={5} />
            <Icon as={FontAwesomeIcon} icon={faFacebook} boxSize={5} />
            <Icon as={FontAwesomeIcon} icon={faInstagram} boxSize={5} />
          </Flex>
        </Flex>
      </HStack>
      <Text fontSize=".75rem">Powered by Dumbways Indonesia • #1 Coding Bootcamp</Text>
    </VStack>
  );
}
