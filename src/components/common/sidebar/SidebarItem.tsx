import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface SidebarItemProps {
  text: string;
  icon: IconType;
}

export default function SidebarItem({ text, icon }: SidebarItemProps) {
  return (
    <HStack color={"#FFF"} width={"100%"} gap={4}>
      <Icon as={icon} boxSize={6} />
      <Text>{text}</Text>
    </HStack>
  );
}
