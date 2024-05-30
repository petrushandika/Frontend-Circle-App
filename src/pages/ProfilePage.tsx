import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import CardProfile from "../components/common/card/CardProfile";
import Thread from "../components/common/thread/Thread";

export default function ProfilePage() {
  return (
    <Box
      color={"#FFF"}
      borderRight={"1px solid #3F3F3F"}
      borderLeft={"1px solid #3F3F3F"}
      width={"100%"}
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
      <CardProfile />
      <Tabs isFitted colorScheme="green">
        <TabList mb="1em">
          <Tab>Post</Tab>
          <Tab>Media</Tab>
        </TabList>
        <TabPanels>
          <TabPanel padding={0}>
            <Thread />
          </TabPanel>
          <TabPanel>
            <Text>Test</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
