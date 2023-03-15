import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { GitHubUser } from 'src/models/github-api';
import { GithubService } from 'src/services/github.service';

@Component({
  selector: 'git-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent {
  public username: string | null = null;
  public userMetadata: GitHubUser | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private githubService: GithubService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    if (this.username) {
      this.getUser();
    }
  }

  private getUser(): void {
    this.githubService.getUserMetaData(this.username as string).subscribe({
      next: (res: GitHubUser) => {
        this.userMetadata = res;
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Unable to fetch the user',
        });
        setTimeout(()=>{
          this.router.navigate(['/login']);
        },1000)
      },
    });
  }
}
