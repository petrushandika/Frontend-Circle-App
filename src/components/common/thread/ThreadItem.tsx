import { useState } from "react";
import { Link } from "react-router-dom";
import { HStack, VStack, Text, Image } from "@chakra-ui/react";
import ImageCard from "../card/CardImage";
import { LoveIcon, CommentIcon } from "../icon/Icon";
import { ThreadData } from "../../../types/Types";

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
  const [showCreateThread, setShowCreateThread] = useState<boolean>(false);

  const handleCommentClick = () => {
    setShowCreateThread(true);
  };

  return (
    <>
      <Link
        to={`/post/${props.id}`}
        style={{ textDecoration: "none", width: "100%" }}
      >
        <HStack
          alignItems={"flex-start"}
          spacing={4}
          width="100%"
          borderBottom={"1px solid #3F3F3F"}
          padding={5}
        >
          <ImageCard src={props.image} />
          <VStack align={"flex-start"} spacing={2} width="100%">
            <HStack>
              <Text color={"#FFF"} fontSize={"sm"} fontWeight={"400"}>
                {props.name}
              </Text>
              <Text color={"#909090"} fontSize={"sm"} fontWeight={"400"}>
                @{props.tag}
              </Text>
              <Text color={"#909090"} fontSize={"sm"} fontWeight={"400"}>
                •
              </Text>
              <Text color={"#909090"} fontSize={"sm"} fontWeight={"400"}>
                {props.time}
              </Text>
            </HStack>
            <Text color={"#FFF"} fontSize={"sm"} fontWeight={"300"}>
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
              <HStack onClick={handleCommentClick}>
                <CommentIcon />
                <Text>{props.reply}</Text>
              </HStack>
            </HStack>
          </VStack>
        </HStack>
      </Link>
      {showCreateThread && <Text color="#FFF">Creating a new thread...</Text>}
    </>
  );
}
