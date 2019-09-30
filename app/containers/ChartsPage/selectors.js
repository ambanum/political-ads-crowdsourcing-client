import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the chartsPage state domain
 */

const selectChartsPageDomain = state => state.chartsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ChartsPage
 */

const makeSelectChartsPage = () =>
  createSelector(
    selectChartsPageDomain,
    substate => substate,
  );

const makeSelectAdsStats = () =>
  createSelector(
    selectChartsPageDomain,
    substate => substate.adsStats,
  );

const makeSelectLoading = () =>
  createSelector(
    selectChartsPageDomain,
    substate => substate.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectChartsPageDomain,
    substate => substate.error,
  );

export default makeSelectChartsPage;
export {
  selectChartsPageDomain,
  makeSelectAdsStats,
  makeSelectLoading,
  makeSelectError,
};
