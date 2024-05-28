import { Box, Tabs, TabList, TabPanel, Tab, TabPanels } from "@chakra-ui/react";
import AccountCard from "../components/common/card/AccountCard";

export default function FollowPage() {
  return (
    <Box
      color={"#FFF"}
      borderRight={"1px solid #3F3F3F"}
      borderLeft={"1px solid #3F3F3F"}
      w="100%"
      p={5}
      overflow="hidden"
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
          <TabPanel display={"flex"} flexDir={"column"} gap={"5"}>
            <AccountCard text="All for Jesus and the A #GoBraves" />
            <AccountCard text="catch me @ a concert or behind a bar" />
            <AccountCard text="All for Jesus and the A #GoBraves" />
          </TabPanel>
          <TabPanel display={"flex"} flexDir={"column"} gap={"5"}>
            <AccountCard text="All for Jesus and the A #GoBraves" />
            <AccountCard text="catch me @ a concert or behind a bar" />
            <AccountCard text="All for Jesus and the A #GoBraves" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
