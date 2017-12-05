import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import * as housesReducer from './houses/house.reducer';

export interface State {
  houses: housesReducer.State;
  router: RouterReducerState;
}
export const reducers: ActionReducerMap<State> = {
  houses: housesReducer.reducer,
  router: routerReducer
};

export const developmentReducer: ActionReducer<State> = combineReducers(reducers);
export const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
