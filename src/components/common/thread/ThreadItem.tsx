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
import { useState } from "react";
import ThreadEdit from "./ThreadEdit";
import ThreadDelete from "./ThreadDelete";
import ThreadLike from "./ThreadLike";
import { ThreadDTO } from "../../../types/ThreadDTO";
import ThreadReply from "./ThreadReply";
import ReplyList from "../reply/ReplyList";

const formatDate = (createdAt: string) => {
  const date = new Date(createdAt);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("id-ID", options);
};

interface ThreadItemProps {
  thread: Thread;
  refetch?: () => void;
  onEdit?: (updatedThread: ThreadDTO) => void;
}

export default function ThreadItem({
  thread,
  refetch,
  onEdit,
}: ThreadItemProps) {
  const [showThreadCreate, setShowThreadCreate] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleThreadCreate = () => {
    setShowThreadCreate((prevState) => !prevState);
  };

  const handleEdit = (updatedThread: ThreadDTO) => {
    setIsEditing(false);
    if (onEdit) {
      onEdit(updatedThread);
    }
  };

  const handleDelete = () => {
    console.log("Delete function triggered");
  };

  if (refetch && onEdit) {
    return (
      <VStack
        width="100%"
        borderBottom="1px solid #3F3F3F"
        alignItems="flex-start"
      >
        <HStack alignItems="flex-start" spacing={4} padding={5}>
          <ImageCard src={thread.user.avatar} />
          <VStack align="flex-start" spacing={2} width="100%">
            <HStack justifyContent="space-between" width="100%">
              <HStack>
                <Text color="#FFF" fontSize="sm" fontWeight={400}>
                  {thread.user.fullName}
                </Text>
                <Text color="#909090" fontSize="sm" fontWeight={400}>
                  @{thread.user.username} • {formatDate(thread.createdAt)}
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
                  <ThreadDelete
                    threadId={thread.id}
                    onDelete={handleDelete}
                    refetch={refetch}
                  />
                </MenuList>
              </Menu>
            </HStack>
            {isEditing ? (
              <ThreadEdit thread={thread} onEdit={handleEdit} refetch={refetch} />
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
              <Link to={`/thread/${thread.id}`} onClick={toggleThreadCreate}>
                <HStack>
                  <CommentIcon />
                  <Text>{thread.totalReplies}</Text>
                </HStack>
              </Link>
            </HStack>
          </VStack>
        </HStack>
        {showThreadCreate && (
          <Box color="#FFF" width="100%" borderTop="1px solid #3F3F3F">
            <ReplyList threadId={thread.id} userId={thread.user.id} />
            <ThreadReply refetch={refetch} />
          </Box>
        )}
      </VStack>
    );
  }
}
