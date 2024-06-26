export interface UserDTO {
  id: number;
  fullName: string;
  username: string;
  email?: string;
  avatar?: string | FileList;
  bio?: string;
}
