import { VStack } from "@chakra-ui/react";
import PostList from "../../common/post/PostList";
import data from "../../../data/data.json";

interface PostData {
  id: number;
  image: string;
  name: string;
  tag: string;
  time: string;
  content: string;
  imageUrl?: string;
  like: number;
  reply: number;
}

interface PostItemProps {
  id?: number | number[];
}

export default function PostItem({ id }: PostItemProps) {
  const filteredData = Array.isArray(id)
    ? data.filter((post: PostData) => id.includes(post.id))
    : id !== undefined
    ? data.filter((post: PostData) => post.id === id)
    : data;

  return (
    <VStack width="100%" spacing={4} align="stretch">
      {filteredData.map((post: PostData) => (
        <PostList
          key={post.id}
          image={post.image}
          name={post.name}
          tag={post.tag}
          time={post.time}
          content={post.content}
          imageUrl={post.imageUrl}
          like={post.like}
          reply={post.reply}
        />
      ))}
    </VStack>
  );
}
