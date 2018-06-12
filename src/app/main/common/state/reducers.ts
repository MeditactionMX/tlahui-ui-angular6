import * as fromSession from './reducers/app-session-reducer';

export interface State{
    session: fromSession.AppSession
};


export const reducers = {
    session: fromSession.AppSessionReducer
}