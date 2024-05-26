import React from "react";
import { Flex, Avatar, Text, Image, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";

interface PostProps {
  image: string;
  name: string;
  tag: string;
  time: string;
  content: string;
  imageUrl?: string;
  like: number;
  reply: number;
}

const Post: React.FC<PostProps> = ({ image, name, tag, time, content, imageUrl, like, reply }) => {
  return (
    <Flex color="#fff" justifyContent="center" p={5} border="1px solid #3F3F3F">
      <Avatar src={image} />
      <Flex flexDir="column" ml={3}>
        <HStack spacing={2} align="center">
          <Text fontWeight="500">{name}</Text>
          <Text fontWeight="300" color="#909090">
            @{tag}
          </Text>
          <Text fontWeight="300" color="#909090">
            • {time}
          </Text>
        </HStack>
        <Text mt={2} fontWeight="300">{content}</Text>
        {imageUrl && (
          <Image src={imageUrl} mt={2} borderRadius="md" />
        )}
        <HStack mt={2} spacing={4}>
          <HStack alignItems="center">
            <FontAwesomeIcon icon={faHeart} />
            <Text>{like}</Text>
          </HStack>
          <HStack alignItems="center">
            <FontAwesomeIcon icon={faComment} />
            <Text>{reply}</Text>
          </HStack>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Post;
