export interface User {
  id: number;
  fullName: string;
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
  followers: { id: number }[];
  following: { id: number }[];
}
