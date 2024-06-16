import { Heading } from "@chakra-ui/react";
import { CardProps } from "../../../types/Types";

export default function CardHeader({
  color = "#FFF",
  fontSize,
  fontWeight = "600",
  padding,
  text,
  ...props
}: CardProps) {
  return (
    <Heading
      width="100%"
      fontSize={fontSize}
      {...props}
      color={color}
      fontWeight={fontWeight}
      padding={padding}
    >
      {text}
    </Heading>
  );
}
