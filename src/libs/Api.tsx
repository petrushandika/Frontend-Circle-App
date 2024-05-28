import { useState, useEffect } from "react";
import { Flex, VStack, Heading, Text } from "@chakra-ui/react";
import axios from "axios";

export default function Api() {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const response = await axios.get("https://api.npoint.io/9aa6ebf8cfa4ab9b534f");
            console.log(response.data);
            setPosts(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <VStack>
            {posts.map((post) => (
                <Flex key={post.id} direction="column" align="flex-start">
                    <Heading size="md">{post.name}</Heading>
                    <Text>{post.tag}</Text>
                </Flex>
            ))}
        </VStack>
    );
}
