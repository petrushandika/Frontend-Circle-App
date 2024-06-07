import { useState, useEffect } from "react";
import { VStack, Text } from "@chakra-ui/react";
import ThreadItem from "./ThreadItem";
import { ThreadData } from "../../../types/Types";
import { api } from "../../../configs/Api";

export default function ThreadList() {
  const [threads, setThreads] = useState<ThreadData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/threads");
        setThreads(response.data.threads);
      } catch (err) {
        console.error("Error fetching threads:", err);
        setError("Failed to load threads. Please check your authentication token.");
      }
    }
    fetchData();
  }, []);
  console.log(threads);

  return (
    <VStack width="100%">
      {error ? (
        <Text color="red">{error}</Text>
      ) : (
        threads.map(thread => (
          <ThreadItem key={thread.id} thread={thread} />
        ))
      )}
    </VStack>
  );
}
