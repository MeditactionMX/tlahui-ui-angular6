import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AzureB2cService } from 'tlahui-webapi-client';


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AzureB2cService, public router: Router) {}
  canActivate(): boolean {
      
    if (!this.auth.isOnline()) {
      this.router.navigate(['login']);
      return false;
    }
    
    return true;
  }
}