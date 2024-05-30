import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import CardAccount from "../components/common/card/CardAccount";

export default function FollowPage() {
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
            <CardAccount />
          </TabPanel>
          <TabPanel>
            <CardAccount />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
