import { HStack, VStack, Text, Spacer } from "@chakra-ui/react";
import ImageCard from "../../common/card/ImageCard";
import HollowButton from "../button/HollowButton";

export default function AccountCard() {
  return (
    <HStack w={"100%"} justifyContent={"flex-start"}>
      <HStack>
        <ImageCard src="../../../../public/images/bill.jpeg" />
        <VStack color={"#FFF"} alignItems={"flex-start"} spacing={0}>
          <Text fontSize={"sm"} fontWeight={"400"}>
            Petrus Handika
          </Text>
          <Text color={"#909090"} fontSize={"sm"} fontWeight={"400"}>
            @petrushandika
          </Text>
        </VStack>
      </HStack>
      <Spacer />
      <HollowButton text="Follow" />
    </HStack>
  );
}
