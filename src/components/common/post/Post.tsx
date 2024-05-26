import { VStack } from "@chakra-ui/react";
import PostItem from "../../common/post/PostItem";

export default function Post() {
  return (
    <VStack
      borderRight={"1px solid #3F3F3F"}
      borderLeft={"1px solid #3F3F3F"}
    >
      <PostItem />
    </VStack>
  );
}
