import { HStack, VStack, Text } from "@chakra-ui/react";
import CardImage from "./CardImage";
import HollowButton from "../button/HollowButton";

export default function AccountCard() {
  return (
    <HStack width={"100%"} justify={"space-between"}>
      <HStack gap={3}>
        <CardImage src="../../../../public/images/bill.jpeg" />
        <VStack gap={0}>
          <Text fontSize={"sm"} fontWeight={"500"} color={"#FFF"}>
            Petrus Handika
          </Text>
          <Text color={"#909090"} fontSize={"sm"} fontWeight={"400"}>
            @petrushandika
          </Text>
        </VStack>
      </HStack>
      <HStack>
        <HollowButton
          text="Follow"
          width={"100%"}
          height={"33px"}
          fontSize={".9rem"}
        />
      </HStack>
    </HStack>
  );
}
