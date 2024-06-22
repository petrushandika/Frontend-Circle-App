import { VStack, Box } from "@chakra-ui/react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
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

interface CardProfileProps {
  refetch: () => void;
}

export default function CardProfile({ refetch }: CardProfileProps) {
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

        {users.map((user) => (
          <CardBody refetch={refetch} key={user.id} user={user} />
        ))}
        {users.map((user) => (
          <CardFooter key={user.id} user={user} />
        ))}
      </VStack>
    </Box>
  );
}
