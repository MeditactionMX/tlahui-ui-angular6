import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";
import { HTTPResourceService , Category } from 'tlahui-webapi-client'; 
 

@Injectable() 
export class TlahuiApi extends HTTPResourceService<Category>{
    private urlx="https://localhost:8021/api/";
    private endpointx="store/categories";


    constructor(protected httpClient:HttpClient){
        super(
            httpClient,
            'https://localhost:8021/api/',
            'store/categories');
        
    }

    lista(): Observable<string[]> {
        return this.httpClient
          .get<string[]>(`${this.urlx}/${this.endpointx}`);
      }

}