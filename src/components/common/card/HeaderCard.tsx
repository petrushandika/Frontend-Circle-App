import { Heading } from "@chakra-ui/react";

interface HeaderCardProps {
  text: string;
}

export default function HeaderCard ({ text }: HeaderCardProps) {
  return (
    <Heading
      as={"h4"}
      size={"sm"}
      color={"#FFF"}
      fontWeight={"600"}
      pb={"1"}
    >
      {text}
    </Heading>
  );
}
