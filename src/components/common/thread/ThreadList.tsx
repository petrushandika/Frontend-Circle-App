import { VStack } from "@chakra-ui/react";
import ThreadItem from "./ThreadItem";
import data from "../../../data/data.json";
import { ThreadData, ThreadListProps } from "../../../types/Types";

export default function ThreadList({ id }: ThreadListProps) {
  const filteredData = Array.isArray(id)
    ? data.filter((post: ThreadData) => id.includes(post.id))
    : id !== undefined
    ? data.filter((post: ThreadData) => post.id === id)
    : data;

  return (
    <VStack width="100%">
      {filteredData.map((thread: ThreadData) => (
        <ThreadItem
          key={thread.id}
          id={thread.id}
          image={thread.image}
          name={thread.name}
          tag={thread.tag}
          time={thread.time}
          content={thread.content}
          imageUrl={thread.imageUrl}
          like={thread.like}
          reply={thread.reply}
        />
      ))}
    </VStack>
  );
}
