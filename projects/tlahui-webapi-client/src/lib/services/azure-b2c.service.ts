import { Component, Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import * as Msal from 'msal';

import { TlahuiAuthConfig } from '../infrastructure/tlahui-auth-comfig'
import { Observable } from 'rxjs';
import '../infrastructure/rxjs-extensions'

const CONFIG = TlahuiAuthConfig.Settings;

@Injectable({
  providedIn: 'root',
})
export class AzureB2cService {
  public access_token = null;
  private MsalApp: any;
  private logger: any;
  public user;
  public isAuthenticated = false;
  B2CTodoAccessTokenKey = "b2c.tlahui.access.token";
  public accessToken: any;

  constructor() {


    this.MsalApp = new Msal.UserAgentApplication(
      CONFIG.clientID,
      CONFIG.authority,
      function (errorDesc, token, error, tokenType) {
          if (errorDesc || error || !this.MsalApp.getUser()) {
              console.log(error + ': ' + errorDesc);
              this.loginRedirect();
              return;
          }
          this.acquireToken();
      });
 

      if (!this.MsalApp.isCallback(window.location.hash) && window.parent === window && !window.opener) {
        // bootstrap flow
        this.acquireToken();
      }

  }

  public login() {
    this.MsalApp.loginRedirect(CONFIG.b2cScopes);
  }


  public acquireToken() {
    this.MsalApp.getUser(); // issue https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/144 workaround
    return this.MsalApp.acquireTokenSilent(CONFIG.b2cScopes)
        .then(token => {
           
            this.accessToken = token;
            this.saveAccessTokenToCache(this.accessToken);
            
        }, error => {
          this.accessToken = null;
            console.log(error);
            this.login(); // redirect to login when cannot get an access token
        });
}


 public saveAccessTokenToCache(accessToken: string): void {
  localStorage.setItem(this.B2CTodoAccessTokenKey, accessToken);
};


public getAccessTokenFromCache(): string {

  return this.access_token = localStorage[this.B2CTodoAccessTokenKey];

}

  public logout() {
    this.MsalApp.logout();
  }

  public isOnline(): boolean {
    return this.MsalApp.getUser() != null;
  }

  public getCurrentLogin() {
    const user = this.MsalApp.getUser();
    return user;
  }

  


public getToken() {
    return this.MsalApp.acquireTokenSilent(CONFIG.b2cScopes).then(accessToken => {
     return accessToken;
     },
      error => {
      return      this.MsalApp.acquireTokenSilent(CONFIG.b2cScopes).then(accessToken => { 
      return accessToken;
     },
      err => {
        console.error(err);
       });
     });
   }
}