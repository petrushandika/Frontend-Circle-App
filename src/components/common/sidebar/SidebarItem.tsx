import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface SidebarItemProps {
  text: string;
  icon: IconType;
  to: string;
}

export default function SidebarItem({ text, icon, to }: SidebarItemProps) {
  return (
    <Link to={to}>
      <HStack
        color={"#FFF"}
        width={"100%"}
        gap={4}
        p={2}
      >
        <Icon as={icon} boxSize={6} />
        <Text>{text}</Text>
      </HStack>
    </Link>
  );
}
