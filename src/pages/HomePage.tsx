import { Box, VStack } from "@chakra-ui/react";
// import Thread from "../components/common/thread/Thread";
import ThreadCreate from "../components/common/thread/ThreadCreate";
import CardHeader from "../components/common/card/CardHeader";
import { Thread } from "../../src/types/Thread";
import { api } from "../configs/Api";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ThreadDTO } from "../../src/types/ThreadDTO";
import ThreadList from "../components/common/thread/ThreadList";

export default function HomePages() {
  const refetchThreads = () => {
    console.log("Refetching threads...");
  };

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
    <Box
      color={"#FFF"}
      borderRight={"1px solid #3F3F3F"}
      borderLeft={"1px solid #3F3F3F"}
      width={"100%"}
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
      <VStack>
        <VStack width={"100%"} borderBottom={"1px solid #3F3F3F"}>
          <CardHeader
            text="Home"
            padding={"30px 0 0 20px"}
            fontSize={25}
            fontWeight={"400"}
          />
          <ThreadCreate refetch={refetchThreads} />
        </VStack>
        <ThreadList error={error} refetch={refetch} handleEdit={handleEdit} threads={threads} />
      </VStack>
    </Box>
  );
}
