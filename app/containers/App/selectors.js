import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;

const selectGlobal = state => state.global || initialState;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectAds = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.ads,
  );

const makeSelectCounts = () =>
  createSelector(
    selectGlobal,
    substate => substate.counts,
  );

export {
  makeSelectLocation,
  makeSelectLoading,
  makeSelectError,
  makeSelectAds,
  makeSelectCounts,
};
