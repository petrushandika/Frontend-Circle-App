import { VStack, Heading, Text } from "@chakra-ui/react";

export default function CardBody() {
  return (
    <VStack color={"#FFF"} display={"flex"} alignItems={"flex-start"}>
      <Heading as={"h4"} size={"md"} fontWeight={"700"}>
        ✨ Petrus Handika ✨
      </Heading>
      <Text color={"#909090"} fontSize={"sm"} fontWeight={"400"}>
        @petrushandika
      </Text>
      <Text fontSize={"sm"} fontWeight={"400"}>
        picked over by the worms, and weird fishes
      </Text>
    </VStack>
  );
}
