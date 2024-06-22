export interface Reply {
  id: number;
  image?: string;
  content: string;
  userId: number;
  threadId: number;
  createdAt: string;
  updatedAt: Date;
  user: {
    avatar?: string;
    fullName: string;
    username: string;
  };
}
