import { VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ThreadList from "./ThreadList";
import { useQuery } from "@tanstack/react-query";
import { Reply } from "../../../types/Reply";
import { api } from "../../../configs/Api";
import { useState } from "react";
import { ThreadDTO } from "@/types/ThreadDTO";


export default function Thread() {
  const { id } = useParams();

  const [error, setError] = useState<string | null>(null);

  const { data: replies, refetch } = useQuery<Reply[]>({
    queryKey: ["replies"],
    queryFn: getReplies,
  });

  async function getReplies() {
    try {
      const response = await api.get(`/replies/${id}`);

      return response.data;
    } catch (err) {
      console.error("Error fetching replies:", err);
      setError(
        "Failed to load replies. Please check your authentication token."
      );
      throw new Error("Failed to fetch replies");
    }
  }

  const handleEdit = (updatedThread: ThreadDTO) => {
    console.log("Editing thread:", updatedThread);
    refetch();
  };

  if (id) {
    return (
      <VStack
        overflow={"hidden"}
        height={"100vh"}
        overflowY="auto"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        <ThreadList targetId={+id} error={error} isReply={true} replies={replies} handleEdit={handleEdit} refetch={refetch} />
      </VStack>
    );
  }
}