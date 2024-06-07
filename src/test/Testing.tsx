import { useState, useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import ThreadItem from "./ThreadItem";
import { api } from "../configs/Api";
import { Thread } from "../types/Types";

export function Testing() {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    async function fetchThreads() {
      try {
        const response = await api.get("/threads");
        setThreads(response.data);
      } catch (error) {
        console.error("Error fetching threads:", error);
      }
    }

    fetchThreads();
  }, []);

  return (
    <VStack>
      {threads.map((thread, index) => (
        <ThreadItem key={index} thread={thread} />
      ))}
    </VStack>
  );
}
