import {
  VStack,
  HStack,
  Heading,
  Avatar,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";

export default function SuggestCard() {
  return (
    <VStack
      bg="#262626"
      color="#fff"
      align="start"
      spacing={4}
      p={5}
      borderRadius="md"
      boxShadow="md"
      width="100%"
      maxW="sm"
    >
      <Heading fontSize="1rem" fontWeight="600">
        Suggested for you
      </Heading>
      <HStack spacing={4} width="100%" justify="space-between">
        <HStack spacing={3}>
          <Avatar src="../../../public/images/groubert.jpg" />
          <VStack align="start" spacing={0}>
            <Text fontWeight="300" fontSize=".9rem">
              Elizabeth Groubert
            </Text>
            <Text fontSize=".8rem" color="#909090">
              @elizabethgroubert
            </Text>
          </VStack>
        </HStack>
        <Flex alignItems="center">
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
            Follow
          </Button>
        </Flex>
      </HStack>
      <HStack spacing={4} width="100%" justify="space-between">
        <HStack spacing={3}>
          <Avatar src="../../../public/images/groubert.jpg" />
          <VStack align="start" spacing={0}>
            <Text fontWeight="300" fontSize=".9rem">
              Elizabeth Groubert
            </Text>
            <Text fontSize=".8rem" color="#909090">
              @elizabethgroubert
            </Text>
          </VStack>
        </HStack>
        <Flex alignItems="center">
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
            Follow
          </Button>
        </Flex>
      </HStack>
      <HStack spacing={4} width="100%" justify="space-between">
        <HStack spacing={3}>
          <Avatar src="../../../public/images/groubert.jpg" />
          <VStack align="start" spacing={0}>
            <Text fontWeight="300" fontSize=".9rem">
              Elizabeth Groubert
            </Text>
            <Text fontSize=".8rem" color="#909090">
              @elizabethgroubert
            </Text>
          </VStack>
        </HStack>
        <Flex alignItems="center">
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
            Follow
          </Button>
        </Flex>
      </HStack>
      <HStack spacing={4} width="100%" justify="space-between">
        <HStack spacing={3}>
          <Avatar src="../../../public/images/groubert.jpg" />
          <VStack align="start" spacing={0}>
            <Text fontWeight="300" fontSize=".9rem">
              Elizabeth Groubert
            </Text>
            <Text fontSize=".8rem" color="#909090">
              @elizabethgroubert
            </Text>
          </VStack>
        </HStack>
        <Flex alignItems="center">
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
            Follow
          </Button>
        </Flex>
      </HStack>
      <HStack spacing={4} width="100%" justify="space-between">
        <HStack spacing={3}>
          <Avatar src="../../../public/images/groubert.jpg" />
          <VStack align="start" spacing={0}>
            <Text fontWeight="300" fontSize=".9rem">
              Elizabeth Groubert
            </Text>
            <Text fontSize=".8rem" color="#909090">
              @elizabethgroubert
            </Text>
          </VStack>
        </HStack>
        <Flex alignItems="center">
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
            Follow
          </Button>
        </Flex>
      </HStack>
    </VStack>
  );
}
