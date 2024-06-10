import { VStack, Text } from "@chakra-ui/react";
import CardHeader from "./CardHeader";
import { User } from "../../../types/User";

interface UserProps {
  user: User;
}

export default function BodyCard({ user }: UserProps) {
  return (
    <VStack width={"100%"} align={"flex-start"} color={"#FFF"}>
      <CardHeader text={user.fullName} fontSize={"1.5rem"} />
      <Text color={"#909090"} fontSize={"sm"} fontWeight={"400"}>
        @{user.username}
      </Text>
      <Text fontSize={"sm"} fontWeight={"400"}>
        {user.bio}
      </Text>
    </VStack>
  );
}
