import { VStack, Box, Image, Flex, HStack } from "@chakra-ui/react";
import CardHeader from "./CardHeader";
import ImageCard from "./CardImage";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import EditProfile from "../modals/EditProfile";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../../configs/Api";
import { User } from "../../../types/User";
import useAuth from "../../../features/auth/hooks/useAuth";

async function getUsers(userId: number): Promise<User[]> {
  try {
    const response = await api.get(`/users/${userId}`);
    if (Array.isArray(response.data)) {
      return response.data;
    } else if (response.data && typeof response.data === "object") {
      return [response.data];
    } else {
      console.error("Unexpected response format:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
}

export default function CardProfile() {
  const { user } = useAuth();

  const userId = user.id;

  const { data: users = [] } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => getUsers(Number(userId)),
  });

  return (
    <Box
      w="100%"
      padding={5}
      overflow="hidden"
      maxW="100%"
      h="fit-content"
      background=""
      borderRadius={5}
    >
      <VStack>
        <CardHeader text="My Profile" fontSize="1rem" />
        <Box position="relative" w="100%">
          <Image
            src="https://images.pexels.com/photos/552789/pexels-photo-552789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            width="100%"
            height="100px"
            objectFit="cover"
            borderRadius={5}
          />
          <Flex position="absolute" top="70%" left="5%">
            <ImageCard src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611731.jpg" />
          </Flex>
        </Box>
        <HStack ml="auto">
          <EditProfile />
        </HStack>
        {users.map((user) => (
          <CardBody key={user.id} user={user} />
        ))}
        {users.map((user) => (
          <CardFooter key={user.id} user={user} />
        ))}
      </VStack>
    </Box>
  );
}
