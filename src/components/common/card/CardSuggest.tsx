import { VStack, Box } from "@chakra-ui/react";
import HeaderCard from "./CardHeader";
import CardAccount from "./CardAccount";
import { useEffect, useState } from "react";
import { api } from "../../../configs/Api";
import { User } from "../../../types/User";

export default function SuggestCard() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/users");
        if (Array.isArray(response.data.users)) {
          setUsers(response.data.users);
        } else {
          console.error("Response is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchData();
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
          {users.map((user) => (
            <CardAccount key={user.id} user={user} />
          ))}
        </VStack>
      </Box>
    </Box>
  );
}
