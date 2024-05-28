import { Flex } from "@chakra-ui/react";
import PostProfile from "../components/common/post/PostProfile";

export default function ProfilePage() {
  return (
    <Flex>
      <PostProfile id={[5, 4]} />
    </Flex>
  );
}
