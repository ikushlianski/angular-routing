import {Component} from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({

  template: `
  <h1>Login</h1>
  <div>
    <input type="text" [(ngModel)]='user' placeholder="username">
    <input type="password" [(ngModel)]='password' placeholder="password">
    <button (click)="login()" class="btn btn-primary">Login</button>
  </div>
  `
})

export class LoginFormComponent {
  user = "";
  password = "";

  constructor(private loginService: LoginService,
              private router: Router) {}

  login() {
    if (this.loginService.login(this.user, this.password)) {
      this.router.navigate(['/']);
    }
  }
}
