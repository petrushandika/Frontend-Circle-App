import { MenuItem } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

interface ThreadDeleteProps {
  onDelete: () => void;
}

export default function ThreadDelete({ onDelete }: ThreadDeleteProps) {
  return (
    <MenuItem icon={<DeleteIcon />} onClick={onDelete}>
      Delete
    </MenuItem>
  );
}
