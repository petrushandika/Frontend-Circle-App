import { VStack, HStack, Text, Box, FormControl } from "@chakra-ui/react";
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
        fontSize={"1.5em"}
      />
      <HeaderCard
        color={"#FFF"}
        text={"Login to Circle"}
        fontWeight={600}
        fontSize={"2em"}
      />
      <VStack width={"100%"} gap={3}>
        <FormControl>
          <HollowInput pl={3} borderRadius={7} placeholder="Email/Username" />
        </FormControl>
        <FormControl>
          <HollowInput
            pl={3}
            borderRadius={7}
            placeholder="Password"
            type="password"
          />
        </FormControl>
        <Box width="100%" textAlign="end">
          <Text>Forgot Password?</Text>
        </Box>
        <SolidButton text="Login" width={"100%"} />
      </VStack>
      <HStack>
        <Text>Don't have an account?</Text>
        <Text color={"#04A51E"}>Sign Up</Text>
      </HStack>
    </VStack>
  );
}
