import { HStack, VStack, Text } from "@chakra-ui/react";
import CardImage from "./CardImage";
import HollowButton from "../button/HollowButton";
import { User } from "../../../types/User";

interface UserProps {
  user: User;
}

export default function CardAccount({ user }: UserProps) {
  const avatarUrl = user.avatar;

  return (
    <HStack width={"100%"} justify={"space-between"}>
      <HStack gap={3}>
        <CardImage src={avatarUrl} />
        <VStack align="start" gap={0}>
          <Text fontSize={"sm"} fontWeight={"500"} color={"#FFF"}>
            {user.fullName}
          </Text>
          <Text color={"#909090"} fontSize={"sm"} fontWeight={"400"}>
            @{user.username}
          </Text> 
        </VStack>
      </HStack>
      <HStack>
        <HollowButton
          text="Follow"
          width={"100%"}
          height={"33px"}
          fontSize={".9rem"}
        />
      </HStack>
    </HStack>
  );
}
