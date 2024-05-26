import { Avatar } from "@chakra-ui/react";

interface CardImageProps {
  src: string;
}

export default function CardImage({ src }: CardImageProps) {
    return <Avatar src={src} />;
}
