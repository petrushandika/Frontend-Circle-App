import { HStack, Input } from "@chakra-ui/react";
import CardImage from "../card/CardImage";

export default function GhostInput() {
  return (
    <HStack width={"100%"} color={"#FFF"} alignItems={"center"} gap={5}>
      <CardImage />
      <Input placeholder="What is happening?!" variant="unstyled" fontSize={".9rem"} width={"100%"} />
    </HStack>
  );
}
