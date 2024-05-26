import { VStack, HStack, Box, Flex } from "@chakra-ui/react";
import HeaderCard from "../../common/card/HeaderCard";
import BackgroundCardImage from "../../common/card/BackgroundImageCard";
import ImageCard from "../../common/card/ImageCard";
import HollowButton from "../button/HollowButton";
import BodyCard from "../../common/card/BodyCard";
import FooterCard from "./FooterCard";

export default function ProfileCard() {
  return (
    <Box
      w={"100%"}
      backgroundColor={"#262626"}
      p={5}
      borderRadius={"lg"}
      overflow={"hidden"}
      boxShadow={"md"}
      maxW={"sm"}
      h={"fit-content"}
    >
      <VStack w={"100%"} alignItems={"flex-start"} mb={10}>
        <HeaderCard text="My Profile" />
        <Box position={"relative"} width={"100%"}>
          <BackgroundCardImage />
          <Flex position={"absolute"} top={"70%"} left={"5%"}>
            <ImageCard src="../../../../public/images/bill.jpeg" />
          </Flex>
        </Box>
        <HStack ml={"auto"}>
          <HollowButton text="Edit Profile" />
        </HStack>
        <BodyCard />
        <FooterCard />
      </VStack>
    </Box>
  );
}
