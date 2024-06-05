import { VStack, Box, Image, Flex, HStack } from "@chakra-ui/react";
import CardHeader from "./CardHeader";
import ImageCard from "./CardImage";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import EditProfile from "../modals/EditProfile";

export default function ProfileCard() {
  return (
    <Box w="100%" padding={5} overflow="hidden" maxW="100%" h="fit-content" background={""} borderRadius={5}>
      <VStack>
        <CardHeader text="My Profile" fontSize={"1rem"} />
        <Box position="relative" w="100%">
          <Image
            src="https://images.pexels.com/photos/552789/pexels-photo-552789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            width={"100%"}
            height={"100px"}
            objectFit={"cover"}
            borderRadius={5}
          />
          <Flex position="absolute" top="70%" left="5%">
            <ImageCard src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611731.jpg" />
          </Flex>
        </Box>
        <HStack ml="auto">
          <EditProfile/>
        </HStack>
        <CardBody />
        <CardFooter />
      </VStack>
    </Box>
  );
}
