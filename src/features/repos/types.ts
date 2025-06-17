export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string;
  updated_at: string;
}

export interface FetchReposParams {
  username: string;
  page: number;
  perPage: number;
}

export interface ReposState {
  repos: Repo[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  perPage: number;
  totalCount: number;
}