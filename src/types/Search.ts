import { User } from "./User";

export interface Search extends Pick<User, "avatar" | "fullName" | "username" | "bio"> {
  isFollowed: boolean;
}
