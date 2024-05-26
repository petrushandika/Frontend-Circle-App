import { Button } from "@chakra-ui/react";

interface SolidButtonProps {
  text: string;
}

export default function SolidButton({ text }: SolidButtonProps) {
  return (
    <Button
      width={"100%"}
      color={"#FFF"}
      backgroundColor={"#04A51E"}
      borderRadius={25}
      _hover={{ backgroundColor: "none" }}
    >
      {text}
    </Button>
  );
}
