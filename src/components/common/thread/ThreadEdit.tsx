import { HStack, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import SolidButton from "../button/SolidButton";
import { Thread } from "../../../types/Thread";

interface ThreadEditProps {
  thread: Thread;
  onEdit: (updatedThread: Thread) => void;
}

export default function ThreadEdit({ thread, onEdit }: ThreadEditProps) {
  const [editContent, setEditContent] = useState(thread.content);

  const handleEditSubmit = () => {
    onEdit({ ...thread, content: editContent });
  };

  return (
    <HStack
      width={"100%"}
      justifyContent={"space-between"}
      alignItems={"flex-start"}
    >
      <Textarea
        value={editContent}
        onChange={(e) => setEditContent(e.target.value)}
        placeholder="What is happening?!"
        variant="unstyled"
        fontSize={".9rem"}
        width={"100%"}
        resize="none"
      />
      <HStack>
        <SolidButton
          onClick={handleEditSubmit}
          text="Post"
          width="100%"
          height="33px"
          fontSize=".9rem"
        />
      </HStack>
    </HStack>
  );
}
