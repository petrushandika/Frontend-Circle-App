import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Grid,
  GridItem,
  Image
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
        <TabList>
          <Tab>Post</Tab>
          <Tab>Media</Tab>
        </TabList>
        <TabPanels>
          <TabPanel padding={0}>
            <Thread />
          </TabPanel>
          <TabPanel>
            <Grid
              h="300px"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={1}
            >
              <GridItem rowSpan={2} colSpan={1}>
                <Image
                  src="https://static.promediateknologi.id/crop/322x108:1607x972/0x0/webp/photo/p2/87/2023/11/04/Desain-tanpa-judul-3-2901679134.jpg"
                  alt="Image 1"
                  objectFit="cover"
                  h="100%"
                  w="100%"
                  borderRadius={2}
                />
              </GridItem>
              <GridItem colSpan={2}>
                <Image
                  src="https://disk.mediaindonesia.com/files/news/2024/02/07/Ayam%20Taliwang.jpg"
                  alt="Image 2"
                  objectFit="cover"
                  h="100%"
                  w="100%"
                  borderRadius={2}
                />
              </GridItem>
              <GridItem colSpan={2}>
                <Image
                  src="https://pidjar.com/wp-content/uploads/2018/09/sate_ayam__salah_satu_makanan__20180718123926.jpg"
                  alt="Image 3"
                  objectFit="cover"
                  h="100%"
                  w="100%"
                  borderRadius={2}
                />
              </GridItem>
              <GridItem colSpan={4}>
                <Image
                  src="https://awsimages.detik.net.id/community/media/visual/2022/02/03/masakan-indonesia.jpeg?w=1200"
                  alt="Image 4"
                  objectFit="cover"
                  h="100%"
                  w="100%"
                  borderRadius={2}
                />
              </GridItem>
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
