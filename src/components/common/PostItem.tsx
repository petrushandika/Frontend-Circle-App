import React, { useRef } from "react";
import Post from "./Post";
import data from "../../data/data.json";
import {
  Flex,
  Heading,
  Avatar,
  Input,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";

interface PostData {
  id: number;
  image: string;
  name: string;
  tag: string;
  time: string;
  content: string;
  imageUrl?: string;
  like: number;
  reply: number;
}

const PostList: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Flex flexDir="column">
      <Flex
        flexDir="column"
        borderRight="1px solid #3F3F3F"
        borderLeft="1px solid #3F3F3F"
        px={5}
        py={7}
      >
        <Heading as="h4" size="md" color="#fff" fontWeight="500" mx={1}>
          Home
        </Heading>
        <Flex align="center" mt={5}>
          <Avatar src="../../../public/images/elizabeth.jpeg" mr={4} />
          <Input
            placeholder="What's on your mind?"
            flex="1"
            outline="none"
            border="none"
            mr={4}
            _placeholder={{ color: '#909090' }}
          />
          <Box
            position="relative"
            mr={4}
            onClick={handleImageClick}
            cursor="pointer"
          >
            <Image
              src="../../../public/images/upload.png"
              alt="Upload Icon"
              boxSize={10}
            />
            <Input
              type="file"
              onChange={handleFileChange}
              ref={fileInputRef}
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
        </Flex>
      </Flex>
      <Flex flexDir="column">
        {data.map((post: PostData) => (
          <Post
            key={post.id}
            image={post.image}
            name={post.name}
            tag={post.tag}
            time={post.time}
            content={post.content}
            imageUrl={post.imageUrl}
            like={post.like}
            reply={post.reply}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default PostList;
