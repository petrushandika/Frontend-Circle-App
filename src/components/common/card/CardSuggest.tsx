import { VStack, Box, Text } from "@chakra-ui/react";
import HeaderCard from "./CardHeader";
import CardAccount from "./CardAccount";
import { api } from "../../../configs/Api";
import { User } from "../../../types/User";
import { useEffect, useState } from "react";

export default function SuggestCard() {
  const [users, setUsers] = useState<User[]>([]);

  async function getUsers() {
    try {
      const response = await api.get("/users");
      console.log("API response:", response);
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  const refetch = () => {
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Box w="100%" padding={5} maxW="100%" h="fit-content" borderRadius={5}>
      <HeaderCard text="Suggested for you" fontSize="1rem" />
      <Box
        overflowY="auto"
        maxH="200px"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
        mt={5}
      >
        <VStack gap={5}>
          {users.length > 0 ? (
            users.map((user) => <CardAccount key={user.id} user={user} refetch={refetch} />)
          ) : (
            <Text>No suggestions available</Text>
          )}
        </VStack>
      </Box>
    </Box>
  );
}
