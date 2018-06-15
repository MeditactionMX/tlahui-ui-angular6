import { Observable } from "rxjs/Observable";
import {UITable} from '../entities/dynamicforms/index';
// This definition mus match backend IGenericrepository
// Tlahui.Web.API\GenericRepository\IGenericRepository.cs

export interface IGenericrepository<T>{

    Get(orderBy: Array<any>, 
        filter: Array<any>,
        includeProperties: string, 
        PageNumber: number, 
        PageSize: number
        ): Observable<Array<T>>;

    GetByID(Id: any): Observable<T>;

    Insert(entity: T): Observable<T>;

    DeleteByID(Id: any): Observable<any>;

    Delete(entityToDelete: T ): Observable<any>;

    Update(entityToUpdate: T ): Observable<T>;

    GetMetadataTable(): Observable<UITable>;

}