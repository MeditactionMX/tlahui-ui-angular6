import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';
import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { AzureB2cService } from './azure-b2c.service';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/fromPromise';
import { ISessionPropertiesProvider } from '../infrastructure/i-session-properties-provider';


@Injectable()
export class TlahuiHttpInterceptor implements HttpInterceptor {

  private BucketHeader: string = "X-Tlahui-Bucket";
  private LangHeader: string = "Accept-Language";

  constructor(private msalService: AzureB2cService, 
    @Inject('ISessionPropertiesProvider') private sessionPropertiesProvider:ISessionPropertiesProvider
      ) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return Observable.fromPromise(this.handleAccess(request, next));
  }

  private async handleAccess(request: HttpRequest<any>, next: HttpHandler):
      Promise<HttpEvent<any>> {
          
    const token = await this.msalService.getAccessTokenFromCache();
    let changedRequest = request;


    // HttpHeader object immutable - copy values
    const headerSettings: {[name: string]: string | string[]; } = {};

    for (const key of request.headers.keys()) {
      headerSettings[key] = request.headers.getAll(key);
    }
    if (token) {
      headerSettings['Authorization'] = 'Bearer ' + token;
    }

    if (this.sessionPropertiesProvider.GetBuckedId()) {
      headerSettings[this.BucketHeader] = this.sessionPropertiesProvider.GetBuckedId();
    }


    if (this.sessionPropertiesProvider.GetLanguage()) {
      headerSettings[this.LangHeader] = this.sessionPropertiesProvider.GetLanguage();
    }
    

    headerSettings['Content-Type'] = 'application/json';
    const newHeader = new HttpHeaders(headerSettings);

    changedRequest = request.clone({
      headers: newHeader});
    return next.handle(changedRequest).toPromise();
  }

}