export interface FollowEntity {
  id: number;
  followersId: number;
  followingId: number;
  followAt: Date;
  follower: {
    id: number;
    fullName: string;
    username: string;
    email: string;
    password: string;
    avatar?: string | null;
    bio?: string | null;
    verified: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
  following: {
    id: number;
    fullName: string;
    username: string;
    email: string;
    password: string;
    avatar?: string | null;
    bio?: string | null;
    verified: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
}
