//@ts-nocheck
import {
  useQuery
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import { request } from './api/axios';
import type { ErrorType } from './api/axios';
export interface RepositoryLicense {
  key?: string;
  name?: string;
  spdx_id?: string;
  url?: string;
  node_id?: string;
}

export interface RepositoryOwner {
  login?: string;
  id?: number;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  site_admin?: boolean;
}

export interface Repository {
  id?: number;
  node_id?: string;
  name?: string;
  full_name?: string;
  private?: boolean;
  owner?: RepositoryOwner;
  html_url?: string;
  description?: string;
  fork?: boolean;
  url?: string;
  forks_url?: string;
  keys_url?: string;
  collaborators_url?: string;
  teams_url?: string;
  hooks_url?: string;
  issue_events_url?: string;
  events_url?: string;
  assignees_url?: string;
  branches_url?: string;
  tags_url?: string;
  blobs_url?: string;
  git_tags_url?: string;
  git_refs_url?: string;
  trees_url?: string;
  statuses_url?: string;
  languages_url?: string;
  stargazers_url?: string;
  contributors_url?: string;
  subscribers_url?: string;
  subscription_url?: string;
  commits_url?: string;
  git_commits_url?: string;
  comments_url?: string;
  issue_comment_url?: string;
  contents_url?: string;
  compare_url?: string;
  merges_url?: string;
  archive_url?: string;
  downloads_url?: string;
  issues_url?: string;
  pulls_url?: string;
  milestones_url?: string;
  notifications_url?: string;
  labels_url?: string;
  releases_url?: string;
  deployments_url?: string;
  created_at?: string;
  updated_at?: string;
  pushed_at?: string;
  git_url?: string;
  ssh_url?: string;
  clone_url?: string;
  svn_url?: string;
  homepage?: string;
  size?: number;
  stargazers_count?: number;
  watchers_count?: number;
  language?: string;
  has_issues?: boolean;
  has_projects?: boolean;
  has_downloads?: boolean;
  has_wiki?: boolean;
  has_pages?: boolean;
  has_discussions?: boolean;
  forks_count?: number;
  archived?: boolean;
  disabled?: boolean;
  open_issues_count?: number;
  license?: RepositoryLicense;
  allow_forking?: boolean;
  is_template?: boolean;
  web_commit_signoff_required?: boolean;
  topics?: string[];
  visibility?: string;
  forks?: number;
  open_issues?: number;
  watchers?: number;
  default_branch?: string;
  temp_clone_token?: string;
  organization?: RepositoryOwner;
  network_count?: number;
  subscribers_count?: number;
}



type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;


/**
 * @summary Get information about the "axios/axios" repository
 */
export const getAxiosAxios = (
    
 signal?: AbortSignal
) => {
      return request<Repository>(
      {url: `/axios/axios`, method: 'get', signal
    },
      );
    }
  

export const getGetAxiosAxiosQueryKey = () => [`/axios/axios`] as const;
  

    
export const getGetAxiosAxiosQueryOptions = <TData = Awaited<ReturnType<typeof getAxiosAxios>>, TError = ErrorType<unknown>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getAxiosAxios>>, TError, TData>, }
): UseQueryOptions<Awaited<ReturnType<typeof getAxiosAxios>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetAxiosAxiosQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getAxiosAxios>>> = ({ signal }) => getAxiosAxios(signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetAxiosAxiosQueryResult = NonNullable<Awaited<ReturnType<typeof getAxiosAxios>>>
export type GetAxiosAxiosQueryError = ErrorType<unknown>

/**
 * @summary Get information about the "axios/axios" repository
 */
export const useGetAxiosAxios = <TData = Awaited<ReturnType<typeof getAxiosAxios>>, TError = ErrorType<unknown>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getAxiosAxios>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetAxiosAxiosQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}


/**
 * @summary Get information about the "TanStack/query" repository
 */
export const getTanStackQuery = (
    
 signal?: AbortSignal
) => {
      return request<Repository>(
      {url: `/TanStack/query`, method: 'get', signal
    },
      );
    }
  

export const getGetTanStackQueryQueryKey = () => [`/TanStack/query`] as const;
  

    
export const getGetTanStackQueryQueryOptions = <TData = Awaited<ReturnType<typeof getTanStackQuery>>, TError = ErrorType<unknown>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getTanStackQuery>>, TError, TData>, }
): UseQueryOptions<Awaited<ReturnType<typeof getTanStackQuery>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetTanStackQueryQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getTanStackQuery>>> = ({ signal }) => getTanStackQuery(signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetTanStackQueryQueryResult = NonNullable<Awaited<ReturnType<typeof getTanStackQuery>>>
export type GetTanStackQueryQueryError = ErrorType<unknown>

/**
 * @summary Get information about the "TanStack/query" repository
 */
export const useGetTanStackQuery = <TData = Awaited<ReturnType<typeof getTanStackQuery>>, TError = ErrorType<unknown>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getTanStackQuery>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetTanStackQueryQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}


