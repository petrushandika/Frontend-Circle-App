import { VStack, Text, Image, Flex, Box, HStack } from "@chakra-ui/react";
import CardHeader from "./CardHeader";
import { User } from "../../../types/User";
import ImageCard from "./CardImage";
import EditProfile from "../modals/EditProfile";

interface UserProps {
  user: User;
  refetch: () => void;
}

export default function BodyCard({ user, refetch }: UserProps) {
  return (
    <VStack width={"100%"} align={"flex-start"} color={"#FFF"}>
      <Box position="relative" w="100%">
        <Image
          src="https://images.pexels.com/photos/552789/pexels-photo-552789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          width="100%"
          height="100px"
          objectFit="cover"
          borderRadius={5}
        />
        <Flex position="absolute" top="70%" left="5%">
          <ImageCard src={user.avatar} />
        </Flex>
      </Box>
      <HStack ml="auto">
        <EditProfile refetch={refetch} />
      </HStack>
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
