export interface User {
  id: number;
  fullName: string;
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
  createdAt: string;
  updatedAt: string;
  followers: { id: number }[];
  following: { id: number }[];
}
