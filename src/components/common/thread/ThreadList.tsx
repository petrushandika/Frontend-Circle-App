import { VStack, Text } from "@chakra-ui/react";
import ThreadItem from "./ThreadItem";
import { Thread } from "../../../types/Thread";
import { api } from "../../../configs/Api";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ThreadDTO } from "../../../types/ThreadDTO";

export default function ThreadList() {
  const [error, setError] = useState<string | null>(null);

  const { data: threads, refetch } = useQuery<Thread[]>({
    queryKey: ["threads"],
    queryFn: getThreads,
  });

  async function getThreads() {
    try {
      const response = await api.get("/threads");
      return response.data.threads;
    } catch (err) {
      console.error("Error fetching threads:", err);
      setError(
        "Failed to load threads. Please check your authentication token."
      );
      throw new Error("Failed to fetch threads");
    }
  }

  const handleEdit = (updatedThread: ThreadDTO) => {
    console.log("Editing thread:", updatedThread);
    refetch();
  };

  return (
    <VStack width="100%">
      {error ? (
        <Text color="red">{error}</Text>
      ) : (
        threads &&
        threads.map((thread) => (
          <ThreadItem
            key={thread.id}
            thread={thread}
            refetch={refetch}
            onEdit={handleEdit}
          />
        ))
      )}
    </VStack>
  );
}
