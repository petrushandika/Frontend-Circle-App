import { Button } from "@chakra-ui/react";
import { ButtonProps } from "../../../types/Types";

export default function GhostButton({
  width,
  height,
  fontSize,
  text,
  ...props
}: ButtonProps) {
  return (
    <Button
      width={width}
      height={height}
      fontSize={fontSize}
      {...props}
      color={"#FFF"}
      background={"transparent"}
      border={"none"}
      borderRadius={25}
      fontWeight={"500"}
      _hover={"none"}
    >
      {text}
    </Button>
  );
}
