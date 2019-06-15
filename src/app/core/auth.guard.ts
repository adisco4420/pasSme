import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public authSrv: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.authSrv.isLogin()) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
