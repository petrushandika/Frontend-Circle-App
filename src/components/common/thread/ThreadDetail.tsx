import {
  HStack,
  VStack,
  Text,
  Image,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { FiMoreVertical } from "react-icons/fi";
import ImageCard from "../card/CardImage";
import { CommentIcon } from "../icon/Icon";
import { Link } from "react-router-dom";
import { Thread } from "../../../types/Thread";
import ThreadCreate from "./ThreadCreate";
import { useState } from "react";
import ThreadEdit from "./ThreadEdit";
import ThreadDelete from "./ThreadDelete";
import ThreadLike from "./ThreadLike";

interface ThreadDetailProps {
  thread: Thread;
  refetch: () => void;
  onEdit: (updatedThread: Thread) => void;
}

export default function ThreadDetail({
  thread,
  refetch,
  onEdit,
}: ThreadDetailProps) {
  const [showThreadCreate, setShowThreadCreate] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleThreadCreate = () => {
    setShowThreadCreate((prevState) => !prevState);
  };

  const handleEdit = (updatedThread: Thread) => {
    setIsEditing(false);
    onEdit(updatedThread);
  };

  const handleDelete = () => {
    console.log("Delete function triggered");
  };

  return (
    <VStack
      width="100%"
      borderBottom="1px solid #3F3F3F"
      alignItems="flex-start"
    >
      <Link to={`/thread/${thread.id}`} onClick={toggleThreadCreate}>
        <HStack alignItems="flex-start" spacing={4} padding={5}>
          <ImageCard src={thread.user.avatar} />
          <VStack align="flex-start" spacing={2} width="100%">
            <HStack justifyContent="space-between" width="100%">
              <HStack>
                <Text color="#FFF" fontSize="sm" fontWeight={400}>
                  {thread.user.fullName}
                </Text>
                <Text color="#909090" fontSize="sm" fontWeight={400}>
                  @{thread.user.username} •{" "}
                  {new Date(thread.createdAt).toLocaleString()}
                </Text>
              </HStack>
              <Menu>
                <Tooltip aria-label="Options">
                  <MenuButton
                    as={IconButton}
                    icon={<FiMoreVertical />}
                    aria-label="Options"
                    variant="unstyled"
                    _hover={{ bg: "transparent" }}
                    _active={{ bg: "transparent" }}
                    color="white"
                  />
                </Tooltip>
                <MenuList color="#000">
                  <MenuItem
                    icon={<EditIcon />}
                    onClick={() => setIsEditing(true)}
                  >
                    Edit
                  </MenuItem>
                  <ThreadDelete threadId={thread.id} refetch={refetch} onDelete={handleDelete} />
                </MenuList>
              </Menu>
            </HStack>
            {isEditing ? (
              <ThreadEdit thread={thread} onEdit={handleEdit} />
            ) : (
              <Text color="#FFF" fontSize="sm" fontWeight={300}>
                {thread.content}
              </Text>
            )}
            {thread.image && (
              <Image src={thread.image} mt={2} borderRadius="md" />
            )}
            <HStack color="#FFF">
              <ThreadLike
                threadId={thread.id}
                totalLikes={thread.totalLikes ?? 0}
                refetch={refetch}
              />
              <HStack>
                <CommentIcon />
                <Text>{thread.totalReplies}</Text>
              </HStack>
            </HStack>
          </VStack>
        </HStack>
      </Link>
      {showThreadCreate && (
        <Box color="#FFF" width="100%" borderTop="1px solid #3F3F3F">
          <ThreadCreate refetch={refetch} />
        </Box>
      )}
    </VStack>
  );
}
