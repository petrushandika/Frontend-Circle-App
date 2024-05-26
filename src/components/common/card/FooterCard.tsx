import { Flex, HStack, Text } from "@chakra-ui/react";

export default function FooterCard() {
  return (
    <HStack width={"100%"} alignItems={"flex-start"} color={"#FFF"} pb={5}>
      <Flex gap={2}>
        <Text fontWeight={"600"} fontSize={"sm"}>
          291
        </Text>
        <Text fontWeight={"400"} fontSize={"sm"} color={"#909090"}>
          Following
        </Text>
      </Flex>
      <Flex gap={2}>
        <Text fontWeight={"600"} fontSize={"sm"}>
          291
        </Text>
        <Text fontWeight={"400"} fontSize={"sm"} color={"#909090"}>
          Followers
        </Text>
      </Flex>
    </HStack>
  );
}
