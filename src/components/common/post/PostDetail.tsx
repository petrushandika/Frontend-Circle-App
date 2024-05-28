import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { HStack, VStack, Text, Image } from '@chakra-ui/react';
import ImageCard from '../card/ImageCard';
import CreatePost from "./CreatePost";

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

const PostDetail: React.FC = () => {
    const { id: routeId } = useParams<{ id: string }>();
    const [post, setPost] = useState<PostData | null>(null);
    const [showCreatePost, setShowCreatePost] = useState(false);

    const handleCommentClick = () => {
        setShowCreatePost(true);
    };

    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await axios.get<PostData>(`https://api.npoint.io/9aa6ebf8cfa4ab9b534f/${routeId}`);
                setPost(response.data);
            } catch (error) {
                console.error("Error fetching post data:", error);
            }
        };

        getPost();
    }, [routeId]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <HStack
                color="#FFF"
                alignItems="flex-start"
                width="100%"
                p={5}
                borderBottom={"1px solid #3F3F3F"}
                fontSize={"sm"}
                fontWeight={"400"}
                gap={5}
                height={"100vh"}
            >
                <ImageCard src={post.image} />
                <VStack alignItems="flex-start" spacing={1} width="100%">
                    <HStack>
                        <Text fontWeight={"600"}>{post.name}</Text>
                        <Text fontWeight={"300"} color={"#909090"}>
                            @{post.tag}
                        </Text>
                        <Text fontWeight={"300"} color={"#909090"}>
                            •
                        </Text>
                        <Text fontWeight={"300"} color={"#909090"}>
                            {post.time}
                        </Text>
                    </HStack>
                    <Text>{post.content}</Text>
                    {post.imageUrl && <Image src={post.imageUrl} mt={2} borderRadius="md" />}
                    <HStack spacing={4} mt={2} fontWeight={"300"} color={"#909090"}>
                        <HStack>
                            <FontAwesomeIcon icon={faHeart} />
                            <Text>{post.like}</Text>
                        </HStack>
                        <HStack onClick={handleCommentClick} cursor="pointer">
                            <FontAwesomeIcon icon={faComment} />
                            <Text>{post.reply}</Text>
                        </HStack>
                    </HStack>
                </VStack>
            </HStack>
            {showCreatePost && <CreatePost />}
        </>
    );
};

export default PostDetail;
