import { VStack, HStack, Text, Image, Box } from "@chakra-ui/react";
import { BoxProps } from "@chakra-ui/react";
import { LoveIcon, CommentIcon } from "../components/common/icon/Icon";
import { Link } from "react-router-dom";
import ThreadCreate from "../components/common/thread/ThreadCreate";
import { useState } from "react";
import { Thread } from "../types/Types";

interface ThreadItemProps extends BoxProps {
  thread: Thread;
}

export default function ThreadItem({ thread }: ThreadItemProps) {
  const [showThreadCreate, setShowThreadCreate] = useState(false);

  const handleCommentIconClick = () => {
    setShowThreadCreate(!showThreadCreate);
  };

  return (
    <VStack borderBottom="1px solid #3F3F3F" width="100%" color={"#FFF"}>
      <HStack alignItems="flex-start" spacing={4} padding={5}>
        <Image src={thread.image} />
        <VStack align="flex-start" spacing={2} width="100%">
          <Text color="#FFF" fontSize="sm" fontWeight="300">
            {thread.content}
          </Text>
          {thread.image && (
            <Image src={thread.image} mt={2} borderRadius="md" />
          )}
          <HStack color="#FFF" gap={5}>
            <HStack>
              <LoveIcon />
              <Text>{thread.totalLikes}</Text>
            </HStack>
            <HStack>
              <Link to={`/threads/${thread.id}`} onClick={handleCommentIconClick}>
                <CommentIcon />
              </Link>
              <Text>{thread.totalReplies}</Text>
            </HStack>
          </HStack>
        </VStack>
      </HStack>
      <Box
        width="100%"
        display={showThreadCreate ? "block" : "none"}
        borderTop={"1px solid #3F3F3F"}
      >
        <ThreadCreate />
      </Box>
    </VStack>
  );
}
