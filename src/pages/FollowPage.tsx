import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  VStack,
} from "@chakra-ui/react";
import CardAccount from "../components/common/card/CardAccount";
import { useEffect, useState } from "react";
import { api } from "../configs/Api";
import { User } from "../types/User";

export default function FollowPage() {
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
    <Box
      color={"#FFF"}
      borderRight={"1px solid #3F3F3F"}
      borderLeft={"1px solid #3F3F3F"}
      width={"100%"}
      padding={5}
      overflow={"hidden"}
      height={"100vh"}
      overflowY="auto"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <Tabs isFitted colorScheme="green">
        <TabList mb="1em">
          <Tab>Followers</Tab>
          <Tab>Following</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack gap={5}>
              {users.map((user) => (
                <CardAccount key={user.id} user={user} />
              ))}
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack gap={5}>
              {users.map((user) => (
                <CardAccount key={user.id} user={user} />
              ))}
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
