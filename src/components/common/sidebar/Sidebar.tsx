import SidebarItem from "./SidebarItem";

interface SidebarProps {
  refetch: () => void;
}

export default function Sidebar({ refetch }: SidebarProps) {
  return (
    <SidebarItem refetch={refetch} />
  );
}
