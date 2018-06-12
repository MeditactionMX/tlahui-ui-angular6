import { Observable } from "rxjs/Observable";
import { UITable } from  '../entities/dynamicforms/ui-table';

export interface IDynamicFormRepository{
 
    GetTableMetadata(ResourceId: string,  Language: string, Locale: string): Observable<UITable>;

}