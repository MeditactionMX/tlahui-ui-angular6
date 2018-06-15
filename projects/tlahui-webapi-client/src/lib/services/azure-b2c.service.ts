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


  private Logger: any;

  constructor() {

    console.log("Iniciando MSAL");

    //Crear el objeto para bitacora
    this.logger = new Msal.Logger(this.loggerCallback, { level: Msal.LogLevel.Verbose, correlationId: '12345' });

    // cacheLocation defaults to sessionStorage if not set in the constructor
    this.MsalApp = new Msal.UserAgentApplication(CONFIG.clientID, CONFIG.authority, 
      (errorDesc, token, error, tokenType) => {
        // callback for login redirect
        if (error) {
          console.log(JSON.stringify(error));
          return;
        }
        this.access_token = token;
        localStorage.setItem("b2c.tlahui.access.token", token);
      }
      ,
      { cacheLocation: 'localStorage', logger: this.logger });

  }


public  data(): string{
return "XXXX";

}


 



  public loggerCallback(logLevel, message, piiEnabled) {
    console.log(message);
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


  //LOgout app
  public logout() {
    this.MsalApp.logout();
  }


  //returns if user is on line
  public isOnline(): boolean {
    return this.MsalApp.getUser() != null;
  }


  //Get curent login
  public getCurrentLogin() {
    const user = this.MsalApp.getUser();
    return user;
  }




  public getToken() {
    this.MsalApp.getUser();
    return this.MsalApp.acquireTokenSilent(CONFIG.b2cScopes).then(accessToken => {
      this.saveAccessTokenToCache(accessToken)
    },
      error => {
        return this.MsalApp.acquireTokenSilent(CONFIG.b2cScopes).then(accessToken => {
          this.saveAccessTokenToCache(accessToken)
        },
          err => {
            console.error(err);
          });
      });
  }

}