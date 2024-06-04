  import { HStack, VStack, Text, Image, Box } from "@chakra-ui/react";
  import ImageCard from "../card/CardImage";
  import { LoveIcon, CommentIcon } from "../icon/Icon";
  import { Link } from "react-router-dom";
  import { ThreadData } from "../../../types/Types";
  import ThreadCreate from "./ThreadCreate";
  import { useState } from "react";

  interface ThreadItemProps extends ThreadData {
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

  export default function ThreadItem(props: ThreadItemProps) {
    const [showThreadCreate, setShowThreadCreate] = useState(false);

    const handleCommentIconClick = () => {
      setShowThreadCreate(!showThreadCreate);
    };

    return (
      <VStack borderBottom="1px solid #3F3F3F" width="100%">
        <HStack alignItems="flex-start" spacing={4} padding={5}>
          <ImageCard src={props.image} />
          <VStack align="flex-start" spacing={2} width="100%">
            <HStack>
              <Text color="#FFF" fontSize="sm" fontWeight="400">
                {props.name}
              </Text>
              <Text color="#909090" fontSize="sm" fontWeight="400">
                @{props.tag}
              </Text>
              <Text color="#909090" fontSize="sm" fontWeight="400">
                •
              </Text>
              <Text color="#909090" fontSize="sm" fontWeight="400">
                {props.time}
              </Text>
            </HStack>
            <Text color="#FFF" fontSize="sm" fontWeight="300">
              {props.content}
            </Text>
            {props.imageUrl && (
              <Image src={props.imageUrl} mt={2} borderRadius="md" />
            )}
            <HStack color="#FFF" gap={5}>
              <HStack>
                <LoveIcon />
                <Text>{props.like}</Text>
              </HStack>
              <HStack>
                <Link to={`/thread/${props.id}`} onClick={handleCommentIconClick}>
                  <CommentIcon />
                </Link>
                <Text>{props.reply}</Text>
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
