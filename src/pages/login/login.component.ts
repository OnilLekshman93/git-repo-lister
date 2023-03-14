import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'git-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public usernameFormControl: FormControl = new FormControl('');

  constructor(private router: Router) {}

  public navigateToDashboard(): void {
    const enteredUsername = this.usernameFormControl.value.trim();
    this.router.navigate(['/dashboard', enteredUsername]);
  }
}
