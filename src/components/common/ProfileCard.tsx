import {
  Heading,
  Image,
  Button,
  Text,
  VStack,
  HStack,
  Box,
  Flex,
  Avatar,
} from "@chakra-ui/react";

export default function Card() {
  return (
    <VStack
      bg="#262626"
      color="#fff"
      p={5}
      spacing={4}
      align="start"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      maxW="sm"
    >
      <Heading fontSize="1rem" fontWeight="600">
        My Profile
      </Heading>
      <Box position="relative" width="100%">
        <Image
          src="../../../public/images/sunset.jpg"
          alt="Profile Background"
          width="100%"
          height="100px"
          objectFit="cover"
          borderRadius={5}
        />
        <Flex position="absolute" top="60%" left="5%">
          <Avatar
            src="../../../public/images/elizabeth.jpeg"
            size="lg"
            border="4px solid #1D1D1D"
          />
        </Flex>
      </Box>
      <Button
        colorScheme="transparant"
        alignSelf="flex-end"
        variant="outline"
        borderRadius="25px"
        w="7.5rem"
        h="2rem"
        fontSize=".9rem"
        fontWeight="500"
      >
        Edit Profile
      </Button>
      <VStack align="start" spacing={1}>
        <Heading size="md" fontWeight="600">
          ✨Petrus Handika✨
        </Heading>
        <Text size="xs" fontWeight="300" color="#909090">
          @petrushandika
        </Text>
        <Text fontWeight="300">picked over by the worms, and weird fishes</Text>
      </VStack>
      <HStack spacing={5}>
        <HStack>
          <Text fontWeight="500">291</Text>
          <Text size="xs" fontWeight="300" color="#909090">
            Following
          </Text>
        </HStack>
        <HStack>
          <Text fontWeight="500">90</Text>
          <Text size="xs" fontWeight="300" color="#909090">
            Followers
          </Text>
        </HStack>
      </HStack>
    </VStack>
  );
}
