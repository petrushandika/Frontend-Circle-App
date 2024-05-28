import {
  // Heading,
  VStack,
  HStack,
  Input,
  Box,
  Image,
} from "@chakra-ui/react";
import ImageCard from "../../common/card/ImageCard";
import SolidButton from "../button/SolidButton";

export default function CreatePost() {
  return (
    <VStack
      alignItems={"flex-start"}
      width={"100%"}
      p={5}
      borderBottom={"1px solid #3F3F3F"}
    >
      {/* <Heading
        as="h4"
        size="md"
        color={"#FFF"}
        fontWeight={"500"}
        pt={3}
        pb={3}
      >
        Home
      </Heading> */}
      <HStack width={"100%"} justifyContent={"space-between"}>
        <HStack width={"100%"}>
          <ImageCard src="../../../../public/images/curry.jpeg" />
          <Input
            ml={3}
            color={"#FFF"}
            variant="unstyled"
            placeholder="What's on your mind?"
            flex="1"
            outline="none"
            border="none"
            mr={4}  
            _placeholder={{ color: "#909090" }}
          />
        </HStack>
        <HStack>
          <Box position="relative" mr={4} cursor="pointer" width={"100%"}>
            <Image src="/images/upload.png" alt="Upload Icon" boxSize={7} />
            <Input
              type="file"
              accept="image/*"
              position="absolute"
              top={0}
              left={0}
              opacity={0}
              width="100%"
              height="100%"
              cursor="pointer"
            />
          </Box>
          <SolidButton text="Post" />
        </HStack>
      </HStack>
    </VStack>
  );
}
