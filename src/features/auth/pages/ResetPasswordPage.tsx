import { VStack, FormControl } from "@chakra-ui/react";
import HeaderCard from "../components/common/card/CardHeader";
import HollowInput from "../components/common/input/HollowInput";
import SolidButton from "../components/common/button/SolidButton";

export default function LoginPage() {
  return (
    <VStack
      height={"100vh"}
      alignItems={"flex-start"}
      justifyContent={"center"}
      color={"#FFF"}
      spacing={4}
      width={"400px"}
      margin="auto"
    >
      <HeaderCard
        color={"#04A51E"}
        text={"Circle"}
        fontWeight={600}
        fontSize={"2em"}
      />
      <HeaderCard
        color={"#FFF"}
        text={"Reset Password"}
        fontWeight={600}
        fontSize={"1.5em"}
      />
      <VStack width={"100%"} gap={3}>
        <FormControl>
          <HollowInput
            pl={3}
            borderRadius={7}
            placeholder="New Password"
            type="password"
          />
        </FormControl>
        <FormControl>
          <HollowInput
            pl={3}
            borderRadius={7}
            placeholder="Confirm New Password"
            type="password"
          />
        </FormControl>
        <SolidButton text="Create New Password" width={"100%"} />
      </VStack>
    </VStack>
  );
}
