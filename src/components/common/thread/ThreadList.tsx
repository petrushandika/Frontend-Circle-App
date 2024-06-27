import { VStack, Text } from "@chakra-ui/react";
import ThreadItem from "./ThreadItem";
import { Thread } from "../../../types/Thread";
import { ThreadDTO } from "../../../types/ThreadDTO";
import { Reply } from "../../../types/Reply";
import ReplyItem from "../reply/ReplyItem";
import { api } from "../../../configs/Api";
import { useEffect, useState } from "react";

interface ThreadListProps {
  targetId?: number;
  error: string | null;
  threads?: Thread[] | undefined;
  replies?: Reply[];
  refetch: () => void;
  handleEdit: (updatedThread: ThreadDTO) => void;
  isReply?: boolean
}

export default function ThreadList({ targetId, error, threads, refetch, handleEdit, isReply, replies }: ThreadListProps) {

  const [targetThread, setTargetThread] = useState();

  useEffect(() => {
    async function getTargetThread() {
      const response = await api.get(`/threads/${targetId}`)
      console.log(response);
      setTargetThread(response.data)
    }
    getTargetThread()
  }, [targetId])

  if (isReply) {
    return (
      <VStack width="100%">
        {error ? (
          <Text color="red">{error}</Text>
        ) : <p>
          {targetThread && <ThreadItem onEdit={handleEdit} refetch={refetch} thread={targetThread} />}
          {
            replies &&
            replies.map((reply) => {
              console.log(reply);
              return <ReplyItem
                key={reply.id}
                reply={reply}
                refetch={refetch}
                onEdit={handleEdit}
              />
            })
          }
        </p>}
      </VStack>
    );
  }

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
