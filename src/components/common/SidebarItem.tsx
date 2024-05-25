import { Flex, Text, Icon, Link, Menu, MenuButton } from "@chakra-ui/react";
import { IconType } from "react-icons";
import React from "react";

interface SidebarItemProps {
  navSize: "small" | "large";
  title: string;
  icon: IconType;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  navSize,
  title,
  icon,
  active,
}) => {
  return (
    <Flex mt={15} flexDir="column" w="100%">
      <Menu placement="right">
        <Link
          p={3}
          borderRadius={8}
          _hover={{ textDecoration: "none", backgroundColor: "#04A51E" }}
          w={navSize === "large" ? "100%" : undefined}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon
                as={icon}
                fontSize="xl"
                color={active ? "#82AADD" : "#fff"}
              />
              <Text ml={2} display={navSize === "small" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

export default SidebarItem;
