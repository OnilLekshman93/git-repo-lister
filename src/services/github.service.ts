import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GitHubRepo,
  GitHubUser,
  GitRepoSearchResponse,
} from 'src/models/github-api';
import { GetUserRepoParams, SearchUserRepoParams } from 'src/models/requests';
import { GITHUB_TOKEN } from 'src/constants';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  baseUrl: string = 'https://api.github.com/';

  requestHeaders: {
    [header: string]: string | string[];
  } = {
    accept: 'application/vnd.github.v3+json',
    authorization: `token ${GITHUB_TOKEN.replace(/[^a-zA-Z0-9_ ]/g, "")}`,
  };

  constructor(private http: HttpClient) {}

  public getUserMetaData(username: string): Observable<GitHubUser> {
    return this.http.get(this.baseUrl + 'users/' + username, {
      headers: this.requestHeaders,
    }) as Observable<GitHubUser>;
  }

  public getUserRepos(params: GetUserRepoParams): Observable<GitHubRepo[]> {
    return this.http.get(
      `${this.baseUrl}users/${params.username}/repos?per_page=${params.pageSize}&page=${params.pageNumber}`,
      {
        headers: this.requestHeaders,
      }
    ) as Observable<GitHubRepo[]>;
  }

  public searchUserRepos(
    params: SearchUserRepoParams
  ): Observable<GitRepoSearchResponse> {
    const encode = encodeURIComponent(
      `${params.query} in:name,description user:${params.username}`
    );
    return this.http.get(
      `https://api.github.com/search/repositories?q=${encode}&per_page=${params.pageSize}&page=${params.pageNumber}`
    ) as Observable<GitRepoSearchResponse>;
  }
}
