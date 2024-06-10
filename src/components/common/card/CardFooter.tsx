import { Flex, HStack, Text } from "@chakra-ui/react";
import { User } from "../../../types/User";

interface UserProps {
  user: User;
}

export default function FooterCard({ user }: UserProps) {
  return (
    <HStack width={"100%"} alignItems={"flex-start"} color={"#FFF"}>
      <Flex gap={2}>
        <Text fontWeight={"600"} fontSize={"sm"}>
          {user.following.length}
        </Text>
        <Text fontWeight={"400"} fontSize={"sm"} color={"#909090"}>
          Following
        </Text>
      </Flex>
      <Flex gap={2}>
        <Text fontWeight={"600"} fontSize={"sm"}>
          {user.followers.length}
        </Text>
        <Text fontWeight={"400"} fontSize={"sm"} color={"#909090"}>
          Followers
        </Text>
      </Flex>
    </HStack>
  );
}
