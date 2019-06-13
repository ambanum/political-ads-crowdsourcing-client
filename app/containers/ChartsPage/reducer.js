/*
 *
 * ChartsPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_ADS_STATS,
  LOAD_ADS_STATS_SUCCESS,
  LOAD_ADS_STATS_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  adsStats: null,
};

/* eslint-disable default-case, no-param-reassign */
const chartsPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_ADS_STATS:
        draft.loading = true;
        draft.error = false;
        draft.adsStats = null;
        break;

      case LOAD_ADS_STATS_SUCCESS:
        draft.loading = false;
        draft.adsStats = action.adsStats;
        break;

      case LOAD_ADS_STATS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default chartsPageReducer;
