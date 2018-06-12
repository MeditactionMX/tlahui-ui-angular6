import { ActionReducer, Action } from '@ngrx/store';
import { InitialState } from '@ngrx/store/src/models';
import { AppSessionActions, AppSessionActionTypes } from '../actions/app-session-actions';

export interface AppSession{
    BucketId: string;
    Language: string;
}

const InitialState: AppSession = {
    BucketId:"",
    Language: "es-MX" 
}
 
export function AppSessionReducer(state= InitialState, action: AppSessionActions ): AppSession{

    switch (action.type) {

        case AppSessionActionTypes.SetBucket:{
            const value = action.payload;
            return {
                ...state, BucketId: value
            };
        }

        case AppSessionActionTypes.SetLanguage:{
            const value = action.payload;
            return {
                ...state, Language: value
            };
        }


        default: {
            return state;
          }
    }

}


export const getBucketId = (state: AppSession) => state.BucketId;
export const getLanguage = (state: AppSession) => state.Language;