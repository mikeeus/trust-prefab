import { createSelector } from 'reselect';
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

// // ************************************
// // House State Functions
// // ************************************
export const getHouseState = (state: State) => state.houses;

export const getHouses = createSelector(getHouseState, housesReducer.getHouses);
export const getHouse = (id: string) =>
  createSelector(getHouseState, (state: housesReducer.State) => state.entities[id]);

export const getHousebyName = (name: string) =>
  createSelector(getHouseState, (state: housesReducer.State) => state.entities[name]);
export const getHousebyModel = (model: string) =>
  createSelector(getHouseState, (state: housesReducer.State) => state.entities[state.modelsMap[model]]);
export const searchHousesByName = (name: string) =>
  createSelector(getHouseState, (state: housesReducer.State) => state.ids.filter(id => id.indexOf(name) !== -1));
export const searchHousesByModel = (model: string) =>
  createSelector(getHouseState, (state: housesReducer.State) => state.models.filter(id => id.indexOf(name) !== -1));
