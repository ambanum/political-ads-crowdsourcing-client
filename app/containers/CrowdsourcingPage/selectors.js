import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the crowdsourcingPage state domain
 */

const selectCrowdsourcingPageDomain = state =>
  state.crowdsourcingPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CrowdsourcingPage
 */

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

const makeSelectCounts = () =>
  createSelector(
    selectCrowdsourcingPageDomain,
    substate => substate.counts,
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
  makeSelectCounts,
  makeSelectLoading,
  makeSelectError,
};
