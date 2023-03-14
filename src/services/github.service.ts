import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Octokit } from "octokit";
import { GitHubRepo, GitHubUser, GitRepoSearchResponse } from 'src/models/github-api';
import { GetUserRepoParams, SearchUserRepoParams } from 'src/models/utils';

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  octokit:Octokit = new Octokit({});

  constructor(private http:HttpClient) { }

  public initializeOctokit(token:string):void{
    this.octokit = new Octokit({
      auth: token
    });
  }

  public getUserMetaData(username:string):Observable<{data:GitHubUser}>{
    return from(
      this.octokit.request("GET /users/{owner}", {
        owner: username
      })
    ) as Observable<{data:GitHubUser}>
  }

  public getUserRepos(params:GetUserRepoParams):Observable<{data:GitHubRepo[]}>{
    return from(
      this.octokit.request('GET /users/{username}/repos', {
        username: params.username,
        per_page:params.pageSize,
        page:params.pageNumber
      })
    ) as Observable<any>
  }

  public searchUserRepos(params:SearchUserRepoParams):Observable<GitRepoSearchResponse>{
    const encode = encodeURIComponent(`${params.query} in:name,description user:${params.username}`)
    return this.http.get(`https://api.github.com/search/repositories?q=${encode}&per_page=${params.pageSize}&page=${params.pageNumber}`) as Observable<GitRepoSearchResponse>
  }
}
