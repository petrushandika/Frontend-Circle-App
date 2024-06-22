import { HStack, VStack, Text, Image } from "@chakra-ui/react";
import { Reply } from "../../../types/Reply";
import { ReplyDTO } from "../../../types/ReplyDTO";
import ImageCard from "../card/CardImage";

const formatDate = (createdAt: string) => {
  const date = new Date(createdAt);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("id-ID", options);
};

interface ReplyItemProps {
  reply: Reply;
  refetch: () => void;
  onEdit: (updatedReply: ReplyDTO) => void;
}

export default function ReplyItem({ reply }: ReplyItemProps) {
  return (
    <VStack
      width="100%"
      borderBottom="1px solid #3F3F3F"
      alignItems="flex-start"
      paddingY={4}
    >
      <HStack alignItems="flex-start" spacing={4} paddingX={5} width="100%">
        <ImageCard
          src={reply.user.avatar}
        />
        <VStack align="flex-start" spacing={2} width="100%">
          <HStack justifyContent="space-between" width="100%">
            <HStack>
              <Text color="#FFF" fontSize="sm" fontWeight={400}>
                {reply.user.fullName}
              </Text>
              <Text color="#909090" fontSize="sm" fontWeight={400}>
                @{reply.user.username} • {formatDate(reply.createdAt)}
              </Text>
            </HStack>
          </HStack>
          <VStack align="flex-start" spacing={2} width="100%">
            <HStack justifyContent="space-between" width="100%">
              <VStack alignItems={"flex-start"}>
                <Text color="#FFF" fontSize="sm" fontWeight={400}>
                  {reply.content}
                </Text>
                <Image
                  src={reply.image}
                  alt="..."
                  width="100%"
                  height="100%"
                  borderRadius="md"
                />
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
}
