import { VStack } from "@chakra-ui/react";
import ProfileCard from "../card/ProfileCard";
import PostItem from "../../common/post/PostItem";

interface PostProfileProps {
  id?: number | number[];
}

export default function PostProfile({ id }: PostProfileProps) {
  return (
    <VStack
      py={3}
      bg="#1D1D1D"
      height="100vh"
      w="100%"
      borderRight="1px solid #3F3F3F"
      borderLeft="1px solid #3F3F3F"
      overflowY="auto"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <VStack>
        <ProfileCard />
        <VStack>
          <PostItem id={id} />
        </VStack>
      </VStack>
    </VStack>
  );
}
