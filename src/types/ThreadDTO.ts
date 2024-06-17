export interface ThreadDTO {
  id: number;
  content: string;
  image?: string | FileList;
  threadId: number;
  userId: number;
}
