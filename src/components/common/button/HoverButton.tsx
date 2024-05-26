import { Button } from "@chakra-ui/react";

interface HoverButtonProps {
  text: string;
}

export default function HoverButton({ text }: HoverButtonProps) {
  return (
    <Button
      width={"100%"}
      color={"#FFF"}
      backgroundColor="#04A51E"
      borderRadius={25}
      _hover={{ backgroundColor: "#005E0E" }}
    >
      {text}
    </Button>
  );
}
