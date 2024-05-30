import { IconType } from "react-icons";

export interface ButtonProps {
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
  text?: string;
  onClick?: () => void;
}

export interface CardProps {
  color?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  padding?: string | number;
  text?: string;
}

export interface IconProps {
  icon: IconType;
  fontSize?: string | number;
  color?: string;
}

export interface InputProps {
  borderRadius?: string | number;
  pl?: string | number;
  placeholder?: string;
}

export interface ThreadData {
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

export interface ThreadListProps {
  id?: number | number[];
}
