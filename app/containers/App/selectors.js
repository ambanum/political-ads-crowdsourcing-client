import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;

const selectGlobal = state => state.global || initialState;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectAds = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.ads,
  );

export { makeSelectLocation, makeSelectAds };
