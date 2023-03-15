import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { GitHubRepo, GitHubUser } from 'src/models/github-api';
import { GetUserRepoParams, SearchUserRepoParams } from 'src/models/requests';
import { GithubService } from 'src/services/github.service';

@Component({
  selector: 'git-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
})
export class RepoListComponent implements OnInit {
  @Input() username: string | null = null;
  @Input() userMetadata: GitHubUser | null = null;

  public repoCount: number = 0;
  public userRepoList: any[] = [];
  public userRepoListFetched: boolean = false;
  public pageSize: number = 10;
  public pageNumber: number = 1;
  public rowsPerPageOptions = [10, 50, 100];
  public searchControl: FormControl = new FormControl('');
  private subscriptions: Subscription = new Subscription();
  private searchModeEnabled: boolean = false;
  public searchText: string = '';

  constructor(
    private githubService: GithubService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.userRepoList = new Array(this.pageSize).fill(null);
    if (this.username) {
      this.getPaginatedUserRepos();
    }
  }

  public onSearch(): void {
    this.pageNumber = 1;
    this.pageSize = 10;
    this.userRepoList = new Array(this.pageSize).fill(null);
    this.userRepoListFetched = false;
    if (this.searchText && this.searchText.length) {
      this.searchModeEnabled = true;
      this.searchRepos(this.searchText);
    } else {
      this.searchModeEnabled = false;
      this.getPaginatedUserRepos();
    }
  }

  public onSearchClear(): void {
    this.searchText = '';
    this.onSearch();
  }

  private searchRepos(query: string): void {
    const params: SearchUserRepoParams = {
      username: this.username as string,
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      query,
    };
    this.subscriptions.add(
      this.githubService.searchUserRepos(params).subscribe({
        next: (res: any) => {
          this.userRepoList = res.items;
          this.repoCount = res.total_count;
        },
        complete: () => {
          this.userRepoListFetched = true;
        },
        error: () => {
          this.onError();
        },
      })
    );
  }

  private getPaginatedUserRepos(): void {
    const params: GetUserRepoParams = {
      username: this.username as string,
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
    };
    this.subscriptions.add(
      this.githubService.getUserRepos(params).subscribe({
        next: (res: GitHubRepo[]) => {
          this.userRepoList = res;
          this.repoCount = (this.userMetadata as GitHubUser).public_repos;
        },
        complete: () => {
          this.userRepoListFetched = true;
        },
        error: () => {
          this.onError();
        },
      })
    );
  }

  public onPaginate(event: {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
  }): void {
    this.pageSize = event.rows;
    this.pageNumber = event.page + 1;
    this.userRepoList = new Array(this.pageSize).fill(null);
    this.userRepoListFetched = false;
    if (this.searchModeEnabled) {
      this.searchRepos(this.searchControl.value);
    } else {
      this.getPaginatedUserRepos();
    }
  }

  private onError(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Unable to fetch the user repositories',
    });
    setTimeout(()=>{
      this.router.navigate(['/login']);
    },1000)
  }

  public trackRepo(index: number, repo: GitHubRepo | null): number | null {
    if (!repo) return null;
    return repo.id;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
