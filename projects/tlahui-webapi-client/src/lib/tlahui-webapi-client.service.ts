import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class TlahuiWebApiClientService {

  protected abstract baseUrl: string;
  protected abstract endPoint: string;
  protected abstract parseData(data: any): any;


  constructor(
    private httpClient: HttpClient,
  ) { }

  public post(data: any): Observable<any> {
    return this.httpClient.post(
      `${this.baseUrl}/${this.endPoint}`,
      data
    ).pipe(
      map(this.parseData)
    );
  }

  public get(id: number): Observable<any>  {
    return this.httpClient.get(
      `${this.baseUrl}/${this.endPoint}/${id}`,
    ).pipe(
      map(this.parseData)
    );
  }

  public put(data: any): Observable<any> {
    return this.httpClient.put(
      `${this.baseUrl}/${this.endPoint}`,
      data
    ).pipe(
      map(this.parseData)
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(
      `${this.baseUrl}/${this.endPoint}/${id}`,
    ).pipe(
      map(this.parseData)
    );
  }
}
