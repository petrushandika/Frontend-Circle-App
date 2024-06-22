import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/common/sidebar/Sidebar";
import RightPanel from "../components/common/rightpanel/RightPanel";
import { Outlet } from "react-router-dom";

function RootLayout() {
  const refetch = () => { };

  return (
    <Grid templateColumns="20% 50% 30%" bg="#1D1D1D">
      <GridItem w="100%">
        <Sidebar refetch={refetch} />
      </GridItem>
      <GridItem w="100%">
        <Outlet />
      </GridItem>
      <GridItem w="100%">
        <RightPanel />
      </GridItem>
    </Grid>
  );
}

export default RootLayout;
