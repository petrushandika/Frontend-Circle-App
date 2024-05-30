import { Button } from "@chakra-ui/react";
import { ButtonProps } from "../../../types/Types";

export default function SolidButton({
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
      background={"#04A51E"}
      border={"none"}
      borderRadius={25}
      fontWeight={"500"}
      _hover={{ background: "#04A51E" }}
    >
      {text}
    </Button>
  );
}
