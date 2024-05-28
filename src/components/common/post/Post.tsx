import { VStack } from "@chakra-ui/react";
import PostItem from "../../common/post/PostItem";
import CreatePost from "../post/CreatePost";

export default function Post() {
  return (
    <VStack
      height="100vh"
      w="100%"
      overflowY="auto"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <CreatePost />
      <VStack>
        <PostItem />
        <CreatePost />
      </VStack>
    </VStack>
  );
}
