import { HStack, VStack, Text, Image, Box } from "@chakra-ui/react";
import ImageCard from "../card/CardImage";
import { LoveIcon, CommentIcon } from "../icon/Icon";
import { Link } from "react-router-dom";
import { ThreadData } from "../../../types/Types";
import ThreadCreate from "./ThreadCreate";
import { useState } from "react";

interface ThreadItemProps {
  thread: ThreadData;
}

export default function ThreadItem({ thread }: ThreadItemProps) {
  const [showThreadCreate, setShowThreadCreate] = useState(false);

  const toggleThreadCreate = () => {
    setShowThreadCreate((prevState) => !prevState);
  };

  return (
    <VStack width="100%" borderBottom="1px solid #3F3F3F">
      <HStack alignItems="flex-start" spacing={4} padding={5}>
        <ImageCard src={thread.image} />
        <VStack align="flex-start" spacing={2} width="100%">
          <HStack>
            <Text color="#FFF" fontSize="sm" fontWeight={400}>
              {thread.name}
            </Text>
            <Text color="#909090" fontSize="sm" fontWeight={400}>
              @{thread.tag} • {thread.time}
            </Text>
          </HStack>
          <Text color="#FFF" fontSize="sm" fontWeight={300}>
            {thread.content}
          </Text>
          {thread.imageUrl && (
            <Image src={thread.imageUrl} mt={2} borderRadius="md" />
          )}
          <HStack color="#FFF">
            <HStack>
              <LoveIcon />
              <Text>{thread.like}</Text>
            </HStack>
            <HStack>
              <Link to={`/thread/${thread.id}`} onClick={toggleThreadCreate}>
                <CommentIcon />
              </Link>
              <Text>{thread.reply}</Text>
            </HStack>
          </HStack>
        </VStack>
      </HStack>
      {showThreadCreate && (
        <Box width="100%" borderTop="1px solid #3F3F3F">
          <ThreadCreate />
        </Box>
      )}
    </VStack>
  );
}
