import { User } from './User';

export interface Thread {
  id: number;
  image?: string;
  content: string;
  totalLikes?: number;
  totalReplies?: number;
  userId: number;
  threadId: number;
  createdAt: string;
  updatedAt: Date;
  user: Pick<User, 'fullName' | 'username' | 'avatar'>;
}
