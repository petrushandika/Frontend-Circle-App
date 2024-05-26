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

export default function PostItem() {
  return (
    <VStack width="100%" spacing={4} align="stretch">
      {data.map((post: PostData) => (
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
