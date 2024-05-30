import { VStack, Text } from "@chakra-ui/react";
import HeaderCard from "./CardHeader";

export default function BodyCard() {
  return (
    <VStack width={"100%"} align={"flex-start"} color={"#FFF"}>
      <HeaderCard text="Petrus Handika✌️" fontSize={"1.5rem"} />
      <Text color={"#909090"} fontSize={"sm"} fontWeight={"400"}>
        @petrushandika
      </Text>
      <Text fontSize={"sm"} fontWeight={"400"}>
        picked over by the worms, and weird fishes
      </Text>
    </VStack>
  );
}
