import { Component, Input } from '@angular/core';
import { GitHubUser } from 'src/models/github-api';

@Component({
  selector: 'git-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  @Input() userMetadata: GitHubUser | null = null;

  constructor() {}
}
