import React from "react";
import Post from "./Post";
import data from "../../data/data.json";
import { Flex } from "@chakra-ui/react";

export default function PostList() {
  return (
    <Flex flexDir="column">
      {data.map((post) => (
        <Post
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
    </Flex>
  );
}
