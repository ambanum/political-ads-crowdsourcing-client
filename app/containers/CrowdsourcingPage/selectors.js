import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the crowdsourcingPage state domain
 */

const selectCrowdsourcingPageDomain = state =>
  state.crowdsourcingPage || initialState;

const makeSelectCrowdsourcingPage = () =>
  createSelector(
    selectCrowdsourcingPageDomain,
    substate => substate,
  );

const makeSelectAd = () =>
  createSelector(
    selectCrowdsourcingPageDomain,
    substate => substate.ad,
  );

const makeSelectLoading = () =>
  createSelector(
    selectCrowdsourcingPageDomain,
    substate => substate.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectCrowdsourcingPageDomain,
    substate => substate.error,
  );

export {
  makeSelectCrowdsourcingPage,
  makeSelectAd,
  makeSelectLoading,
  makeSelectError,
};
