export interface User {
  login: string;
  id: number;
  avatar_url: string;
}

export interface UserProfile {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  bio?: string;
  public_repos: number;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  blog?: string;
}

export interface UsersState {
  users: User[];
  userProfile: UserProfile | null;
  loading: boolean;
  error: string | null;
}
