import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import { HStack, VStack, Text, Image } from "@chakra-ui/react";
import ImageCard from "../card/ImageCard";

interface PostProps {
  image: string;
  name: string;
  tag: string;
  time: string;
  content: string;
  imageUrl?: string;
  like: number;
  reply: number;
}

export default function PostList({
  image,
  name,
  tag,
  time,
  content,
  imageUrl,
  like,
  reply,
}: PostProps) {
  return (
    <HStack
      color="#FFF"
      alignItems="flex-start"
      width="100%"
      p={5}
      borderBottom={"1px solid #3F3F3F"}
      fontSize={"sm"}
      fontWeight={"400"}
      gap={5}
    >
      <ImageCard src={image} />
      <VStack alignItems="flex-start" spacing={1} width="100%">
        <HStack>
          <Text fontWeight={"600"}>{name}</Text>
          <Text fontWeight={"300"} color={"#909090"}>
            @{tag}
          </Text>
          <Text fontWeight={"300"} color={"#909090"}>
            •
          </Text>
          <Text fontWeight={"300"} color={"#909090"}>
            {time}
          </Text>
        </HStack>
        <Text>{content}</Text>
        {imageUrl && <Image src={imageUrl} mt={2} borderRadius="md" />}
        <HStack spacing={4} mt={2} fontWeight={"300"} color={"#909090"}>
          <HStack>
            <FontAwesomeIcon icon={faHeart} />
            <Text>{like}</Text>
          </HStack>
          <HStack>
            <FontAwesomeIcon icon={faComment} />
            <Text>{reply}</Text>
          </HStack>
        </HStack>
      </VStack>
    </HStack>
  );
}
