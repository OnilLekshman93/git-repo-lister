import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { GitHubUser } from 'src/models/github-api';
import { GetUserRepoParams, SearchUserRepoParams } from 'src/models/utils';
import { GithubService } from 'src/services/github.service';

@Component({
  selector: 'git-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {

  @Input() username:string | null = null;
  @Input() userMetadata:GitHubUser | null = null;
  
  public repoCount:number = 0;
  public userRepoList:any[] = [];
  public userRepoListFetched:boolean = false;
  public pageSize:number = 10;
  public pageNumber:number = 1;
  public rowsPerPageOptions = [10,50,100];
  public searchControl: FormControl = new FormControl('');
  private subscriptions:Subscription = new Subscription();
  private searchModeEnabled:boolean = false;

  constructor(
    private githubService:GithubService,
    private router:Router,
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.userRepoList = new Array(this.pageSize).fill(null);
    if(this.username){
      this.getPaginatedUserRepos();
      this.listenSearchFormControl();
    }
  }

  private listenSearchFormControl():void{
    this.subscriptions.add(this.searchControl.valueChanges
    .pipe(debounceTime(500), distinctUntilChanged())
    .subscribe(
      {
        next: ((query:string) =>  {
          this.pageNumber = 1;
          this.pageSize = 10;
          this.userRepoList = new Array(this.pageSize).fill(null);
          this.userRepoListFetched = false;
          if(query){
            this.searchModeEnabled = true;
            this.searchRepos(query)
          }else{
            this.searchModeEnabled = false;
            this.getPaginatedUserRepos();
          }
        }),
    }));
  }

  private searchRepos(query:string):void{
    const params:SearchUserRepoParams = {
      username:this.username as string,
      pageSize:this.pageSize,
      pageNumber:this.pageNumber,
      query
    }
    this.subscriptions.add(this.githubService.searchUserRepos(params).subscribe(
      {
        next: ((res: any) =>  {
          this.userRepoList = res.items;
          this.repoCount = res.total_count;
        }),
        complete: () => {this.userRepoListFetched = true},
        error: () => {
          this.onError();
        }
    }
    ))
  }

  private getPaginatedUserRepos():void{
    const params:GetUserRepoParams = {
      username:this.username as string,
      pageSize:this.pageSize,
      pageNumber:this.pageNumber
    }
    this.subscriptions.add(this.githubService.getUserRepos(params).subscribe({
        next: ((res: any) =>  {
          this.userRepoList = res.data;
          this.repoCount = (this.userMetadata as GitHubUser).public_repos;
        }),
        complete: () => {this.userRepoListFetched = true},
        error: () => {this.onError()}
    }))
  }

  public onPaginate(event:any):void {
    this.pageSize = event.rows;
    this.pageNumber = event.page + 1;
    this.userRepoList = new Array(this.pageSize).fill(null);
    this.userRepoListFetched = false;
    if(this.searchModeEnabled){
      this.searchRepos(this.searchControl.value)
    }else{
      this.getPaginatedUserRepos()
    }
  }

  private onError():void{
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Unable to fetch the user repositories'});
    this.router.navigate(['/login'])
  }

  public trackRepo(index:number, repo:any):string{
    return repo ? repo.id:null; 
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }
}
