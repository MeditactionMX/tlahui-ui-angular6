import { ISessionPropertiesProvider } from 'tlahui-webapi-client'
import { Store } from '@ngrx/store';
import {} from 'rxjs'
import *  as fromRoot from './../reducers';
import { Observable } from 'rxjs/internal/Observable';
import { resolve } from 'url';

export class AppSessionProvider implements ISessionPropertiesProvider {

private BucketId: Observable<string>;
private Language: Observable<string>;

    constructor (private store: Store<fromRoot.State>){


    }

    GetBuckedId(): string {
        throw new Error("Method not implemented.");
    }

    SetBuckedId(BucketId: string) {
        throw new Error("Method not implemented.");
    }
    GetLanguage(): string {
        throw new Error("Method not implemented.");
    }
    SetLanguage(Language: string) {
        throw new Error("Method not implemented.");
    }
}