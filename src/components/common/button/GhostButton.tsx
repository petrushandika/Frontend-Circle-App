import { Button } from "@chakra-ui/react";

interface GhostButtonProps {
  text: string;
}

export default function GhostButton({ text }: GhostButtonProps) {
  return (
    <Button
      width={"100%"}
      color={"#FFF"}
      backgroundColor={"transparent"}
      borderRadius={25}
      _hover={{ backgroundColor: "none" }}
    >
      {text}
    </Button>
  );
}
