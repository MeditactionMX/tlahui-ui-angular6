import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IDynamicFormRepository } from '../common/i-dynamic-form-repository';
import { UITable } from '../entities/dynamicforms/ui-table';



export class HTTPDynamicFormsService implements IDynamicFormRepository {


    constructor(
        private http: HttpClient,
        private url: string,
        private endpoint: string,
        private ResourceId: string,
        private Languaje: string,
        private Locale: string) {

    }


    public GetTableMetadata(ResourceId: string, Language: string, Locale: string): Observable<UITable> {
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