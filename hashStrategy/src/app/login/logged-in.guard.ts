import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {Injectable} from '@angular/core';
import {LoginService} from './login.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private router:Router, private loginService:LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (! this.loginService.loggedIn){
      this.router.navigate(['/login']);
      return false;
    } else {
      return true
    }

  }
}
