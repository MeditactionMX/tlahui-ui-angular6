import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { QueryOptions } from '../common/query.options';
import { IGenericrepository } from '../common/i-generic-repository';
import { UITable } from '../entities/dynamicforms/index'; 
 
export class HTTPResourceService<T> implements IGenericrepository<T> {
 

  constructor(
    private http: HttpClient,
    private url: string,
    private endpoint: string) {}
  
  Get(orderBy: any[], filter: any[], includeProperties: string, PageNumber: number, PageSize: number): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}/${this.endpoint}`)
    .pipe(
      retry(3), 
      catchError(this.handleError) 
    );
  }

  GetByID(Id: any): Observable<T> {
    return this.http.get<T>(`${this.url}/${this.endpoint}/${Id}`)
        .pipe(
          retry(3), 
          catchError(this.handleError) 
        );
  }

  Insert(entity: T): Observable<T> {
    return this.http.post<T>(`${this.url}/${this.endpoint}`, entity)
        .pipe(
        retry(3), 
        catchError(this.handleError) 
      );
  }

 
  Update(entityToUpdate: T): Observable<T> {
    return this.http.post<T>(`${this.url}/${this.endpoint}`, entityToUpdate)
        .pipe(
        retry(3), 
        catchError(this.handleError) 
      );
  }


  DeleteByID(Id: any): Observable<any> {
    return this.http.delete(`${this.url}/${this.endpoint}/${Id}`)
    .pipe(
      retry(3), 
      catchError(this.handleError) 
    );
  }

  Delete(entityToDelete: T): Observable<any> {
    return this.http.delete(`${this.url}/${this.endpoint}`, entityToDelete)
    .pipe(
      retry(3), 
      catchError(this.handleError) 
    );
  }
    
  GetMetadataTable(): Observable<UITable>{
    return this.http.get<UITable>(`${this.url}/${this.endpoint}/metadata/table`)
        .pipe(
          retry(3), 
          catchError(this.handleError) 
        );
  }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    };
  
    makeIntentionalError() {
      return this.http.get('not/a/real/url')
        .pipe(
          catchError(this.handleError)
        );
    }
  
 
  

}