import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/common/sidebar/Sidebar";
import RightPanel from "../components/common/rightpanel/RightPanel";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function RootLayout() {
  const refetch = () => { };

  const currentUser = useSelector((state: RootState) => state.auth.user);
  console.log(currentUser);

  if (!currentUser.id) {
    console.log("NO USER LOGGING OUT");
    
    return <Navigate to="/auth/login" />;
  }

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
