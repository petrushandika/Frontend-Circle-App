import { Box, VStack, HStack, Flex } from "@chakra-ui/react";
import HeaderCard from "../../common/card/HeaderCard";
import BackgroundCardImage from "../../common/card/BackgroundImageCard";
import ImageCard from "../../common/card/ImageCard";
import HollowButton from "../button/HollowButton";
import BodyCard from "../../common/card/BodyCard";
import FooterCard from "./FooterCard";

export default function ProfileCard() {
  return (
    <Box w="100%" p={5} overflow="hidden" maxW="100%" h="fit-content">
      <VStack w="100%" alignItems="flex-start">
        <HeaderCard text="Profil Saya" />
        <Box position="relative" w="100%">
          <BackgroundCardImage />
          <Flex position="absolute" top="70%" left="5%">
            <ImageCard src="../../../../public/images/bill.jpeg" />
          </Flex>
        </Box>
        <HStack ml="auto">
          <HollowButton text="Edit Profil" />
        </HStack>
        <BodyCard />
        <FooterCard />
      </VStack>
    </Box>
  );
}
