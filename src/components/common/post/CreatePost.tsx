import {
  Heading,
  VStack,
  HStack,
  Input,
  Box,
  Image,
  Button,
} from "@chakra-ui/react";
import ImageCard from "../../common/card/ImageCard";

export default function CreatePost() {
  return (
    <VStack
      alignItems={"flex-start"}
      width={"100%"}
      p={5}
      borderBottom={"1px solid #3F3F3F"}
    >
      <Heading
        as="h4"
        size="md"
        color={"#FFF"}
        fontWeight={"500"}
        pt={3}
        pb={3}
      >
        Home
      </Heading>
      <HStack width={"100%"} justifyContent={"space-between"}>
        <HStack>
          <ImageCard src="../../../../public/images/curry.jpeg" />
          <Input
            placeholder="What's on your mind?"
            flex="1"
            outline="none"
            border="none"
            mr={4}
            _placeholder={{ color: "#909090" }}
          />
        </HStack>
        <HStack>
          <Box position="relative" mr={4} cursor="pointer">
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
          <Button backgroundColor="#04A51E" color="#fff" borderRadius={25}>
            Post
          </Button>
        </HStack>
      </HStack>
    </VStack>
  );
}
