import { Avatar } from "@chakra-ui/react";

interface CardImageProps {
  src?: string;
  size?: string;
}

export default function CardImage({ size, src }: CardImageProps) {
    return <Avatar size={size} src={src} />;
}