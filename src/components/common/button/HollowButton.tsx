import { Button } from "@chakra-ui/react";

interface HollowButtonProps {
  text: string;
}

export default function HollowButton({text}: HollowButtonProps) {
  return (
    <Button
      width={"100%"}
      maxWidth={"100px"}
      height={"33px"}
      color={"#FFF"}
      backgroundColor={"transparent"}
      border={"1px solid #FFF"}
      borderRadius={25}
      _hover={{ backgroundColor: "none" }}
      fontWeight={"500"}
      fontSize={"14px"}
    >
      {text}
    </Button>
  );
}
