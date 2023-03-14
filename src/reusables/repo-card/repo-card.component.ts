import { Component, Input } from '@angular/core';
import { GitHubRepo } from 'src/models/github-api';

@Component({
  selector: 'git-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent {

  @Input() repo:GitHubRepo | null = null;
  
  constructor(){}
}
