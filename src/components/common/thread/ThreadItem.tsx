import { HStack, VStack, Text, Image, Box } from "@chakra-ui/react";
import ImageCard from "../card/CardImage";
import { LoveIcon, CommentIcon } from "../icon/Icon";
import { Link } from "react-router-dom";
import { Thread } from "../../../types/Thread";
import ThreadCreate from "./ThreadCreate";
import { useState } from "react";

interface ThreadItemProps {
  thread: Thread;
  refetch: () => void;
}

export default function ThreadItem({ thread, refetch }: ThreadItemProps) {
  const [showThreadCreate, setShowThreadCreate] = useState(false);

  const toggleThreadCreate = () => {
    setShowThreadCreate((prevState) => !prevState);
  };

  return (
    <VStack width="100%" borderBottom="1px solid #3F3F3F" alignItems={"flex-start"}>
      <HStack alignItems="flex-start" spacing={4} padding={5}>
        <ImageCard src={thread.user.avatar} />
        <VStack align="flex-start" spacing={2} width="100%">
          <HStack>
            <Text color="#FFF" fontSize="sm" fontWeight={400}>
              {thread.user.fullName}
            </Text>
            <Text color="#909090" fontSize="sm" fontWeight={400}>
            @{thread.user.username} • {new Date(thread.createdAt).toLocaleString()}
            </Text>
          </HStack>
          <Text color="#FFF" fontSize="sm" fontWeight={300}>
            {thread.content}
          </Text>
          {thread.image && (
            <Image src={thread.image} mt={2} borderRadius="md" />
          )}
          <HStack color="#FFF">
            <HStack>
              <LoveIcon />
              <Text>{thread.totalLikes}</Text>
            </HStack>
            <HStack>
              <Link to={`/thread/${thread.id}`} onClick={toggleThreadCreate}>
                <CommentIcon />
              </Link>
              <Text>{thread.totalReplies}</Text>
            </HStack>
          </HStack>
        </VStack>
      </HStack>
      {showThreadCreate && (
        <Box width="100%" borderTop="1px solid #3F3F3F">
          <ThreadCreate refetch={refetch} />
        </Box>
      )}
    </VStack>
  );
}
