import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/common/sidebar/Sidebar";
import Post from "../components/common/post/Post";
import RightPanel from "../components/common/rightpanel/RightPanel";
// import { Outlet } from 'react-router-dom';

const RootLayout: React.FC = () => {
  return (
    <Grid templateColumns="20% 50% 30%" bg="#1D1D1D">
      <GridItem w="100%">
        <Sidebar />
      </GridItem>
      <GridItem w="100%">
        <Post />
      </GridItem>
      <GridItem w="100%">
        <RightPanel />
      </GridItem>
    </Grid>
  );
};

export default RootLayout;
