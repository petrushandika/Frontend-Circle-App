import { VStack, Text } from "@chakra-ui/react";
import ReplyItem from "./ReplyItem";
import { Reply } from "../../../types/Reply";
import { api } from "../../../configs/Api";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ReplyDTO } from "../../../types/ReplyDTO";

interface ReplyListProps {
  threadId: number;
  userId: number;
}

export default function ReplyList({ threadId, userId }: ReplyListProps) {
  const [error, setError] = useState<string | null>(null);

  const { data: replies, refetch } = useQuery<Reply[]>({
    queryKey: ["replies", threadId, userId],
    queryFn: () => getReplies(threadId, userId),
  });

  async function getReplies(threadId: number, userId: number) {
    try {
      const response = await api.get(`/replies`, {
        params: { userId, threadId },
      });
      return response.data.replies;
    } catch (err) {
      console.error("Error fetching replies:", err);
      setError(
        "Failed to load replies. Please check your authentication token."
      );
      throw new Error("Failed to fetch replies");
    }
  }

  const handleEdit = (updatedReply: ReplyDTO) => {
    console.log("Editing reply:", updatedReply);
    refetch();
  };

  return (
    <VStack width="100%">
      {error ? (
        <Text color="red">{error}</Text>
      ) : (
        replies &&
        replies.map((reply) => (
          <ReplyItem
            key={reply.id}
            reply={reply}
            refetch={refetch}
            onEdit={handleEdit}
          />
        ))
      )}
    </VStack>
  );
}
