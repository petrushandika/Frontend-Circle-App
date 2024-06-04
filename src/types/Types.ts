import { IconType } from "react-icons";

export interface ButtonProps {
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
  text?: string;
  handleClose?: () => void;
  type?: string;
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
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
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

export interface LoginProps {
  email: string;
  password: string;
}

export interface RegisterProps {
  fullName: string;
  username: string;
  email: string;
  password: string;
}