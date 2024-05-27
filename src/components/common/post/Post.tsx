import { VStack } from "@chakra-ui/react";
import PostItem from "../../common/post/PostItem";
import CreatePost from "./CreatePost";

export default function Post() {
  return (
    <VStack
      borderRight={"1px solid #3F3F3F"}
      borderLeft={"1px solid #3F3F3F"}
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
      <PostItem />
    </VStack>
  );
}
