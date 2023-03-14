import { Component } from '@angular/core';
import { GITHUB_TOKEN } from 'src/constants';
import { GithubService } from 'src/services/github.service';

@Component({
  selector: 'git-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private github:GithubService){}

  ngOnInit(){
      this.github.initializeOctokit(GITHUB_TOKEN);
  }
}
