import { Action } from '@ngrx/store';

export enum AppSessionActionTypes {
    SetBucket = '[Session] SetBucket',
    SetLanguage = '[Session] SetLanguage',
}


export class SetBucket implements Action {
    readonly type = AppSessionActionTypes.SetBucket;
  
    constructor(public payload: string) {}
  }


  export class SetLanguage implements Action {
    readonly type = AppSessionActionTypes.SetLanguage;
  
    constructor(public payload: string) {}
  }


  export type AppSessionActions =
  | SetBucket
  | SetLanguage;