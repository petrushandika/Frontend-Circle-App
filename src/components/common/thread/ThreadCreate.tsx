import { HStack, Box, Image, Input } from "@chakra-ui/react";
import GhostInput from "../input/GhostInput";
import SolidButton from "../button/SolidButton";

export default function ThreadCreate() {
  return (
    <HStack
      width={"100%"}
      justifyContent={"space-between"}
      padding={5}
    >
      <HStack>
        <GhostInput />
      </HStack>
      <HStack>
        <Box position="relative" cursor="pointer" width={"100%"}>
          <Image
            src="https://cdn-icons-png.flaticon.com/128/3039/3039527.png"
            alt="Upload Icon"
            boxSize={6}
          />
          <Input
            type="file"
            accept="image/*"
            position="absolute"
            top={0}
            left={0}
            opacity={0}
            width="100%"
            cursor="pointer"
          />
        </Box>
        <SolidButton
          text="Post"
          width={"100%"}  
          height={"33px"}
          fontSize={".9rem"}
        />
      </HStack>
    </HStack>
  );
}
