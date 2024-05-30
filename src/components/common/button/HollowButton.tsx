import { Button } from "@chakra-ui/react";
import { ButtonProps } from "../../../types/Types";

export default function HollowButton({
  width,
  height,
  fontSize,
  text,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <Button
      width={width}
      height={height}
      fontSize={fontSize}
      onClick={onClick}
      {...props}
      color={"#FFF"}
      background={"transparent"}
      border={"1px solid #FFF"}
      borderRadius={25}
      fontWeight={"500"}
      _hover={"none"}
    >
      {text}
    </Button>
  );
}
