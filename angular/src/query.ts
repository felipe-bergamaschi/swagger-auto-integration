/**
 * Generated by orval v6.18.1 🍺
 * Do not edit manually.
 * GitHub API Endpoints
 * OpenAPI spec version: 1.0.0
 */
import {
  HttpClient
} from '@angular/common/http'
import type {
  HttpHeaders,
  HttpParams,
  HttpContext
} from '@angular/common/http'
import {
  Injectable
} from '@angular/core'
import {
  Observable
} from 'rxjs'
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




type HttpClientOptions = {
  headers?: HttpHeaders | {
      [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: any;
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: any;
  withCredentials?: boolean;
};



@Injectable({ providedIn: 'root' })
export class GitHubAPIEndpointsService {
  constructor(
    private http: HttpClient,
  ) {}/**
 * @summary Get information about the "axios/axios" repository
 */
 getAxiosAxios<TData = Repository>(
     options?: HttpClientOptions
  ): Observable<TData>  {
    return this.http.get<TData>(
      `/axios/axios`,options
    );
  }

/**
 * @summary Get information about the "TanStack/query" repository
 */
 getTanStackQuery<TData = Repository>(
     options?: HttpClientOptions
  ): Observable<TData>  {
    return this.http.get<TData>(
      `/TanStack/query`,options
    );
  }

};

export type GetAxiosAxiosClientResult = NonNullable<Repository>
export type GetTanStackQueryClientResult = NonNullable<Repository>
