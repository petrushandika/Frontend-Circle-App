import { MenuItem } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useMutation } from "@tanstack/react-query";
import { ThreadDTO } from "@/types/ThreadDTO";
import { api } from "../../../configs/Api";
import useAuth from "../../../features/auth/hooks/useAuth";

interface ThreadDeleteProps {
  threadId: number;
  refetch: () => void;
  onDelete: () => void;
}

export default function ThreadDelete({
  threadId,
  refetch,
  onDelete,
}: ThreadDeleteProps) {
  const { user } = useAuth();

  const { mutateAsync } = useMutation<ThreadDTO>({
    mutationFn: async () => {
      const userId = Number(user.id);
      const body = { threadId, userId };
      const response = await api.delete(`/threads/${threadId}`, { data: body });
      return response.data;
    },
  });

  const handleDelete = async () => {
    try {
      await mutateAsync();
      console.log("Success Delete Thread!");
      refetch();
      onDelete();
    } catch (error) {
      console.error("Failed To Delete The Thread:", error);
    }
  };

  return (
    <MenuItem icon={<DeleteIcon />} onClick={handleDelete}>
      Delete
    </MenuItem>
  );
}
