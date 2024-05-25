import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/common/Sidebar";
import PostItem from "../components/common/PostItem";
import RightPanel from "../components/common/RightPanel";

const RootLayout: React.FC = () => {
  return (
    <Grid templateColumns="20% 50% 30%" bg="#1D1D1D">
      <GridItem w="100%" as="aside" minHeight={{ lg: "100vh" }}>
        <Sidebar />
      </GridItem>
      <GridItem w="100%">
        <PostItem />
      </GridItem>
      <GridItem w="100%">
        <RightPanel />
      </GridItem>
    </Grid>
  );
};

export default RootLayout;
