export interface ReplyDTO {
  id: number;
  userId: number;
  threadId: number;
  avatar?: string;
  fullName: string;
  username: string;
  image?: string;
  content: string;
}
